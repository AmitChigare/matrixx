export const ChainMatrixABI = [
  {
    type: "function",
    name: "addMsg",
    inputs: [
      { name: "sender", type: "address", internalType: "address" },
      { name: "receiver", type: "address", internalType: "address" },
      { name: "content", type: "string", internalType: "string" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  { type: "function", name: "claimOwner", inputs: [], outputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "getChatMessages",
    inputs: [
      { name: "sender", type: "address", internalType: "address" },
      { name: "receiver", type: "address", internalType: "address" },
    ],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct ChainMatrix.Message[]",
        components: [
          { name: "sender", type: "address", internalType: "address" },
          { name: "content", type: "string", internalType: "string" },
          { name: "timestamp", type: "uint256", internalType: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPlayersOnChain",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "nominateOwner",
    inputs: [{ name: "nominee_", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "nominee",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "playerChainData",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [
      { name: "name", type: "string", internalType: "string" },
      { name: "level", type: "uint8", internalType: "uint8" },
      { name: "userAddress", type: "address", internalType: "address" },
      { name: "chainId", type: "uint256", internalType: "uint256" },
      { name: "isActive", type: "bool", internalType: "bool" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "playersOnChain",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "registerObject",
    inputs: [
      { name: "_name", type: "string", internalType: "string" },
      { name: "_userAddress", type: "address", internalType: "address" },
      { name: "_chainId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "registerPlayer",
    inputs: [
      { name: "_name", type: "string", internalType: "string" },
      { name: "_userAddress", type: "address", internalType: "address" },
      { name: "_chainId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setSocket",
    inputs: [{ name: "_socket", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "socket",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "MessageSent",
    inputs: [
      { name: "sender", type: "address", indexed: false, internalType: "address" },
      { name: "receiver", type: "address", indexed: false, internalType: "address" },
      { name: "content", type: "string", indexed: false, internalType: "string" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnerClaimed",
    inputs: [{ name: "claimer", type: "address", indexed: true, internalType: "address" }],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnerNominated",
    inputs: [{ name: "nominee", type: "address", indexed: true, internalType: "address" }],
    anonymous: false,
  },
  { type: "error", name: "OnlyNominee", inputs: [] },
  { type: "error", name: "OnlyOwner", inputs: [] },
] as const;
