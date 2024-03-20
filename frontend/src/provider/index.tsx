import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider, http } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IProvider {
  children: ReactNode;
}

export function Provider({ children }: IProvider) {
  const config = getDefaultConfig({
    appName: "DataSphared",
    projectId: "bdfb885bfb98f215624ca2796b2c5289",
    chains: [mainnet, polygon, optimism, arbitrum, base, zora],
    transports: {
      [mainnet.id]: http(),
    },
  });

  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>{children}</RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </BrowserRouter>
  );
}
