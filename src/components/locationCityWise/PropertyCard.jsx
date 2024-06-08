import React from "react";

const PropertyCard = () => {
  return (
    <div className="rounded-lg border-[1px]">
      <div className="h-[12rem] w-full overflow-hidden rounded-t-lg">
        <img
          src="https://www.luxuryresidences.in/tata-primanti-sector-72-gurgaon/images/tata-primanti-mobile-banner.webp"
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <p className="text-xl font-semibold">Tata Primanti</p>
        <p className="text-md text-gray-600">
          By Tata House Development Co-operation
        </p>
        <p className="mt-4 text-sm font-semibold">Rs 2.30 Cr - Rs 8.50 Cr</p>

        <div></div>
      </div>
    </div>
  );
};

export default PropertyCard;
