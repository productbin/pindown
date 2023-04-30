'use client'
import {useEffect,useState} from "react";

function Navbar() {
  const [walletAddress,setWalletAddress] = useState("");


  useEffect(() => {
    getCurrentWalletConnected();
  });
  const Connectwallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
        
      }catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };
  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",   
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
          const loginButton = document.getElementById("loginbtn");
          loginButton.href = "/login"
          loginButton.textContent = "Manage Certificates";

        
        } else {
          console.log("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };
  return (
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
                <a
                  id="loginbtn"
                  href="#"
                  className=" Hidden text-gray-300 hover:bg-gray-700  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >

                </a>
              </div>
            </div>
            <div>
              <button
                id ="connectbtn"
                onClick={Connectwallet}
                className="bg-white p-2 rounded-lg  hover:bg-gray-700 hover:text-white  "
              >
              {walletAddress.length > 0 ? 'Connected' : "Connect Wallet"}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
