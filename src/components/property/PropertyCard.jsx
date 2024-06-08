
import React from 'react';

const PropertyCard = ({ title, description, price, imageSrc }) => {
  return (
    <div className=" bg-white rounded-[12px]  grid grid-rows-[12] ">
      <img src={imageSrc} alt={title} className=" w-full h-40 object-cover rounded-md mb-4 row-span-8" />
      <div className="row-span-4">
        <h3 className="text-sm md:text-lg md:first-line:text-xl font-bold ">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-500 ">{description}</p>
        <p className="text-xs sm:text-lg font-bold">{price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
