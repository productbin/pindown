'use client';
import '../globals.css';
import { Web3Storage } from 'web3.storage';
import { File } from 'web3.storage';
import Papa from 'papaparse';

export default function Upload() {
  function getAccessToken() {
    return process.env.NEXT_PUBLIC_API_KEY;
  }
  async function webstorage(data) {
    const client = new Web3Storage({ token: getAccessToken() });
    const rootCid = await client.put(data);
    console.log(rootCid);
  }

  function startPapa() {
    const theFile = Papa.parse(document.getElementById('upfile').files[0], {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        console.log(results['data']);
      },
    });
  }

  function parsecsv() {
    const fileInput = document.getElementById('upfile');
    fileInput.click();

    fileInput.addEventListener('change', () => {
      const uploadedFile = fileInput.files[0];
      startPapa();
    });
  }

  function getdata() {
    const imageurl = document.getElementById('imgurl').value;
    const description = document.getElementById('desc').value;
    const attributes = document.getElementById('attribute').value;
    const nofnft = document.getElementById('nft').value;
    let inputData = {
      Image_Url: imageurl,
      Description: description,
      Attri: attributes,
      nftno: nofnft,
    };
    const blob = new Blob([JSON.stringify(inputData)], {
      type: 'application/json',
    });
    const outputData = [new File([blob], 'hello.json')];
    webstorage(outputData);
  }
  return (
    <div className="m-8 border-4 border-white rounded-lg opacity-90 p-5 text-white">
      <div className="sm:flex sm:justify-evenly rounded-lg 	">
        <div>
          <div className="m-5">
            <h1 className="font-semibold text-white p-2  m-1">Upload Image</h1>
            <input
              id="imgurl"
              className="rounded-lg p-2 border-4 bg-transparent border-white"
              type="file"
              autoFocus
            />
          </div>
          <div className="m-5">
            <h1 className="font-semibold text-white p-2 m-1">Attributes</h1>
            <input
              id="attribute"
              className="bg-transparent border-4 border-white rounded-lg p-2 "
              type="text"
            />
          </div>
          <div className="m-5">
            <h1 className="font-semibold text-white p-2 m-1">
              Number Of NFT's
            </h1>
            <input
              id="nft"
              className="rounded-lg p-2 bg-transparent border-white border-4"
              type="text"
            />
          </div>
        </div>
        <div>
          <input
            type="file"
            id="upfile"
            accept=".csv"
            className="space-x-8 bg-transperent p-3 border-4 border-white text-white sm:ml-8  font-semibold  mt-10 rounded-lg"
            hidden
          />
        </div>

        <div>
          <div className="m-5 rounded-lg  truncate break-words overflow-x-hidden  ">
            <h1 className="font-semibold text-white p-2 m-1">Desciption</h1>
            <input
              id="desc"
              className="rounded-lg bg-transparent  object-fill  border-4 border-white h-64"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="m-5  sm:flex justify-evenly text-gra-one ">
        <div>
          {' '}
          <button
            id="upbtn"
            onClick={parsecsv}
            className="bg-white p-3 sm:ml-10 font-semibold  mt-10 rounded-lg"
          >
            Upload Wallet Address
          </button>
        </div>
        <div>
          {' '}
          <button
            onClick={getdata}
            className="bg-white p-3 sm:ml-10 font-semibold  mt-10 rounded-lg"
          >
            Upload Data To IPFS
          </button>
        </div>
        <div>
          {' '}
          <button className="bg-white p-3 sm:ml-10 font-semibold  mt-10 rounded-lg">
            Send NFT's
          </button>
        </div>
      </div>
    </div>
  );
}
