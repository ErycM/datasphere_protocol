import { create } from 'ipfs-http-client';

// export const ipfs = create({
//   url: 'https://ipfs.infura.io:5001' URL do nó IPFS (exemplo com Infura)
// });

export const ipfs = create({ host: 'localhost', port: '5001', protocol: 'http' });