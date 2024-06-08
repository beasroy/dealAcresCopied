'use client'
import React, { useState } from 'react';
import { amenities } from './constants';


const AmenitiesList = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheckbox = (amenity) => {
    setCheckedItems((prevItems) => ({
      ...prevItems,
      [amenity]: !prevItems[amenity],
    }));
  };


  const halfLength = Math.ceil(amenities.length / 2);
  const firstColumn = amenities.slice(0, halfLength);
  const secondColumn = amenities.slice(halfLength);

  return (
    <div className="flex text-sm xs:text-base">
      
      <div className="flex flex-col mr-5">
        {firstColumn.map((amenity,idx) => (
          <div key={idx} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={checkedItems[amenity] || false}
              onChange={() => toggleCheckbox(amenity)}
              width={12}
              height={24}
            />
         
            <label className="cursor-pointer ml-2">{amenity}</label>
          </div>
        ))}
      </div>


      <div className="flex flex-col">
        {secondColumn.map((amenity) => (
          <div key={amenity} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={checkedItems[amenity] || false}
              onChange={() => toggleCheckbox(amenity)}
              width={12}
              height={24}
            />
         
            <label className="cursor-pointer ml-2">{amenity}</label>
          </div>
        ))}
      </div>
    </div>
  );
};





export default AmenitiesList;
