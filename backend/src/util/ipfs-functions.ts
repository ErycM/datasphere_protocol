import { ipfs } from "../lib/ipfs"; 

export async function uploadToIPFS(content: Buffer): Promise<string> {
  try {
    const { path } = await ipfs.add(content);
    return path;
  } catch (error) {
    console.error('Erro ao fazer upload para o IPFS:', error);
    throw new Error('Falha no upload para o IPFS');
  }
}

export async function downloadFromIPFS(cid: string): Promise<Buffer> {
  const chunks = [];
  for await (const chunk of ipfs.cat(cid)) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}