import React from "react";

const PropertyAd = () => {
  return (
    <div className="relative p-5 bg-blue-200 rounded-xl">
      <div className="flex flex-col lg:flex-row items-center space-x-2">
        <p className="w-full text-xl lg:text-2xl font-bold text-center lg:text-justify">
          Post property Ad to sell or rent online for
        </p>
        <p className="text-4xl lg:text-6xl italic font-bold text-center">
          FREE
        </p>
      </div>

      <ul className="list-disc pl-8 text-lg lg:text-base mt-4">
        <li>Advertise For FREE</li>
        <li>Sell 10 X faster</li>
        <li>Connect with genuine buyers</li>
        <li>Get unlimited enquiries</li>
      </ul>

      <div className="absolute bottom-3 right-5 lg:right-8 w-fit flex items-center justify-center mt-4 max-sm:hidden">
        <button className="bg-blue-700 mt-2 px-4 py-2 text-lg lg:text-md rounded-full text-white w-full">
          Post Property{" "}
          <span className="bg-white px-1 text-blue-700">FREE</span>
        </button>
      </div>

      <div className="my-2 w-fit flex items-center justify-center mt-4 sm:hidden">
        <button className="bg-blue-700 mt-2 px-4 py-2 text-lg lg:text-md rounded-full text-white w-full">
          Post Property{" "}
          <span className="bg-white px-1 text-blue-700">FREE</span>
        </button>
      </div>
    </div>
  );
};

export default PropertyAd;
