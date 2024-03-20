import { FastifyInstance } from "fastify";
import { uploadToIPFS } from "../../util/ipfs-functions";
import { createToken } from "../../lib/web3";

interface ResponseCreateToken {
  success: boolean;
  transactionHash: string | Uint8Array;
}

export async function contract(app: FastifyInstance) {
  app.post('/contract/create', async (request, reply) => {

    const { fromAddress, privateKey } = request.body as any;
    const data = await request.file();
    const fileBuffer = await data.toBuffer();

    // realizar o upload do arquivo no ipfs;
    const tokenURI = await uploadToIPFS(fileBuffer)

    // realizar a criacao do token no nosso contrato;
    try {
      const result = await createToken(tokenURI, fromAddress, privateKey);

      const response: ResponseCreateToken  = {
        success: true,
        transactionHash: result.transactionHash,
      }

      reply.send(response);

    } catch (error: any) {

      reply.status(500).send({ success: false, message: error.message });
    }
  });
  
}