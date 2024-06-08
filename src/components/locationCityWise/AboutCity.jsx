"use client";

import React, { useState } from "react";

const AboutCity = () => {
  const initialText =
    "Gurugram or Gurgaon is a city located in the northern Indian state of Haryana and is 30 km southwest of the national capital, New Delhi. Considered a significant suburb of Delhi NCR, Gurugram (Gurgaon)’s PIN code is 400001. Deal Acres helps you find all the PIN codes of localities in Gurugram and PIN codes of all locations in India. Along with the PIN code, you can also check Gurugram Post Office & other locality information like Post Office Name, P.O. address, Head Office...";

 

  return (
    <div className="w-full mb-8">
      <div className="w-fit mb-6">
        <h1 className="text-3xl font-semibold max-lg:text-2xl">
          About Gurgaon
        </h1>
        <div className="w-[60%] mt-2 h-1 bg-yellow-500"></div>
      </div>

      <div className="p-4 border-[1px] border-black/50 text-md text-gray-600 rounded-lg leading-6">
        {initialText}
      
      </div>
    </div>
  );
};

export default AboutCity;
