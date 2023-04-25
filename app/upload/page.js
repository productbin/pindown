import "../globals.css";

export default function Upload() {
  return (
    <div className="m-8 border-4 border-white rounded-lg">
      <div className="flex flex-col items-center">
        <div className="m-5">
          <h1>Image Url</h1>
          <input type="text" />
        </div>
        <div className="m-5">
          <h1>Dessciption</h1>
          <input type="text" />
        </div>
        <div className="m-5">
          <h1>Attributes</h1>
          <input type="text" />
        </div>
        <div className="m-5">
          <h1>Number Of NFT's</h1>
          <input type="text" />
        </div>
        <div className="m-5">
          <button>Upload Excel File</button>
        </div>
      </div>
    </div>
  );
}
