import React from 'react';

const Announcment = ({ handleClick, title, body, createdAt, createdBy }) => {
  return (
    <div
      onClick={handleClick}
      className=" border my-3 cursor-pointer rounded-lg border-gray-300 "
    >
      <h1 className="font-semibold text-blue-500 text-lg p-2">{title}</h1>
      <div className="p-2 border-l-2 border-red-500 ">
        <p className="text-gray-500 text-xs ">
          {createdAt}
          <span className="text-gray-700"> {createdBy}</span>
        </p>
        <h2 className="font-semibold text-lg text-gray-900">Dears,</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};
export default Announcment;
