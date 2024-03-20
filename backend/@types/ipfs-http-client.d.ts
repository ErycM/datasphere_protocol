declare module 'ipfs-http-client' {
  export interface IPFSClient {
    add(data: any, options?: any): Promise<any>;
    cat(cid: string, options?: any): AsyncIterable<Uint8Array>;
  
  }

  export function create(options?: any): IPFSClient;
}