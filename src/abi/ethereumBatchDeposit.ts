export const ethereumBatchDeposit = [{
  "inputs": [
    {
      "internalType": "bytes[]",
      "name": "pubkeys",
      "type": "bytes[]"
    },
    {
      "internalType": "bytes[]",
      "name": "withdrawal_credentials",
      "type": "bytes[]"
    },
    {
      "internalType": "bytes[]",
      "name": "signatures",
      "type": "bytes[]"
    },
    {
      "internalType": "bytes32[]",
      "name": "deposit_data_roots",
      "type": "bytes32[]"
    }
  ],
  "name": "batchDeposit",
  "outputs": [],
  "stateMutability": "payable",
  "type": "function",
  "payable": true
}] as const;