import React from "react";
import mapIcon from "../../../public/localities/map-icon-square.webp";
import Image from "next/image";

const ExploreMoreLocality = () => {
  // Define the number of locality blocks you want to display
  const numLocalities = 7;

  // Create an array with a length of numLocalities
  const localityArray = new Array(numLocalities).fill(null);

  return (
    <div className="py-5 px-3 sm:px-5 md:px-10 lg:px-20 xl:px-32 flex flex-col items-center justify-center bg-[#FEE8CB] mb-5">
      <h2 className="text-2xl text-center mb-5">
        Explore different popular Cities Reviews and Overview with Deal Acres
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 w-full mt-4">
        {localityArray.map((_, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <Image src={mapIcon} className="h-[4rem] w-[7rem]" alt="map icon" />
            <p className="text-center">
              Explore <br /> <span className="font-bold">Faridabad</span>{" "}
              localities
            </p>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center py-3 mt-5">
        <button className="font-semibold text-lg bg-blue-600 px-3 py-1 text-white">
          View All
        </button>
      </div>
    </div>
  );
};

export default ExploreMoreLocality;
