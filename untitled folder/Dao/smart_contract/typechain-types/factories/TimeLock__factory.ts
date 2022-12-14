/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TimeLock, TimeLockInterface } from "../TimeLock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minDelay",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "proposers",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "executors",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "CallExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "CallScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "Cancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "MinDelayChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "CANCELLER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EXECUTOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROPOSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TIMELOCK_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperation",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperationBatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperation",
    outputs: [
      {
        internalType: "bool",
        name: "registered",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationDone",
    outputs: [
      {
        internalType: "bool",
        name: "done",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationPending",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationReady",
    outputs: [
      {
        internalType: "bool",
        name: "ready",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "schedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "scheduleBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "updateDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620023663803806200236683398101604081905262000034916200040e565b82828262000052600080516020620022e68339815191528062000246565b6200007c60008051602062002306833981519152600080516020620022e683398151915262000246565b620000a660008051602062002326833981519152600080516020620022e683398151915262000246565b620000d060008051602062002346833981519152600080516020620022e683398151915262000246565b620000eb600080516020620022e68339815191523362000291565b62000106600080516020620022e68339815191523062000291565b60005b8251811015620001a4576200015c600080516020620023068339815191528483815181106200014857634e487b7160e01b600052603260045260246000fd5b60200260200101516200029160201b60201c565b62000191600080516020620023468339815191528483815181106200014857634e487b7160e01b600052603260045260246000fd5b6200019c816200047f565b905062000109565b5060005b8151811015620001fa57620001e7600080516020620023268339815191528383815181106200014857634e487b7160e01b600052603260045260246000fd5b620001f2816200047f565b9050620001a8565b5060028390556040805160008152602081018590527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1505050505050620004bd565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b6200029d8282620002a1565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166200029d576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620002fd3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b80516001600160a01b03811681146200035957600080fd5b919050565b600082601f8301126200036f578081fd5b815160206001600160401b03808311156200038e576200038e620004a7565b8260051b604051601f19603f83011681018181108482111715620003b657620003b6620004a7565b60405284815283810192508684018288018501891015620003d5578687fd5b8692505b858310156200040257620003ed8162000341565b845292840192600192909201918401620003d9565b50979650505050505050565b60008060006060848603121562000423578283fd5b835160208501519093506001600160401b038082111562000442578384fd5b62000450878388016200035e565b9350604086015191508082111562000466578283fd5b5062000475868287016200035e565b9150509250925092565b6000600019821415620004a057634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b611e1980620004cd6000396000f3fe6080604052600436106101bb5760003560e01c80638065657f116100ec578063bc197c811161008a578063d547741f11610064578063d547741f14610582578063e38335e5146105a2578063f23a6e61146105b5578063f27a0c92146105e157600080fd5b8063bc197c8114610509578063c4d252f514610535578063d45c44351461055557600080fd5b806391d14854116100c657806391d1485414610480578063a217fddf146104a0578063b08e51c0146104b5578063b1c5f427146104e957600080fd5b80638065657f1461040c5780638f2a0bb01461042c5780638f61f4f51461044c57600080fd5b8063248a9ca31161015957806331d507501161013357806331d507501461038c57806336568abe146103ac578063584b153e146103cc57806364d62353146103ec57600080fd5b8063248a9ca31461030b5780632ab0f5291461033b5780632f2ff15d1461036c57600080fd5b80630d3cf6fc116101955780630d3cf6fc14610260578063134008d31461029457806313bc9f20146102a7578063150b7a02146102c757600080fd5b806301d5062a146101c757806301ffc9a7146101e957806307bd02651461021e57600080fd5b366101c257005b600080fd5b3480156101d357600080fd5b506101e76101e236600461176e565b6105f6565b005b3480156101f557600080fd5b50610209610204366004611974565b61068b565b60405190151581526020015b60405180910390f35b34801561022a57600080fd5b506102527fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6381565b604051908152602001610215565b34801561026c57600080fd5b506102527f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca581565b6101e76102a2366004611705565b6106b6565b3480156102b357600080fd5b506102096102c2366004611931565b61076b565b3480156102d357600080fd5b506102f26102e236600461163e565b630a85bd0160e11b949350505050565b6040516001600160e01b03199091168152602001610215565b34801561031757600080fd5b50610252610326366004611931565b60009081526020819052604090206001015490565b34801561034757600080fd5b50610209610356366004611931565b6000908152600160208190526040909120541490565b34801561037857600080fd5b506101e7610387366004611949565b610791565b34801561039857600080fd5b506102096103a7366004611931565b6107bb565b3480156103b857600080fd5b506101e76103c7366004611949565b6107d4565b3480156103d857600080fd5b506102096103e7366004611931565b610857565b3480156103f857600080fd5b506101e7610407366004611931565b61086d565b34801561041857600080fd5b50610252610427366004611705565b610911565b34801561043857600080fd5b506101e7610447366004611884565b610950565b34801561045857600080fd5b506102527fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc181565b34801561048c57600080fd5b5061020961049b366004611949565b610acc565b3480156104ac57600080fd5b50610252600081565b3480156104c157600080fd5b506102527ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f78381565b3480156104f557600080fd5b506102526105043660046117e0565b610af5565b34801561051557600080fd5b506102f2610524366004611599565b63bc197c8160e01b95945050505050565b34801561054157600080fd5b506101e7610550366004611931565b610b3a565b34801561056157600080fd5b50610252610570366004611931565b60009081526001602052604090205490565b34801561058e57600080fd5b506101e761059d366004611949565b610c0f565b6101e76105b03660046117e0565b610c34565b3480156105c157600080fd5b506102f26105d03660046116a3565b63f23a6e6160e01b95945050505050565b3480156105ed57600080fd5b50600254610252565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc161062081610de8565b6000610630898989898989610911565b905061063c8184610df5565b6000817f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8b8b8b8a60405161067896959493929190611b08565b60405180910390a3505050505050505050565b60006001600160e01b03198216630271189760e51b14806106b057506106b082610ee4565b92915050565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e636106e2816000610acc565b6106f0576106f08133610f19565b6000610700888888888888610911565b905061070c8185610f7d565b61071888888888611019565b6000817fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b588a8a8a8a6040516107509493929190611ad6565b60405180910390a3610761816110ec565b5050505050505050565b60008181526001602052604081205460018111801561078a5750428111155b9392505050565b6000828152602081905260409020600101546107ac81610de8565b6107b68383611125565b505050565b60008181526001602052604081205481905b1192915050565b6001600160a01b03811633146108495760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61085382826111a9565b5050565b60008181526001602081905260408220546107cd565b3330146108d05760405162461bcd60e51b815260206004820152602b60248201527f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742060448201526a62652074696d656c6f636b60a81b6064820152608401610840565b60025460408051918252602082018390527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1600255565b600086868686868660405160200161092e96959493929190611b08565b6040516020818303038152906040528051906020012090509695505050505050565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc161097a81610de8565b8887146109995760405162461bcd60e51b815260040161084090611c1d565b8885146109b85760405162461bcd60e51b815260040161084090611c1d565b60006109ca8b8b8b8b8b8b8b8b610af5565b90506109d68184610df5565b60005b8a811015610abe5780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8e8e85818110610a2457634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610a39919061157f565b8d8d86818110610a5957634e487b7160e01b600052603260045260246000fd5b905060200201358c8c87818110610a8057634e487b7160e01b600052603260045260246000fd5b9050602002810190610a929190611caa565b8c8b604051610aa696959493929190611b08565b60405180910390a3610ab781611d9c565b90506109d9565b505050505050505050505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60008888888888888888604051602001610b16989796959493929190611b45565b60405160208183030381529060405280519060200120905098975050505050505050565b7ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783610b6481610de8565b610b6d82610857565b610bd35760405162461bcd60e51b815260206004820152603160248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e2063616044820152701b9b9bdd0818994818d85b98d95b1b1959607a1b6064820152608401610840565b6000828152600160205260408082208290555183917fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7091a25050565b600082815260208190526040902060010154610c2a81610de8565b6107b683836111a9565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63610c60816000610acc565b610c6e57610c6e8133610f19565b878614610c8d5760405162461bcd60e51b815260040161084090611c1d565b878414610cac5760405162461bcd60e51b815260040161084090611c1d565b6000610cbe8a8a8a8a8a8a8a8a610af5565b9050610cca8185610f7d565b60005b89811015610dd25760008b8b83818110610cf757634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610d0c919061157f565b905060008a8a84818110610d3057634e487b7160e01b600052603260045260246000fd5b9050602002013590503660008a8a86818110610d5c57634e487b7160e01b600052603260045260246000fd5b9050602002810190610d6e9190611caa565b91509150610d7e84848484611019565b84867fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b5886868686604051610db59493929190611ad6565b60405180910390a35050505080610dcb90611d9c565b9050610ccd565b50610ddc816110ec565b50505050505050505050565b610df28133610f19565b50565b610dfe826107bb565b15610e635760405162461bcd60e51b815260206004820152602f60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c60448201526e1c9958591e481cd8da19591d5b1959608a1b6064820152608401610840565b600254811015610ec45760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e746044820152652064656c617960d01b6064820152608401610840565b610ece8142611d1e565b6000928352600160205260409092209190915550565b60006001600160e01b03198216637965db0b60e01b14806106b057506301ffc9a760e01b6001600160e01b03198316146106b0565b610f238282610acc565b61085357610f3b816001600160a01b0316601461120e565b610f4683602061120e565b604051602001610f57929190611a61565b60408051601f198184030181529082905262461bcd60e51b825261084091600401611bea565b610f868261076b565b610fa25760405162461bcd60e51b815260040161084090611c60565b801580610fbe5750600081815260016020819052604090912054145b6108535760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e6720646570656044820152656e64656e637960d01b6064820152608401610840565b6000846001600160a01b0316848484604051611036929190611a51565b60006040518083038185875af1925050503d8060008114611073576040519150601f19603f3d011682016040523d82523d6000602084013e611078565b606091505b50509050806110e55760405162461bcd60e51b815260206004820152603360248201527f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e6720746044820152721c985b9cd858dd1a5bdb881c995d995c9d1959606a1b6064820152608401610840565b5050505050565b6110f58161076b565b6111115760405162461bcd60e51b815260040161084090611c60565b600090815260016020819052604090912055565b61112f8282610acc565b610853576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556111653390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6111b38282610acc565b15610853576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6060600061121d836002611d36565b611228906002611d1e565b6001600160401b0381111561124d57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611277576020820181803683370190505b509050600360fc1b816000815181106112a057634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106112dd57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000611301846002611d36565b61130c906001611d1e565b90505b60018111156113a0576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061134e57634e487b7160e01b600052603260045260246000fd5b1a60f81b82828151811061137257634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c9361139981611d85565b905061130f565b50831561078a5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610840565b80356001600160a01b038116811461140657600080fd5b919050565b60008083601f84011261141c578182fd5b5081356001600160401b03811115611432578182fd5b6020830191508360208260051b850101111561144d57600080fd5b9250929050565b600082601f830112611464578081fd5b813560206001600160401b0382111561147f5761147f611dcd565b8160051b61148e828201611cee565b8381528281019086840183880185018910156114a8578687fd5b8693505b858410156114ca5780358352600193909301929184019184016114ac565b50979650505050505050565b60008083601f8401126114e7578182fd5b5081356001600160401b038111156114fd578182fd5b60208301915083602082850101111561144d57600080fd5b600082601f830112611525578081fd5b81356001600160401b0381111561153e5761153e611dcd565b611551601f8201601f1916602001611cee565b818152846020838601011115611565578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215611590578081fd5b61078a826113ef565b600080600080600060a086880312156115b0578081fd5b6115b9866113ef565b94506115c7602087016113ef565b935060408601356001600160401b03808211156115e2578283fd5b6115ee89838a01611454565b94506060880135915080821115611603578283fd5b61160f89838a01611454565b93506080880135915080821115611624578283fd5b5061163188828901611515565b9150509295509295909350565b60008060008060808587031215611653578384fd5b61165c856113ef565b935061166a602086016113ef565b92506040850135915060608501356001600160401b0381111561168b578182fd5b61169787828801611515565b91505092959194509250565b600080600080600060a086880312156116ba578081fd5b6116c3866113ef565b94506116d1602087016113ef565b9350604086013592506060860135915060808601356001600160401b038111156116f9578182fd5b61163188828901611515565b60008060008060008060a0878903121561171d578081fd5b611726876113ef565b95506020870135945060408701356001600160401b03811115611747578182fd5b61175389828a016114d6565b979a9699509760608101359660809091013595509350505050565b600080600080600080600060c0888a031215611788578081fd5b611791886113ef565b96506020880135955060408801356001600160401b038111156117b2578182fd5b6117be8a828b016114d6565b989b979a50986060810135976080820135975060a09091013595509350505050565b60008060008060008060008060a0898b0312156117fb578182fd5b88356001600160401b0380821115611811578384fd5b61181d8c838d0161140b565b909a50985060208b0135915080821115611835578384fd5b6118418c838d0161140b565b909850965060408b0135915080821115611859578384fd5b506118668b828c0161140b565b999c989b509699959896976060870135966080013595509350505050565b600080600080600080600080600060c08a8c0312156118a1578283fd5b89356001600160401b03808211156118b7578485fd5b6118c38d838e0161140b565b909b50995060208c01359150808211156118db578485fd5b6118e78d838e0161140b565b909950975060408c01359150808211156118ff578485fd5b5061190c8c828d0161140b565b9a9d999c50979a969997986060880135976080810135975060a0013595509350505050565b600060208284031215611942578081fd5b5035919050565b6000806040838503121561195b578182fd5b8235915061196b602084016113ef565b90509250929050565b600060208284031215611985578081fd5b81356001600160e01b03198116811461078a578182fd5b81835260006020808501808196508560051b8101915084845b87811015611a1b5782840389528135601e198836030181126119d5578687fd5b870180356001600160401b038111156119ec578788fd5b8036038913156119fa578788fd5b611a078682898501611a28565b9a87019a95505050908401906001016119b5565b5091979650505050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b8183823760009101908152919050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611a99816017850160208801611d55565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611aca816028840160208801611d55565b01602801949350505050565b60018060a01b0385168152836020820152606060408201526000611afe606083018486611a28565b9695505050505050565b60018060a01b038716815285602082015260a060408201526000611b3060a083018688611a28565b60608301949094525060800152949350505050565b60a0808252810188905260008960c08301825b8b811015611b86576001600160a01b03611b71846113ef565b16825260209283019290910190600101611b58565b5083810360208501528881526001600160fb1b03891115611ba5578283fd5b8860051b9150818a60208301370160208181018381528483039091016040850152611bd181888a61199c565b6060850196909652505050608001529695505050505050565b6020815260008251806020840152611c09816040850160208701611d55565b601f01601f19169190910160400192915050565b60208082526023908201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d616040820152620e8c6d60eb1b606082015260800190565b6020808252602a908201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e206973604082015269206e6f7420726561647960b01b606082015260800190565b6000808335601e19843603018112611cc0578283fd5b8301803591506001600160401b03821115611cd9578283fd5b60200191503681900382131561144d57600080fd5b604051601f8201601f191681016001600160401b0381118282101715611d1657611d16611dcd565b604052919050565b60008219821115611d3157611d31611db7565b500190565b6000816000190483118215151615611d5057611d50611db7565b500290565b60005b83811015611d70578181015183820152602001611d58565b83811115611d7f576000848401525b50505050565b600081611d9457611d94611db7565b506000190190565b6000600019821415611db057611db0611db7565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea264697066735822122069cc15435f38a249c604ddfee40faa6344b25db12d43c64d1f14e6e7527f5ad564736f6c634300080400335f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5b09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63fd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783";

type TimeLockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimeLockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TimeLock__factory extends ContractFactory {
  constructor(...args: TimeLockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    minDelay: BigNumberish,
    proposers: string[],
    executors: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TimeLock> {
    return super.deploy(
      minDelay,
      proposers,
      executors,
      overrides || {}
    ) as Promise<TimeLock>;
  }
  getDeployTransaction(
    minDelay: BigNumberish,
    proposers: string[],
    executors: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      minDelay,
      proposers,
      executors,
      overrides || {}
    );
  }
  attach(address: string): TimeLock {
    return super.attach(address) as TimeLock;
  }
  connect(signer: Signer): TimeLock__factory {
    return super.connect(signer) as TimeLock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimeLockInterface {
    return new utils.Interface(_abi) as TimeLockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimeLock {
    return new Contract(address, _abi, signerOrProvider) as TimeLock;
  }
}