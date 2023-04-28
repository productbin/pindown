"use client";
import "../globals.css";
import { Web3Storage } from "web3.storage";
import { getFilesFromPath } from "web3.storage";
const fs = require("fs");
const path = require("path");

export default function Upload() {
  /*async function webstorage() {
    const client = new Web3Storage(
      "eyJzdWIiOiJkaWQ6ZXRocjoweDY4NjQyYUFiQkJhNzZGNjBhQTVjQmU0NEMxOGVBMTQ5MjNFNzRmMDAiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODI2NjA2ODE2MDQsIm5hbWUiOiJwaW5kb3duIn0.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.p076aRVi_qZvN_dDzDDBrDoq4qbTBMibn2ZULCMTw8Y"
    );
    const files = await getFilesFromPath("./data.txt");
    const rootCid = await client.put(files);
    console.log(rootCid);
  }
  function writedata(d) {
    //const filepath = path.join(__dirname, 'data.txt');
    fs.writeFile("data.txt", "Hello World", (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  }

  function getdata() {
    const imageurl = document.getElementById("imgurl").value;
    const description = document.getElementById("desc").value;
    const attributes = document.getElementById("attribute").value;
    const nofnft = document.getElementById("nft").value;
    let data = imageurl + " " + description + " " + attributes + " " + nofnft;
    console.log(data);
    writedata(data);
    //webstorage();
  }*/
  return (
    <div className="m-8 border-4 border-white rounded-lg">
      <div className="sm:flex sm:justify-evenly">
        <div>
          <div className="m-5">
            <h1 className="font-semibold text-white p-2  m-1">Image Url</h1>
            <input
              id="imgurl"
              className="rounded-lg p-2"
              type="text"
              autofocus
            />
          </div>
          <div className="m-5">
            <h1 className="font-semibold text-white p-2 m-1">Attributes</h1>
            <input id="attribute" className="rounded-lg p-2 " type="text" />
          </div>
          <div className="m-5">
            <h1 className="font-semibold text-white p-2 m-1">
              Number Of NFT's
            </h1>
            <input id="nft" className="rounded-lg p-2" type="text" />
          </div>
        </div>
        <div>
          <div className="m-5">
            <h1 className="font-semibold min-w-[70%] text-white p-2 m-1">
              Desciption
            </h1>
            <input
              id="desc"
              className="rounded-lg min-w-[70%] h-64"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="m-5  sm:flex justify-center space-x-4 ">
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
            //onClick={getdata}
            className="bg-white p-3 sm:ml-10 font-semibold  mt-10 rounded-lg"
          >
            Send NFT's
          </button>
        </div>
      </div>
    </div>
  );
}
