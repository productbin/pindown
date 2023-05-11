'use client';
import Profile from './Cwalllet';
import CertificateButton from './certificate';
import { useEffect, useState } from 'react';
import { WagmiConfig, createClient, configureChains, mainnet } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

const { chains, provider, webSocketProvider } = configureChains(
  [polygonMumbai],
  [
    alchemyProvider({ apiKey: 'TVxT2Kjzsy4pFTaoWknc3O8SwxAuUqm6' }),
    publicProvider(),
  ]
);
const client = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  provider,
  webSocketProvider,
});

function Navbar() {
  return (
    <WagmiConfig client={client}>
      <div className="p-4">
        <nav className="bg-white bg-opacity-5 rounded-lg ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-around   h-16">
              <div className="flex items-center">
                <a href="/" className="text-white font-bold text-4xl hover:from-purple-600 hover:to-pink-600 ease bg-text-to-br from-purple-500 to-pink-500  ">
                  PINDOWN
                </a>
              </div>
              <div className="hidden md:block min-w-[70%]">
                <div className="flex items-center justify-center ">
                  <a
                    href="#"
                    className="text-white hover:bg-gray-700 hover:text-white hover:rounded-lg  px-3 py-2  text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-white hover:bg-gray-700 hover:text-white hover:rounded-lg px-3 py-2  text-sm font-medium"
                  >
                    About
                  </a>
                  <CertificateButton />
                </div>
              </div>
              <div>
                <Profile />{' '}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </WagmiConfig>
  );
}
export default Navbar;
