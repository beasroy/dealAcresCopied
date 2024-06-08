import React from "react";
import { FaCheck } from "react-icons/fa";
import { useCompareProperty } from "@/context/ComparePropertyContext";

const PropertyCard = ({
  imageUrl,
  price,
  name,
  location,
  size,
  details,
  id,
}) => {
  const { addToCompare, removeFromCompare, isAddedToCompare } =
    useCompareProperty();

  const handleAddToCompare = () => {
    if (isAddedToCompare({ id })) {
      removeFromCompare({ id });
    } else {
      addToCompare({ id, imageUrl, price, name, location, size, details });
    }
  };

  return (
    <div className="px-2 py-1 border border-blue-600 rounded-2xl bg-white max-sm:w-full max-md:w-[calc(50%-1rem)] shadow-md h-[150px]">
      <div className="md:grid md:grid-cols-4 md:gap-2">
        <div className="md:col-span-1">
          <div className="rounded-2xl overflow-hidden w-full h-full">
            <img
              src={imageUrl}
              alt="Property Image"
              className="object-cover rounded-2xl w-full h-full "
            />
          </div>
        </div>
        <div className="md:col-span-3 ">
          <p className="text-blue-600 text-sm font-semibold">{price}</p>
          <p className="text-black text-base font-bold">{name}</p>
          <p className="text-gray-600 text-xs mt-3 md:mt-0">{location}</p>
          <p className="text-gray-600 text-[0.7rem] mt-1">{size} Sq.ft</p>
          <p className="text-gray-600 text-[0.7rem]  mt-1">{details}</p>

          <div className="mt-1 flex flex-row items-center justify-between w-full">
            <button className="bg-blue-700 hover:bg-blue-800 text-white py-0.5 px-4 rounded text-sm">
              Details
            </button>

            <div className="flex items-center">
              <div className="h-4 w-4 border-2 border-gray-600 mr-2 flex items-center justify-center cursor-pointer"  onClick={handleAddToCompare}>
                {isAddedToCompare({ id }) && (
                  <div   onClick={handleAddToCompare}> 
                  <FaCheck className="text-green-500 text-xs cursor-pointer" />
                  </div>
                )}
              </div>
              <span
                className="text-gray-600 py-1 rounded cursor-pointer"
               
              >
                {isAddedToCompare({ id })
                  ? "Added to Compare"
                  : "Add to Compare"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
