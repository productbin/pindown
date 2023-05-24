"use client";
import "../globals.css";
import ArrayShow from "../components/displayWallet";
import { Web3Storage } from "web3.storage";
import { File } from "web3.storage";
import Papa from "papaparse";
import { useEffect, useRef, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Input } from "@material-tailwind/react";
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
  const [displayMonoWallets, setDisplayMonoWallets] = useState(false);
  const [thelist, setThelist] = useState([]);
  function getAccessToken() {
    return process.env.NEXT_PUBLIC_API_KEY;
  }
  const monoInput = () => {
    const data = document.getElementById("monoWalletAddress").value;
    setDisplayMonoWallets(true);
    setThelist((prevData) => [...prevData, data]); // Update theData array with new value
    theData.push(data);
    alert(data + " Wallet Address Added");
    document.getElementById("monoWalletAddress").value = ""; // Set the value to an empty string
  };
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
  function handleImageSelect() {
    const fileInput = document.getElementById("imgurl");
    const file = event.target.files[0];

    if (!file) {
      console.error("No file selected");
      return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
      const imagePreview = document.getElementById("imagePreview");
      const img = document.createElement("img");
      img.src = e.target.result;
      img.alt = "Selected Image";
      imagePreview.innerHTML = "";
      imagePreview.appendChild(img);
    };

    reader.readAsDataURL(file);
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
      setThelist((prevData) => [...prevData, data]);
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
      <div className="rounded-lg p-5 w-full text-white">
        <div className="sm:flex sm:justify-center  "></div>
        <div className="rounded-lg bg-white bg-opacity-5 justify-evenly">
          <div className="flex justify-around">
            <div className="flex-col justify-center">
              <div className="flex justify-center">
                <h1 className="text-2xl m-2 hover:underline-offset-1 font-medium">
                  {" "}
                  CERTIFICATE DETAILS
                </h1>
              </div>
              <div className="flex flex-col items-center  space-y-12  m-5 items-end gap-6">
                <div className="mb-4">
                  <label className="block text-white text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    className="shadow bg-transparent border rounded-lg  w-96 py-2 px-3 text-white focus:text-pink-500 leading-tight focus:outline-none focus:border-pink-500 focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-white text-sm font-bold mb-2">
                    Attributes
                  </label>
                  <input
                    className="shadow bg-transparent border rounded-lg  w-96 py-2 px-3 text-white focus:text-pink-500 leading-tight focus:outline-none focus:border-pink-500 focus:shadow-outline"
                    id="attribute"
                    type="text"
                    placeholder="Attributes"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-white text-sm font-bold mb-2">
                    Description
                  </label>
                  <input
                    placeholder="Enter description....."
                    type="text"
                    id="desc"
                    className="shadow bg-transparent border rounded-lg  w-96 py-2 px-3 text-white focus:text-pink-500 leading-tight focus:outline-none focus:border-pink-500 focus:shadow-outline"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-white text-sm font-bold mb-2">
                    Upload Photo
                  </label>
                  <input
                    id="imgurl"
                    type="file"
                    className="shadow bg-transparent border rounded-lg  w-96 py-2 px-3 text-white focus:text-pink-500 leading-tight focus:outline-none focus:border-pink-500 focus:shadow-outline"
                    required
                    onChange={handleImageSelect}
                  />
                </div>

                <div className="items-center  w-64 m-0 flex-col">
                  <div id="imagePreview"></div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-center">
              <div className="flex justify-center">
                <h1 className="text-2xl m-2 hover:underline-offset-1 font-medium ">
                  TARGET WALLETS
                </h1>
              </div>

              <div className="relative m-5 flex h-10 m-5 w-full m-5 min-w-[24rem] max-w-[24rem]">
                <label className="relative inline-block px-4 py-2 h-full w-full text-sm font-medium leading-5 text-white border rounded-lg cursor-pointer bg-transparent hover:border-pink-500 hover:text-pink-500">
                  <div className="flex justify-between">
                    <span className="">Choose CSV File</span>
                    <input
                      id="csvfile"
                      type="file"
                      accept=".csv"
                      onChange={parsecsv}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      required
                    />
                  </div>
                </label>
              </div>
              <div className="items-center flex justify-center m-5 font-bold text-3xl">
                {"OR"}
              </div>
              <div className="flex justify-center   h-10 w-full  min-w-[24rem] max-w-[24rem]">
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Insert Wallet Address{" "}
                  </label>
                  <div className="flex w-96">
                    <input
                      id="monoWalletAddress"
                      className="shadow bg-transparent border rounded-l-lg  w-full py-2 px-3 text-white focus:text-pink-500 leading-tight focus:outline-none focus:border-pink-500 focus:shadow-outline"
                      placeholder=" "
                    />
                    <button
                      onClick={monoInput}
                      className="rounded-r-lg bg-pink-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                      data-ripple-light="false"
                    >
                      ADD
                    </button>
                  </div>
                </div>
              </div>
              <div className="items-center   flex-col">
                <div className="m-16">
                  {(displayWallets || displayMonoWallets) && (
                    <ArrayShow array={thelist} onChange={parsecsv} />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-center">
            <div>
              <div className="flex justify-center m-5">
                <button
                  className="relative inline-block text-lg group w-full sm:w-auto sm:text-sm"
                  onClick={Everything}
                >
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-64 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 group-hover:-rotate-180 ease"></span>
                    <span className="relative text-lg">1.SEND</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-full -mb-1 -mr-1 transition-all duration-200 ease-linear hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </button>
              </div>
            </div>
            <div>
              <Mint />
            </div>{" "}
          </div>
        </div>
      </div>
    </WagmiConfig>
  );
}
