import Web3, { Transaction } from "web3";
import { AbiItem } from "web3-utils";

const contractABI: AbiItem[] = [
  {
    name: "mint",
    type: "function",
    inputs: [{ name: "to", type: "address" }],
    outputs: [{ name: "", type: "bool" }],
  },
];
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const providerURL = "http://127.0.0.1:8545";

export const web3 = new Web3(providerURL);
export const DataSphereProtocol = new web3.eth.Contract(
  contractABI,
  contractAddress
);

export const createToken = async (
  tokenURI: string,
  fromAddress: string,
  privateKey: string
) => {
  const nonce = await web3.eth.getTransactionCount(fromAddress, "latest"); // Obtém o nonce

  const tx: Transaction = {
    // from: fromAddress,
    to: contractAddress,
    nonce: nonce,
    // gasPrice: await web3.eth.getGasPrice(),
    // maxPriorityFeePerGas: "200000000000",
    // maxFeePerGas: "20000000000",
    gas: await web3.eth.getGasPrice(), // Estime o gás necessário para a transação
    data: DataSphereProtocol.methods.mint(fromAddress, tokenURI).encodeABI(), // Codifica a chamada da função
  };

  const signPromise = web3.eth.accounts.signTransaction(tx, privateKey);

  return signPromise
    .then((signedTx) => {
      console.log(signedTx);
      const sentTx = web3.eth.sendSignedTransaction(signedTx.rawTransaction!);

      return sentTx.then((receipt) => receipt.transactionHash);
    })
    .catch((err) => {
      console.log("Falha ao enviar transação", err);
      throw err;
    });
};
