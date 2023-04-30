"use client";
import "../globals.css";
import { Web3Storage } from "web3.storage";
import { File } from "web3.storage";


export default function Upload() {
  async function webstorage(data) {
    const client = new Web3Storage({ token: process.env.API_KEY});
    console.log(client);
    const rootCid = await client.put(data);
    console.log(rootCid);
  }

  function getdata() {
    const imageurl = document.getElementById("imgurl").value;
    const description = document.getElementById("desc").value;
    const attributes = document.getElementById("attribute").value;
    const nofnft = document.getElementById("nft").value;
    let inputData = {
      Image_Url: imageurl,
      Description: description,
      Attri: attributes,
      nftno: nofnft,
    };
    const blob = new Blob([JSON.stringify(inputData)], {
      type: "application/json",
    });
    const outputData = [new File([blob], "hello.json")];
    webstorage(outputData);
  }
  return (
    <div className="m-8 border-4 border-white rounded-lg opacity-90 p-5 text-white">
      <div className="sm:flex sm:justify-evenly rounded-lg 	">
        <div>
          <div className="m-5">
            <h1 className="font-semibold text-white p-2  m-1">Image Url</h1>
            <input
              id="imgurl"
              className="rounded-lg p-2 border-4 bg-transparent border-white"
              type="text"
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
      <div className="m-5  sm:flex justify-center space-x-4 text-gra-one ">
        <div>
          <button
            //onClick={getdata}
            className="bg-white p-3 sm:ml-8  font-semibold  mt-10 rounded-lg"
          >
            Upload Excel File
          </button>
        </div>
        <div>
          {" "}
          <button
            onClick={getdata}
            className="bg-white p-3 sm:ml-10 font-semibold  mt-10 rounded-lg"
          >
            Send NFT's
          </button>
        </div>
      </div>
    </div>
  );
}
