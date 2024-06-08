import React from "react";
import Image from "next/image";
import pinkMapImage from "../../../../public/exploreLocality/pink-map.webp";

const ExploreLocalitiesBox = () => {
  return (
    <div className="p-5 flex flex-col items-center justify-center rounded-xl border-2 border-blue-200 max-md:p-2 max-sm:w-full">
      <h2 className="font-semibold">Explore</h2>
      <Image
        src={pinkMapImage}
        className="h-14 w-auto max-md:h-5"
        alt="deal acres pink map"
      />
      <p className="text-lg mt-1 max-lg:text-md">Locality In</p>
      <p className="font-bold text-blue-700 text-lg max-lg:text-md">Haryana</p>
      <p className="w-full text-center mt-1 text-sm max-lg:text-xs">
        Overview, Reviews, <br />
        Lifestyle & More of Haryana
      </p>
    </div>
  );
};

export default ExploreLocalitiesBox;
