'use client';
import '../globals.css';
import TheMint from './mintNFT';
import { Web3Storage } from 'web3.storage';
import { File } from 'web3.storage';
import Papa from 'papaparse';
import { useEffect, useRef, useState } from 'react';

export var ipfsURL;
export var theData = [];
var theImageUrl;

export default function Upload() {
  const [uploading, setUploading] = useState(false);

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
    const imageurl = document.getElementById('imgurl').value;
    const imageData = [new File([imageurl], 'image.png')];
    const client = new Web3Storage({ token: getAccessToken() });
    const rootCid = await client.put(imageData);
    ipfsURL = 'https://dweb.link/ipfs/' + rootCid;
    console.log(ipfsURL);
    theImageUrl = ipfsURL;
  }

  async function webstorage(data) {
    const client = new Web3Storage({ token: getAccessToken() });
    const rootCid = await client.put(data);
    ipfsURL = 'https://dweb.link/ipfs/' + rootCid;
    console.log(ipfsURL);
  }

  function jsonToArray(data) {
    for (let i in data) {
      var theOne = data[i][0];
      theData.push(theOne);
    }
    console.log(theData);
  }

  function startPapa() {
    const theFile = Papa.parse(document.getElementById('upfile').files[0], {
      download: true,
      header: false,
      skipEmptyLines: true,
      complete: function (results) {
        var data = results['data'];
        jsonToArray(data);
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
    const description = document.getElementById('desc').value;
    const attributes = document.getElementById('attribute').value;
    let inputData = {
      Image_Url: theImageUrl,
      Description: description,
      Attri: attributes,
    };
    const blob = new Blob([JSON.stringify(inputData)], {
      type: 'application/json',
    });
    const outputData = [new File([blob], 'hello.json')];
    webstorage(outputData);
  }
  return (
    <div className="m-8 border-4 border-white rounded-lg opacity-90 p-5 text-white">
      <div className="sm:flex sm:justify-center rounded-lg 	">
        <div>
          <div className="flex w-72 flex-col items:center  m-5 items-end gap-6">
            <div className="relative h-10 m-5  w-full min-w-[24rem]">
              <input
                id="attribute"
                className="peer h-full w-full rounded-[7px] border-2eborder-blue-gray-200 border-t-transparent bg-transparent  py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-4 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Attributes
              </label>
            </div>
            <div className="relative h-11 m-5 w-full min-w-[24rem]">
              <input
                id="desc"
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11p] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Description
              </label>
            </div>
            <div className="relative h-10 m-5  w-full min-w-[24rem]">
              <input
                type="file"
                accept=".csv"
                id="attribute"
                className="peer h-full w-full rounded-[7px] border-2eborder-blue-gray-200 border-t-transparent bg-transparent  py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-4 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                onChange={parsecsv}
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Upload CSV File
              </label>
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

            <div className="relative flex h-10 w-full m-5 min-w-[24rem] max-w-[24rem]">
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
                 {uploading ? 'SENDING' : 'SEND'}
              </button>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Upload Photo
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="m-5  sm:flex sm:justify-evenly text-gra-one ">
        <div className="min-w-1/4">
          <button
            onClick={parsecsv}
            className="border-none relative inline-block text-lg group"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-64 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500  group-hover:-rotate-180 ease"></span>
              <span className="relative">Upload Wallet Address</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500  rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </div>
        <div className="min-w-1/4">
          {' '}
          <TheMint />
        </div>
      </div>
    </div>
  );
}
