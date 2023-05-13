import React from 'react';

const ArrayDisplay = ({ array }) => {
  return (
    <div>
      <ul>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayDisplay;
