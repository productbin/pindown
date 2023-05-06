import { useConnect } from 'wagmi';

function certificateButton() {
  const { isSuccess } = useConnect();
  return (
    <a
      href="#"
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      {isSuccess && 'Certificates'}
    </a>
  );
}

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
          {connector.ready && 'Connected'}
          {!connector.ready && ' Connect Wallet'}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            ' (Connecting)'}
        </button>
      ))}

      {error && <div>{error.message}</div>}
    </div>
  );
}
export { certificateButton };
export default Profile;
