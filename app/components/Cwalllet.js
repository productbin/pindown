import { useEffect, useState } from "react";
import { useConnect, useAccount } from "wagmi";

function Profile() {
  const { connector: activeConnector, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, isSuccess, pendingConnector } =
    useConnect();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (connectors.length > 0 && connectors[0].ready) {
      setIsReady(true);
    }
  }, [connectors]);

  return (
    <div>
      {connectors.map((connector) => (
        <button
          className="relative inline-block text-lg group w-full sm:w-auto sm:text-sm"
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-full h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 group-hover:-rotate-180 ease"></span>
            <span className="relative text-lg">
              {isConnected && connector.ready ? "Connected" : "Connect Wallet"}
              {isLoading &&
                connector.id === pendingConnector?.id &&
                " (Connecting)"}
            </span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-full -mb-1 -mr-1 transition-all duration-200 ease-linear hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </button>
      ))}
    </div>
  );
}

export default Profile;
