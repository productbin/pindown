import Web3AuthConnectorInstance from "../components/web3config";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export default function Web3AuthProfile() {
  const { address, connector, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <div className="main">
        <div className="title">Connected to {connector?.name}</div>
        <div>{address}</div>
        <button className="card" onClick={disconnect}>
          Disconnect
        </button>
      </div>
    );
  } else {
    return (
      <div className="main">
        {connectors.map((connector) => (
          <button
            className="card"
            disabled={!connector?.ready}
            key={connector?.id} // Use optional chaining to access id property
            onClick={() => connect({ connector })}
          >
            {connector?.name} {!connector?.ready && " (unsupported)"}
            {isLoading &&
              connector?.id === pendingConnector?.id && // Use optional chaining to access id property
              " (connecting)"}
          </button>
        ))}
        {error && <div>{error.message}</div>}
      </div>
    );
  }
}
