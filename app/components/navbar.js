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
      <div className="p-8">
        <nav className="border-white border-4 rounded-lg ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-around   h-16">
              <div class="flex items-center">
                <a href="/" className="text-white font-bold text-xl">
                  PINDOWN
                </a>
              </div>
              <div className="hidden md:block min-w-[70%]">
                <div className="flex items-center justify-center ">
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
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
export default   Navbar;
