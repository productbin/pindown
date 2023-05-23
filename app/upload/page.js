"use client";
import "../globals.css";
import ArrayDisplay from "../components/displayWallet";
import { Web3Storage } from "web3.storage";
import { File } from "web3.storage";
import Papa from "papaparse";
import { useEffect, useRef, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { WagmiConfig, createClient, configureChains } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { useContractWrite } from "wagmi";
import abiData from "./abi.json";

library.add(faInfoCircle);

var ipfsURL;
var theData = [];
var theImageUrl;
const { chains, provider, webSocketProvider } = configureChains(
  [polygonMumbai],
  [
    alchemyProvider({ apiKey: "TVxT2Kjzsy4pFTaoWknc3O8SwxAuUqm6" }),
    publicProvider(),
  ]
);

const client = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  provider,
  webSocketProvider,
});

function Mint() {
  const config = {
    address: "0x41E405438dF59D438D62385e762B7e4B54AE2517",
    abi: abiData,
    functionName: "bulkMint",
    args: [ipfsURL, theData],
  };

  const { write } = useContractWrite(config);
  return (
    <div className="flex justify-center">
      <button onClick={write} className="relative inline-block text-lg group">
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span className="absolute left-0 w-64 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500  group-hover:-rotate-180 ease"></span>
          <span className="relative">Transfer The NFT's</span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500  rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </button>{" "}
    </div>
  );
}

export default function Upload() {
  const [uploading, setUploading] = useState(false);
  const [displayWallets, setDisplayWallets] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");
  function getAccessToken() {
    return process.env.NEXT_PUBLIC_API_KEY;
  }

  async function Everything() {
    try {
      setUploading(true);
      await imageStorage(); // Assuming imageStorage is an asynchronous function
      await getdata(); // Assuming getdata is an asynchronous function
    } catch (error) {
      // Handle any errors that occurred during the asynchronous tasks
      console.error(error);
    } finally {
      setUploading(false);
    }
  }

  async function imageStorage() {
    const fileInput = document.getElementById("imgurl");
    const file = fileInput.files[0];

    if (!file) {
      console.error("No file selected");
      return;
    }

    const imageData = [file];
    const client = new Web3Storage({ token: getAccessToken() });
    const rootCid = await client.put(imageData);
    const ipfsURL = "ipfs://" + rootCid + "/" + file.name;
    console.log(ipfsURL);
    theImageUrl = ipfsURL;
  }
  async function webstorage(data) {
    const client = new Web3Storage({ token: getAccessToken() });
    const rootCid = await client.put(data);
    ipfsURL = "ipfs://" + rootCid + "/hello.json";
    console.log(ipfsURL);
  }

  function jsonToArray(data) {
    for (let i in data) {
      var theOne = data[i][0];
      theData.push(theOne);
    }
    console.log(theData);
    setDisplayWallets(true);
  }

  function startPapa() {
    const theFile = Papa.parse(document.getElementById("csvfile").files[0], {
      download: true,
      header: false,
      skipEmptyLines: true,
      complete: function (results) {
        var data = results["data"];
        jsonToArray(data);
      },
    });
  }

  function parsecsv() {
    const fileInput = document.getElementById("csvfile");

    startPapa();
  }

  function getdata() {
    const Name = document.getElementById("name").value;
    const Description = document.getElementById("desc").value;
    const Attributes = document.getElementById("attribute").value;
    let inputData = {
      description: Description,
      image: theImageUrl,
      name: Name,
      attributes: Attributes,
    };
    const blob = new Blob([JSON.stringify(inputData)], {
      type: "application/json",
    });
    const outputData = [new File([blob], "hello.json")];
    webstorage(outputData);
  }
  return (
    <WagmiConfig client={client}>
      <div className="rounded-lg p-5 text-white">
        <div className="flex justify-evenly">
          <div className="sm:flex sm:justify-center  rounded-lg bg-white bg-opacity-5 ">
            <div>
              <div className="flex-col items-center  space-y-12  m-5 items-end gap-6">
                <div className="relative flex m-5 h-10 w-full m-5 min-w-[24rem] max-w-[24rem]">
                  <input
                    id="name"
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-2 border-l-2 border-r-2 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-pink-500 focus:border-t-transparent focus:outline-none disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Name Your NFT{" "}
                  </label>
                </div>
                <div className="relative flex h-10 w-full m-5 min-w-[24rem] max-w-[24rem]">
                  <input
                    id="attribute"
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-2 border-l-2 border-r-2 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-pink-500 focus:border-t-transparent focus:outline-none disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Attributes{" "}
                  </label>
                </div>{" "}
                <div className="relative flex m-5 h-10 w-full m-5 min-w-[24rem] max-w-[24rem]">
                  <input
                    id="desc"
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-2 border-l-2 border-r-2 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-pink-500 focus:border-t-transparent focus:outline-none disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Description{" "}
                  </label>
                </div>
                <div className="relative flex h-10 m-5 w-full m-5 min-w-[24rem] max-w-[24rem]">
                  <label
                    htmlFor="csvfile"
                    className="relative inline-block px-4 py-2 h-full w-full text-sm font-medium leading-5 text-white border rounded-[7px] cursor-pointer bg-transparent hover:border-pink-500 hover:text-pink-500"
                  >
                    <div className="flex justify-between">
                      <span className="">Choose CSV File</span>
                      <input
                        id="csvfile"
                        type="file"
                        accept=".csv"
                        onChange={parsecsv}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        placeholder=""
                        required
                      />
                      <button
                        onMouseEnter={() => setIsButtonHovered(true)}
                        onMouseLeave={() => setIsButtonHovered(false)}
                        className="relative"
                      >
                        <div>
                          <FontAwesomeIcon
                            icon={faInfoCircle}
                            style={{ color: "white" }}
                          />
                        </div>
                        {isButtonHovered && (
                          <img
                            className="absolute top-[-25rem] left-1/2 min-w-[500px] h-[500px] rounded-full object-cover transition-transform transform hover:scale-125"
                            src="walletI.png"
                            alt="Image"
                          />
                        )}
                      </button>
                    </div>
                  </label>
                </div>{" "}
                <div className="relative  flex  h-10 m-5 w-full m-5 min-w-[24rem] max-w-[24rem]">
                  <input
                    id="imgurl"
                    type="file"
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    required
                  />
                  <button
                    onClick={Everything}
                    className="!absolute right-1 top-1 z-10 select-none rounded bg-pink-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                    data-ripple-light="false"
                  >
                    {uploading ? "SENDING" : "SEND"}
                  </button>
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Upload Photo
                  </label>
                </div>
                <Mint />
              </div>
            </div>
          </div>
          <div>
            <div className="items-center flex-col">
              <div className="">
                {displayWallets && (
                  <ArrayDisplay onChange={parsecsv} array={theData} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </WagmiConfig>
  );
}
