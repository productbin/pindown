import React from 'react';
import { WagmiConfig, createClient, configureChains } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { useContractWrite } from 'wagmi';
import abiData from './abi.json';
import {theData,ipfsURL} from './page.js'

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
      <button
        onClick={write}
        className="bg-white p-3 sm:ml-10 font-semibold  mt-10 rounded-lg"
      >
        Send NFT
      </button>
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
