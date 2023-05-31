import "../globals.css";

export default function Verified() {
  return (
    <div>
      <div className="flex m-8 justify-center">
        <h1 className="text-white font-bold text-4xl hover:bg-gradient-to-r from-purple-600 to-pink-600 hover:text-transparent hover:bg-clip-text">
          Verified Users
        </h1>
      </div>

      <div className="text-white mt-4  rounded-lg flex justify-center">
        <div className="max-w-4xl p-2 rounded-[40px]  overflow-y-auto">
          <table className="border-collapse rounded-[10px] border border-gray-800">
            {" "}
            <thead>
              <tr className="bg-gray-800">
                <th className="py-2 px-4 border-b">Logo</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Wallet Address</th>
                <th className="py-2 px-4 border-b">Verified By</th>
              </tr>
            </thead>
            <tbody className="bg-gray-900">
              <tr className="border-b">
                <td className="py-2 px-4 flex justify-center">
                  <img
                    className="w-16 h-16 rounded-lg bg-transparent"
                    src="zindot.jpeg"
                    alt="LOGO"
                  />
                </td>
                <td className="py-2 px-4 text-center">Zindot Innovations</td>
                <td className="py-2 px-4">
                  0x9e4a8e1b413cb2182f9f1e7aa1e2d90f7efb23f3
                </td>
                <td className="py-2 px-4 text-center">Pindown</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 rounded-lg flex justify-center">
                  <img
                    className="w-16 h-16 rounded-lg bg-transparent"
                    src="trizwit.jpeg"
                    alt="LOGO"
                  />
                </td>
                <td className="py-2 px-4 text-center">Trizwit Labs</td>
                <td className="py-2 px-4">
                  0x8c35f7a7f3c29948e5b370caac7a1db59cda7f7a
                </td>
                <td className="py-2 px-4 text-center">Pindown</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 flex rounded-lg justify-center">
                  <img
                    className="w-16 h-16  rounded-lg bg-transparent"
                    src="prinux.png"
                    alt="LOGO"
                  />
                </td>
                <td className="py-2 px-4 text-center">Prinux</td>
                <td className="py-2 px-4">
                  0x3f1d2987c924a8298116a24f49e1b27fe2e63045
                </td>
                <td className="py-2 px-4 text-center">Pindown</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
