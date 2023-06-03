import React, { useState } from "react";
import { WagmiConfig, createClient, configureChains } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { useContractWrite } from "wagmi";
import abiData from "../upload/abi.json";
import { ipfsURL, theData } from "../upload/page";
import Web3AuthConnectorInstance from "../components/web3config";

const { chains, provider, webSocketProvider } = configureChains(
  [polygonMumbai],
  [
    alchemyProvider({ apiKey: "TVxT2Kjzsy4pFTaoWknc3O8SwxAuUqm6" }),
    publicProvider(),
  ]
);

const client = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  provider,
  webSocketProvider,
});

const Mint = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = async () => {
    if (props.onButtonClick) {
      await props.onButtonClick();
    }

    setIsClicked(true);
  };

  return (
    <WagmiConfig client={client}>
      <div>
        <button
          className="relative inline-block text-lg group w-full sm:w-48 sm:text-sm"
          onClick={handleButtonClick}
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg  bg-gray-50"></span>
            <span className="absolute left-0 w-64 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 group-hover:-rotate-180 ease"></span>
            <span className="relative text-lg">{"Mint NFT"}</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-full -mb-1 -mr-1 transition-all duration-200 ease-linear hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </button>
        {isClicked && (
          <ContractWriter
            address="0x41E405438dF59D438D62385e762B7e4B54AE2517"
            abi={abiData}
            functionName="bulkMint"
            args={[ipfsURL, theData]}
            onSuccess={() => alert("Transaction Successful")}
          />
        )}
      </div>
    </WagmiConfig>
  );
};

const ContractWriter = ({ address, abi, functionName, args, onSuccess }) => {
  const { write } = useContractWrite({
    address,
    abi,
    functionName,
    args,
    onSuccess,
  });

  // Call the write function when this component is rendered
  React.useEffect(() => {
    write();
  }, [write]);

  return null; // Return null as this component doesn't render anything
};

export default Mint;
