import React from "react";
import Image from "next/image";

import cityImage from "../../../public/locationCityWise/city.jpg";

const CityInformation = () => {
  return (
    <div className="w-full mb-8">
      <div className="w-fit mb-6">
        <h1 className="text-3xl font-semibold max-lg:text-2xl">Gurugram</h1>
        <div className="w-[60%] mt-2 h-1 bg-yellow-500"></div>
      </div>

      <div className="w-full grid grid-cols-2 max-md:grid-cols-1 gap-6 max-lg:gap-4">
        <div className="w-full rounded-md border-[1px] border-black/50">
          <div className="py-4 px-3 border-b-[1px] border-gray-600 text-lg font-semibold max-lg:py-2 max-lg:px-2 max-lg:text-md">
            Information about gurgaon
          </div>

          <div className="py-4 px-3 pr-5 border-b-[1px] border-gray-600 text-lg max-lg:py-2 max-lg:px-2 max-lg:text-md max-lg:p-none">
            <div className="flex items-center justify-between">
              <p>State</p>
              <p className="font-semibold">Haryana</p>
            </div>
          </div>
          <div className="py-4 px-3 pr-5 border-b-[1px] border-gray-600 text-lg max-lg:py-2 max-lg:px-2 max-lg:text-md max-lg:p-none">
            <div className="flex items-center justify-between">
              <p>City Name</p>
              <p className="font-semibold">Gurgaon</p>
            </div>
          </div>
          <div className="py-4 px-3 pr-5 border-b-[1px] border-gray-600 text-lg max-lg:py-2 max-lg:px-2 max-lg:text-md max-lg:p-none">
            <div className="flex items-center justify-between">
              <p>Region</p>
              <p className="font-semibold">North India</p>
            </div>
          </div>
          <div className="py-4 px-3 pr-5 border-b-[1px] border-gray-600 text-lg max-lg:py-2 max-lg:px-2 max-lg:text-md max-lg:p-none">
            <div className="flex items-center justify-between">
              <p>PO in City</p>
              <p className="font-semibold">171</p>
            </div>
          </div>
          <div className="py-4 px-3 pr-5 border-b-[1px] border-gray-600 text-lg max-lg:py-2 max-lg:px-2 max-lg:text-md max-lg:p-none">
            <div className="flex items-center justify-between">
              <p>Official Language</p>
              <p className="font-semibold">Hindi</p>
            </div>
          </div>
          <div className="py-4 px-3 pr-5  text-lg max-lg:py-2 max-lg:px-2 max-lg:text-md max-lg:pr-none">
            <div className="flex items-center justify-between">
              <p>Postal Division ( Circle ) </p>
              <p className="font-semibold">Haryana Circle</p>
            </div>
          </div>
        </div>

        <div className="w-full h-full rounded-[4rem] overflow-hidden max-md:order-first max-md:h-32 max-md:rounded-md">
          <Image
            src={cityImage}
            alt="gurgaon"
            className="object-fill w-full h-full max-md:object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CityInformation;
