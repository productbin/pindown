import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useConnect } from 'wagmi';

function CertificateButton() {
  const [text, setText] = useState(false);
  const { connectors } = useConnect();

  useEffect(() => {
    // Update the text state based on connector status
    if (connectors.length > 0 && connectors[0].ready) {
      setText(true);
    }
  }, [connectors]);

  return (
    <div>
      {text && (
        <a
          href="/login"
          className="text-white hover:bg-gray-700 hover:underline hover:underline-offset-2 hover:text-white hover:rounded-lg px-3 py-2 text-sm font-medium"
        >
          Certificates
        </a>
      )}
    </div>
  );
}

function ShowButton() {
  return (
    <div>
      <CertificateButton />
    </div>
  );
}

export default ShowButton;
