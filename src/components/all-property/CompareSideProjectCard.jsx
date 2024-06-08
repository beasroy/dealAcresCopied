import React from "react";
import { useCompareProperty } from "@/context/ComparePropertyContext";

const PropertyCard = ({
  id,
  imageUrl,
  price,
  name,
  location,
  size,
  details,
}) => {
  const { removeFromCompare } = useCompareProperty();

  const handleRemoveFromCompare = () => {
    removeFromCompare({ id });
  };

  return (
    <div className="relative p-3 rounded-xl grid grid-cols-3 gap-4">
      <button
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 cursor-pointer z-10"
        onClick={handleRemoveFromCompare}
      >
        X
      </button>
      <div className="col-span-1">
        <div className="rounded-md overflow-hidden h-full">
          <img
            src={imageUrl}
            alt="Property Image"
            className="object-cover rounded-md w-full h-full"
          />
        </div>
      </div>
      <div className="col-span-2 py-2">
        <p className="text-blue-600 text-xs font-semibold">{price}</p>
        <p className="text-black text-xs font-bold">{name}</p>
        <p className="text-gray-600 text-[8px] mt-[3px]">{location}</p>
        <p className="text-gray-600 text-[8px] mt-[1px]">{size} Sq.ft</p>
        <p className="text-gray-600 text-[8px] mt-[1px]">{details}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
