import React from "react";

const Advertisement = () => {
  return (
    <div className="p-6 bg-blue-200 rounded-xl w-full mb-5">
      <div className="flex flex-row items-center space-x-1">
        <p className="w-full text-sm font-bold text-justify">
          Post property Ad to sell or rent online for
        </p>
        <p className="text-4xl italic font-bold">FREE</p>
      </div>

      <ul className="list-disc pl-8 text-lg lg:text-base mt-4">
        <li>Advertise For FREE</li>
        <li>Sell 10 X faster</li>
        <li>Connect with genuine buyers</li>
        <li>Get unlimited enquiries</li>
      </ul>

      <div className="w-full flex items-center justify-center mt-4">
        <button className="bg-blue-700 mt-2 p-2 text-md rounded-full text-white w-full">
          Post Property{" "}
          <span className="bg-white px-1 text-blue-700">FREE</span>
        </button>
      </div>
    </div>
  );
};

export default Advertisement;
