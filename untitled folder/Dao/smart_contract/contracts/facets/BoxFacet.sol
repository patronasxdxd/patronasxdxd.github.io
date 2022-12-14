// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract BoxFacet  {
  uint256 private value;
  address private owner;
  bool private createdOwner;
  uint256 private proposals;
  uint256 BoxCount;

  struct BoxStruct {
        uint256 proposalId;
        uint256 amount;
        string value;
        uint256 timestamp;
    }

  BoxStruct[] transactions;

  constructor(){
    owner = msg.sender;
    createdOwner = true;

  }

  // Emitted when the stored value changes
  event ValueChanged(uint256 newValue);

  // Stores a new value in the contract
  function store(uint256 newValue) public {
    value = newValue;
  
    emit ValueChanged(newValue);
  }

  // Reads the last stored value
  function retrieve() public view returns (uint256) {
    return value;
  }

  function changeOwner(address newOwner) public {
    owner = newOwner;
  }


  function addProposalStruct(uint256 proposalId, uint256 amount, string memory value) public {
        BoxCount += 1;
        addProposal(proposalId);
        transactions.push(BoxStruct(proposalId, amount, value, block.timestamp));
    }

  function addProposal(uint256 proposalId) public {
    proposals = proposalId;
  }

  function getProposal() public view returns(uint256) {
    return proposals;
  }

  function retrieveOwner() public view returns(address){
    return owner;
  }

  function getAllTransactions() public view returns (BoxStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return BoxCount;
    }

 



  

}
