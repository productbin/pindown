import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";

const ArrayShow = ({ array }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(array);
  }, [array]);

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <div className="text-white text-center m-5 font-bold text-3xl hover:bg-gradient-to-r from-purple-600 to-pink-600 hover:text-transparent hover:bg-clip-text">
        WALLET ADDRESSES
      </div>

      <div className="max-h-60 overflow-y-auto bg-white bg-opacity-5 rounded-lg p-5 text-center">
        <ul className="list-none min-w-min">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex flex-wrap justify-center rounded-lg  px-4 mb-2"
            >
              {index + 1 + ". " + item}
              <button onClick={() => handleDelete(index)} className="">
                <FontAwesomeIcon icon={faTrash} style={{ color: "#ff0000" }} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArrayShow;
