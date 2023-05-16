import { useAccount } from "wagmi";
function Certificate() {
  const { isConnected } = useAccount();

  return (
    <>
      {isConnected && (
        <a
          href="/login"
          className="text-white hover:bg-gray-700 hover:text-white hover:underline hover:underline-offset-2  hover:rounded-lg px-3 py-2  text-sm font-medium"
        >
          {" "}
          Certificates
        </a>
      )}
    </>
  );
}
export default Certificate;
