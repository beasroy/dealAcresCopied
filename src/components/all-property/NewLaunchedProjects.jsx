import React from "react";
import cityImage from "../../../public/locationCityWise/city.jpg";
import Image from "next/image";
import newlaunch from "../../../public/property/newlaunch.jpg"

const NewLaunchedProjects = () => {
  return (
    <div className="p-4 relative">
    <div
      className="absolute inset-0 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${newlaunch.src})` }}
    />
  <div className="relative z-10">
      <h2 className="text-2xl font-semibold mb-2">Newly Launched Projects</h2>
      <p className="font-semibold mb-2">
        Recently added projects and phases in Delhi / NCR (All)
      </p>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Repeat this block for each project */}
        <div className="flex flex-col items-center justify-center md:w-1/4 p-4">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
            <Image
              src={cityImage}
              alt="Your Image"
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-center font-semibold text-sm md:text-xs mt-2">
            Gulshan Avante
          </p>
          <p className="text-center text-gray-700 font-semibold text-xs">Sector 93 Gurgaon</p>
          <p className="text-center font-semibold text-sm md:text-xs">
            ₹ 45 - 75 Lac
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:w-1/4 p-4">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
            <Image
              src={cityImage}
              alt="Your Image"
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-center font-semibold text-sm md:text-xs mt-2">
            Gulshan Avante
          </p>
          <p className="text-center text-gray-700 font-semibold  text-xs">Sector 93 Gurgaon</p>
          <p className="text-center font-semibold text-sm md:text-xs">
            ₹ 45 - 75 Lac
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:w-1/4 p-4">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
            <Image
              src={cityImage}
              alt="Your Image"
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-center font-semibold text-sm md:text-xs mt-2">
            Gulshan Avante
          </p>
          <p className="text-center text-gray-700 font-semibold  text-xs">Sector 93 Gurgaon</p>
          <p className="text-center font-semibold text-sm md:text-xs">
            ₹ 45 - 75 Lac
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:w-1/4 p-4">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
            <Image
              src={cityImage}
              alt="Your Image"
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-center font-semibold text-sm md:text-xs mt-2">
            Gulshan Avante
          </p>
          <p className="text-center text-gray-700 font-semibold  text-xs">Sector 93 Gurgaon</p>
          <p className="text-center font-semibold text-sm md:text-xs">
            ₹ 45 - 75 Lac
          </p>
        </div>
        {/* End of project block */}
      </div>
    </div>
    </div>
  );
};

export default NewLaunchedProjects;
