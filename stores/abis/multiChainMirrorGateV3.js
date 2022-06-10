export const multiChainMirrorGateV3Abi = [
  {
    inputs: [
      {
        internalType: 'contract IAnyswapV6CallProxy',
        name: '_endpoint',
        type: 'address',
      },
      {
        internalType: 'contract IMirroredVotingEscrow',
        name: '_mirrorEscrow',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_chainId',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'anyExecute',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        internalType: 'bytes',
        name: 'result',
        type: 'bytes',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'anyFallback',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_toChainID',
        type: 'uint256',
      },
      {
        internalType: 'uint256[]',
        name: '_chainIds',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '_escrowIds',
        type: 'uint256[]',
      },
      {
        internalType: 'int128[]',
        name: '_lockAmounts',
        type: 'int128[]',
      },
      {
        internalType: 'uint256[]',
        name: '_lockEnds',
        type: 'uint256[]',
      },
    ],
    name: 'calculateFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'endpoint',
    outputs: [
      {
        internalType: 'contract IAnyswapV6CallProxy',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'isAllowedCaller',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'mirrorEscrow',
    outputs: [
      {
        internalType: 'contract IMirroredVotingEscrow',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_toChainId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_toMirrorGate',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: '_chainIds',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '_escrowIds',
        type: 'uint256[]',
      },
      {
        internalType: 'int128[]',
        name: '_lockAmounts',
        type: 'int128[]',
      },
      {
        internalType: 'uint256[]',
        name: '_lockEnds',
        type: 'uint256[]',
      },
    ],
    name: 'mirrorLocks',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'recoverExecutionBudget',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IAnyswapV6CallProxy',
        name: '_endpoint',
        type: 'address',
      },
    ],
    name: 'setEndpoint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IMirroredVotingEscrow',
        name: '_mirrorEscrow',
        type: 'address',
      },
    ],
    name: 'setMirrorEscrow',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_callers',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: '_chainIds',
        type: 'uint256[]',
      },
      {
        internalType: 'bool[]',
        name: '_areAllowed',
        type: 'bool[]',
      },
    ],
    name: 'setupAllowedCallers',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unPause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
