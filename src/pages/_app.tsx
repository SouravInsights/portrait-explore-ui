import React from 'react';
import '@/styles/main.css'
import { Inter } from 'next/font/google';
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client';
import client from '@/gql/client';
import {
  WagmiConfig,
  createConfig,
  configureChains,
} from 'wagmi';
 
import { mainnet, polygon } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
 
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

import { TabProvider } from '../components/Tab/TabContext';
import { ModalProvider } from '../components/Modal/ModalContext';

const inter = Inter({ subsets: ['latin'] });
const { chains, publicClient } = configureChains(
  [mainnet, polygon],
  [alchemyProvider({ apiKey: 'gk29ldaCGz6MPGB5COa_eUXnAxlpPTLx' }), publicProvider()],
);
 
const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  publicClient,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <ApolloProvider client={client}>
        <main className={inter.className}>
          <ModalProvider>
          <TabProvider>
            <Component {...pageProps} />
          </TabProvider>   
          </ModalProvider>
        </main>
      </ApolloProvider>
    </WagmiConfig>
  )
}

export default MyApp