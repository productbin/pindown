'use client';
import { useConnect } from 'wagmi';
import {useState} from  'react';
function CertificateButton() {
  const [text,setText] = useState(false);
  const { connectors } = useConnect();

  return (
    <div>
      {connectors.map((connector) => (

        <a
          href="/login"
          className="text-white hover:bg-gray-700 hover:underline hover:underline-offset-2  hover:text-white hover:rounded-lg  px-3 py-2  text-sm font-medium"
          key={connector.id}
        >
          {connector.ready && "Certificates"}

        </a>
      ))}
    </div>
  );
}

export default CertificateButton;
