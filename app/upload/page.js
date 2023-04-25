import "../globals.css";
export default function Upload() {
  return (
    <div className="m-8 border-4 border-white rounded-lg">
      <div className="flex flex-col items-center">
        <div className="m-5">
          <h1 className="font-semibold text-white p-2 m-1">Image Url</h1>
          <input className="rounded-lg" type="text" />
        </div>
        <div className="m-5">
          <h1 className="font-semibold text-white p-2 m-1">Desciption</h1>
          <input className="rounded-lg  h-36" type="text" />
        </div>
        <div className="m-5">
          <h1 className="font-semibold text-white p-2 m-1">Attributes</h1>
          <input className="rounded-lg " type="text" />
        </div>
        <div className="m-5">
          <h1 className="font-semibold text-white p-2 m-1">Number Of NFT's</h1>
          <input  className="rounded-lg" type="text" />
        </div>
        <div className="m-5">
          <button className="bg-white p-3 font-semibold rounded-lg">
            Upload Excel File
          </button>
        </div>
      </div>
    </div>
  );
}
