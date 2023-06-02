import { Web3AuthConnector } from "@web3auth/web3auth-wagmi-connector";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { Chain } from "wagmi";
export default function Web3AuthConnectorInstance(chains) {
  if (typeof window !== "undefined") {
    const web3AuthInstance = new Web3Auth({
      clientId:
        "BIRSE1qxpXIUihDfW6vSpuTf3rXHRFWPxcooqHsobTYh-Vix3IIO1oxFB2CZkv5kLZK60t9rpV9J0mb6_vHzvb0", // Replace with your actual Client ID from Web3Auth Dashboard
      chainConfig: {
        chainNamespace: "eip155",
        rpcTarget:
          "https://polygon-mumbai.g.alchemy.com/v2/TVxT2Kjzsy4pFTaoWknc3O8SwxAuUqm6",
        chainId: "0x13881", // Use 0x13881 for Mumbai Testnet
      },
      web3AuthNetwork: "testnet", // Adding this line fixes the issue for me!!
    });
    return new Web3AuthConnector({
      chains: chains,
      options: {
        web3AuthInstance,
      },
    });
  }
}
