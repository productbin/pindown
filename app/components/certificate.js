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
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          key={connector.id}
        >
          {connector.ready && "Certificates"}

        </a>
      ))}
    </div>
  );
}

export default CertificateButton;
