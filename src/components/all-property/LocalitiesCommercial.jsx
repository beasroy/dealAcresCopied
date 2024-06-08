"use client";

import React, { useState } from "react";
import { FaChevronUp, FaChevronDown, FaSearch } from "react-icons/fa";

const LocalitiesCommercial = () => {
  const [isMainVisible, setIsMainVisible] = useState(true);
  const [selectedLocalities, setSelectedLocalities] = useState([]);
  const localities = [
    { name: "Dwarka Expressway Gurgaon", rating: 4.6 },
    { name: "Sector 65 Gurgaon", rating: 4.2 },
    { name: "Sector 66 Gurgaon", rating: 4.8 },
    { name: "IMT Manesar", rating: 4.5 },
    { name: "Sector 15 Part 2", rating: 4.3 },
  ];

  const toggleMainVisible = () => {
    setIsMainVisible(!isMainVisible);
  };

  const toggleLocality = (name) => {
    if (selectedLocalities.includes(name)) {
      setSelectedLocalities(
        selectedLocalities.filter((selected) => selected !== name)
      );
    } else {
      setSelectedLocalities([...selectedLocalities, name]);
    }
  };

  return (
    <div>
      <div
        className="flex items-center justify-between cursor-pointer mt-4"
        onClick={toggleMainVisible}
      >
        <p className="text-gray-900 text-base font-medium">Localities</p>
        {isMainVisible ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isMainVisible && (
        <div className="mt-2">
          {localities.map((locality) => (
            <div
              key={locality.name}
              onClick={() => toggleLocality(locality.name)}
              className="flex items-center cursor-pointer mb-2"
            >
              <input
                type="checkbox"
                checked={selectedLocalities.includes(locality.name)}
                onChange={() => toggleLocality(locality.name)}
                className="mr-2 -mt-1"
              />
              <div className="flex items-center">
                <p className="text-gray-600">{locality.name}</p>

                {/* <div className="ml-3 flex items-center text-xs bg-green-100 p-[2px]">
                  <p className="text-gray-600">{locality.rating}</p>
                  <span className="text-gray-600 pl-1">★</span>
                </div> */}
              </div>
            </div>
          ))}

          <div className="flex items-center space-x-2 mt-4">
            <FaSearch />
            <p>More Localities</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocalitiesCommercial;
