import { useEffect, useState } from "react";
import { Web3Auth } from "@web3auth/modal";

const Web3AuthButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [web3auth, setWeb3Auth] = useState(null);

  useEffect(() => {
    const initializeWeb3Auth = async () => {
      const auth = new Web3Auth({
        clientId:
          "BIRSE1qxpXIUihDfW6vSpuTf3rXHRFWPxcooqHsobTYh-Vix3IIO1oxFB2CZkv5kLZK60t9rpV9J0mb6_vHzvb0", // Replace with your actual Client ID from Web3Auth Dashboard
        chainConfig: {
          chainNamespace: "eip155",
          rpcTarget:
            "https://polygon-mumbai.g.alchemy.com/v2/TVxT2Kjzsy4pFTaoWknc3O8SwxAuUqm6",
          chainId: "0x13881", // Use 0x13881 for Mumbai Testnet
        },
      });
      await auth.initModal();
      setWeb3Auth(auth);
    };

    initializeWeb3Auth();
  }, []);

  const handleClick = async () => {
    if (web3auth) {
      setIsLoading(true);
      try {
        await web3auth.connect();
        // Additional logic or actions after connecting with Web3Auth
      } catch (error) {
        console.log("Error connecting with Web3Auth:", error);
      }
      setIsLoading(false);
    }
  };

  return (
    <button
      className="text-white hover:bg-gray-700 hover:text-white hover:underline hover:underline-offset-2 hover:rounded-lg px-3 py-2 text-sm font-medium"
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : "Web3Auth"}
    </button>
  );
};

export default Web3AuthButton;
