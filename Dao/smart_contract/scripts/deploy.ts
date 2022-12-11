/* global ethers */
/* eslint prefer-const: "off" */

import * as fs from "fs"
import verify from "../helper-function"

import { ContractReceipt } from "ethers";
import { ethers, network } from "hardhat";
import { DiamondCutFacet, GovernanceToken } from "../typechain-types";
import {
  QUORUM_PERCENTAGE,
  VOTING_PERIOD, developmentChains,
  VOTING_DELAY, ADDRESS_ZERO
} from "../helper-hardhat-config"
import { GovernorContract } from "../typechain-types";
export let DiamondAddress: string;
export let governorContractAddress: string;
import { BoxFacet } from "../typechain-types";



export async function deployDiamond() {


  const FacetCutAction = { Add: 0, Replace: 1, Remove: 2 };

  function getSelectors(contract: any) {
    const signatures = Object.keys(contract.interface.functions);
    const selectors = signatures.reduce((acc: any, val: string) => {
      if (val !== "init(bytes)") {
        acc.push(contract.interface.getSighash(val));
      }
      return acc;
    }, []);
    selectors.contract = contract;
    selectors.remove = remove;
    selectors.get = get;
    return selectors;
  }

  // get function selector from function signature
  function getSelector(func: string) {
    const abiInterface = new ethers.utils.Interface([func]);
    return abiInterface.getSighash(ethers.utils.Fragment.from(func));
  }

  // used with getSelectors to remove selectors from an array of selectors
  // functionNames argument is an array of function signatures
  // didn't really use this in the tests
  function remove(this: any, functionNames: any) {
    const selectors = functionNames.filter((v: string) => {
      for (const functionName of functionNames) {
        if (v === this.contract.interface.getSighash(functionName)) {
          return false;
        }
      }
      return true;
    });
    selectors.contract = this.contract;
    selectors.remove = this.remove;
    selectors.get = this.get;
    return selectors;
  }

  function get(this: any, functionNames: any) {
    const selectors = this.filter((v: any) => {
      for (const functionName of functionNames) {
        if (v === this.contract.interface.getSighash(functionName)) {
          return true;
        }
      }
      return false;
    });
    selectors.contract = this.contract;
    selectors.remove = this.remove;
    selectors.get = this.get;
    return selectors;
  }

  function removeSelectors(selectors: any[], signatures: any[]) {
    const iface = new ethers.utils.Interface(
      signatures.map((v: string) => "function " + v)
    );
    const removeSelectors = signatures.map(
      (v: string | FunctionFragment | ErrorFragment) => iface.getSighash(v)
    );
    selectors = selectors.filter((v: any) => !removeSelectors.includes(v));
    return selectors;
  }

  // find a particular address position in the return value of diamondLoupeFacet.facets()
  function findAddressPositionInFacets(
    facetAddress: any,
    facets: string | any[]
  ) {
    for (let i = 0; i < facets.length; i++) {
      if (facets[i].facetAddress === facetAddress) {
        return i;
      }
    }
  }




  const accounts = await ethers.getSigners();
  const contractOwner = accounts[0];

  console.log("owner", contractOwner);

  // deploy DiamondCutFacet
  const DiamondCutFacet = await ethers.getContractFactory("DiamondCutFacet");
  const diamondCutFacet = await DiamondCutFacet.deploy();
  await diamondCutFacet.deployed();
  console.log("DiamondCutFacet deployed:", diamondCutFacet.address);

  // deploy Diamond
  const Diamond = await ethers.getContractFactory("Diamond");
  const diamond = await Diamond.deploy(
    contractOwner.address,
    diamondCutFacet.address
  );
  await diamond.deployed();
  console.log("Diamond deployed:", diamond.address);

  // deploy DiamondInit
  const DiamondInit = await ethers.getContractFactory("DiamondInit");
  const diamondInit = await DiamondInit.deploy();
  await diamondInit.deployed();
  console.log("DiamondInit deployed:", diamondInit.address);



  console.log("export const DiamondCutFacetAdress = \"", diamondCutFacet.address, "\"");
  console.log("export const DiamondAddress  = \"", diamond.address, "\"");
  console.log("export const DiamondInitAddress  = \"", diamondInit.address, "\"");



  // deploy facets
  console.log("");
  console.log("//Deploying facets");
  const FacetNames = ["DiamondLoupeFacet", "OwnershipFacet", "BoxFacet", "GovernanceToken"];
  const cut = [];
  for (const FacetName of FacetNames) {
    const Facet = await ethers.getContractFactory(FacetName);
    const facet = await Facet.deploy();
    await facet.deployed();
    console.log(`export const ${FacetName} = "${facet.address}"`);
    cut.push({
      facetAddress: facet.address,
      action: FacetCutAction.Add,
      functionSelectors: getSelectors(facet),
    });
  }

  // upgrade diamond with facets
  console.log("");
  console.log("Diamond Cut:", cut);
  const diamondCut = (await ethers.getContractAt(
    "IDiamondCut",
    diamond.address
  )) as DiamondCutFacet;
  let tx;
  let receipt: ContractReceipt;
  // call to init function
  let functionCall = diamondInit.interface.encodeFunctionData("init");
  tx = await diamondCut.diamondCut(cut, diamondInit.address, functionCall);
  console.log("Diamond cut tx: ", tx.hash);
  receipt = await tx.wait();
  if (!receipt.status) {
    throw Error(`Diamond upgrade failed: ${tx.hash}`);
  }
  console.log("Completed diamond cut");
  DiamondAddress = diamond.address;


  const TimeLock = await ethers.getContractFactory("TimeLock");
  const timeLock = await TimeLock.deploy(30, [], [], contractOwner.address);
  await timeLock.deployed();

  const delegatet = (await ethers.getContractAt(
    "GovernanceToken",
    DiamondAddress
  )) as GovernanceToken;
  await delegatet.delegate(contractOwner.address);


  console.log("minting", await delegatet.mint(contractOwner.address, 1000000));

  const transfer = (await ethers.getContractAt(
    "BoxFacet",
    DiamondAddress
  )) as BoxFacet;
  const transferTx = await transfer.changeOwner(timeLock.address);
  await transferTx.wait(1)


  const transfer2 = (await ethers.getContractAt(
    "BoxFacet",
    DiamondAddress
  )) as BoxFacet;
  const transferTx2 = await transfer2.retrieveOwner();
  console.log(transferTx2);
  console.log(timeLock.address);





  console.log("----------------------------------------------------")
  console.log("Setting up contracts for roles...")
  // would be great to use multicall here...
  const proposerRole = await timeLock.PROPOSER_ROLE()
  const executorRole = await timeLock.EXECUTOR_ROLE()
  const adminRole = await timeLock.TIMELOCK_ADMIN_ROLE()



  console.log("----------------------------------------------------")
  console.log("Deploying GovernorContract")
  const GovernorContract = await ethers.getContractFactory("GovernorContract");
  const governorContract = await GovernorContract.deploy(
    delegatet.address,
    timeLock.address,
    QUORUM_PERCENTAGE,
    VOTING_PERIOD,
    VOTING_DELAY,
  );
  await governorContract.deployed();

  governorContractAddress = governorContract.address


  console.log(`export const timeLockAddress = "${timeLock.address}"`)
  console.log(`export const GovenorContract = "${governorContract.address}"`)

  const governor = (await ethers.getContractAt(
    "GovernorContract",
    governorContract.address
  )) as GovernorContract;


  const proposerTx = await timeLock.grantRole(proposerRole, governor.address)
  await proposerTx.wait(1)
  const executorTx = await timeLock.grantRole(executorRole, ADDRESS_ZERO)
  await executorTx.wait(1)

}

if (require.main === module) {
  deployDiamond()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

exports.deployDiamond = deployDiamond;
