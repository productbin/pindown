import React, { useEffect, useState } from "react";

const ArrayShow = ({ array }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(array);
  }, [array]);

  return (
    <div>
      <div className="text-white text-center m-5 font-bold text-4xl hover:bg-gradient-to-r from-purple-600 to-pink-600 hover:text-transparent hover:bg-clip-text">
        WALLET ADDRESSES
      </div>

      <div className="max-h-60 overflow-y-auto bg-white bg-opacity-5 rounded-lg p-5 text-center">
        <ul className="list-none min-w-min">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex flex-wrap justify-center rounded-lg py-2 px-4 mb-2"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArrayShow;
