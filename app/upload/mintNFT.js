import React from 'react';
import { WagmiConfig, createClient, configureChains } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { useContractWrite } from 'wagmi';
import abiData from './abi.json';
import { theData, ipfsURL } from './page.js';

//const ipfsURL =
//'https://dweb.link/ipfs/bafybeidzonzxd5fnh7lb3er4dymewf2gs7glre4xdqyxwcdr7jeiurskna';
//const theData = ['0x64FF4F8B98242A7343D26E39930F360Aa947D70a'];

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

function Mint() {
  const config = {
    address: '0x41E405438dF59D438D62385e762B7e4B54AE2517',
    abi: abiData,
    functionName: 'bulkMint',
    args: [ipfsURL, theData],
  };

  const { write } = useContractWrite(config);
  return (
    <div>
      <button onclick={write} class="relative inline-block text-lg group">
        <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span class="absolute left-0 w-64 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span class="relative">Transfer NFT's</span>
        </span>
        <span
          class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </button>{' '}
    </div>
  );
}

function TheMint() {
  return (
    <WagmiConfig client={client}>
      <Mint />
    </WagmiConfig>
  );
}

export default TheMint;
