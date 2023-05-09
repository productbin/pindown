import { useConnect } from 'wagmi';

function Profile() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
 return (
    <div>
      {connectors.map((connector) => (
        <button
          className="bg-white p-2 rounded-lg  hover:bg-gray-700 hover:text-white"
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {!connector.ready && ' Connect Wallet'}
          {connector.ready && "Connected"}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            ' (Connecting)'}
        </button>
      ))}

      {error && <div>{error.message}</div>}
    </div>
  );
}
export default Profile;
