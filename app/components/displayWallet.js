import React from "react";

const ArrayDisplay = ({ array }) => {
  return (
    <div>
      <div className="text-white text-center m-5 font-bold text-4xl hover:bg-gradient-to-r from-purple-600 to-pink-600 hover:text-transparent hover:bg-clip-text">
        WALLET ADDRESSES
      </div>

      <div className="max-h-60 overflow-y-auto bg-white bg-opacity-5 rounded-lg p-5 text-center">
        <ul className="list-none min-w-min">
          {array.map((item, index) => (
            <li
              key={index}
              className="flex flex-wrap justify-center rounded-lg py-2 px-4 mb-2"
            >
              {index + 1 + ". " + item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArrayDisplay;
