"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Profile from "./Cwalllet";
import Certificate from "./certificate";
import { useEffect, useState } from "react";
import { WagmiConfig, createClient, configureChains, mainnet } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

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

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <WagmiConfig client={client}>
      <div className="p-4">
        <nav className="bg-white bg-opacity-5 rounded-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <a
                  href="/"
                  className="text-white font-bold text-4xl hover:bg-gradient-to-r from-purple-600 to-pink-600 hover:text-transparent hover:bg-clip-text"
                >
                  PINDOWN
                </a>
              </div>
              <div className="md:hidden">
                <button
                  className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
                  onClick={toggleMenu}
                >
                  <FontAwesomeIcon icon={faBars} size="lg" />
                </button>
              </div>
              <div className="hidden md:block min-w-[70%]">
                <div className="flex items-center justify-center">
                  <a
                    href="/"
                    className="text-white hover:bg-gray-700 hover:underline hover:underline-offset-2 hover:text-white hover:rounded-lg px-3 py-2 text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-white hover:bg-gray-700 hover:text-white hover:underline hover:underline-offset-2 hover:rounded-lg px-3 py-2 text-sm font-medium"
                  >
                    About
                  </a>
                  <Certificate />
                </div>
              </div>
              <div className="hidden md:block">
                <Profile />
              </div>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="text-white hover:bg-gray-700 hover:text-white hover:rounded-lg block px-3 py-2 text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-gray-700 hover:text-white hover:rounded-lg block px-3 py-2 text-base font-medium"
                >
                  About
                </a>
                <Profile />
              </div>
            </div>
          )}
        </nav>
      </div>
    </WagmiConfig>
  );
}

export default Navbar;
