import { useEffect, useState } from 'react';
import { useConnect } from 'wagmi';

function Profile() {
  const { connect, connectors, error, isLoading, pendingConnector, connectedConnector } = useConnect();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (connectors.length > 0 && connectors[0].ready) {
      setIsReady(true);
    }
  }, [connectors]);

  const handleConnect = (connector) => {
    if (!connectedConnector) {
      connect({ connector });
    }
  };

  const isWalletConnected = connectedConnector && connectedConnector.id === connectors[0]?.id;

  return (
    <div>
      {connectors.map((connector) => (
        <button
          className="relative inline-block text-lg group"
          disabled={!isReady || isWalletConnected}
          key={connector.id}
          onClick={() => handleConnect(connector)}
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 group-hover:-rotate-180 ease"></span>
            <span className="relative">
              {isWalletConnected ?  'Connected' :'Connect Wallet'}
              {isLoading && connector.id === pendingConnector?.id && ' (Connecting)'}
            </span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </button>
      ))}
    </div>
  );
}

export default Profile;
