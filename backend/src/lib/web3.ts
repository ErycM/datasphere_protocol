import Web3 from 'web3';
import { AbiItem } from 'web3-utils';

const contractABI: AbiItem[] = process.env.ABI_DATASPHERE_PROTOCOL ?? "string";
const contractAddress = process.env.CONTRACT_ADDRESS_DATASPHERE_PROTOCOL;
const providerURL = process.env.BLOCKCHAIN_UR;

export const web3 = new Web3(providerURL);
export const DataSphereProtocol = new web3.eth.Contract(contractABI, contractAddress);

export const createToken = async (tokenURI: string, fromAddress: string, privateKey: string) => {
  const nonce = await web3.eth.getTransactionCount(fromAddress, 'latest'); // Obtém o nonce

  const tx = {
      from: fromAddress,
      to: contractAddress,
      nonce: nonce,
      gas: 2000000, // Estime o gás necessário para a transação
      data: DataSphereProtocol.methods.mintNFT(fromAddress, tokenURI).encodeABI(), // Codifica a chamada da função
  };

  const signPromise = web3.eth.accounts.signTransaction(tx, privateKey);

  return signPromise.then((signedTx) => {
      const sentTx = web3.eth.sendSignedTransaction(signedTx.rawTransaction!);

      return sentTx.then((receipt) => receipt.transactionHash);
  }).catch((err) => {
      console.log("Falha ao enviar transação", err);
      throw err;
  });
};