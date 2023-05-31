import { useEffect, useState } from "react";
import { Web3Auth } from "@web3auth/modal";

const Web3AuthButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [web3auth, setWeb3Auth] = useState(null);

  useEffect(() => {
    const initializeWeb3Auth = async () => {
      const auth = new Web3Auth({
        clientId: "process.env.YOUR_WEB3AUTH_CLIENT_ID", // Get your Client ID from Web3Auth Dashboard
        chainConfig: {
          chainNamespace: "eip155",
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
