import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const NewLocalitiesAndSocietiesSelector = () => {
  const [isMainVisible, setIsMainVisible] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ["New Projects", "Societies", "Residential", "Commercial"];

  const toggleMainVisible = () => {
    setIsMainVisible(!isMainVisible);
  };

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(
        selectedOptions.filter((selected) => selected !== option)
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div>
      <div
        className="flex items-center justify-between cursor-pointer mt-4"
        onClick={toggleMainVisible}
      >
        <p className="text-gray-900 text-base font-medium">New Projects/Socities</p>
        {isMainVisible ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isMainVisible && (
        <div className="mt-2 flex flex-wrap gap-4">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => toggleOption(option)}
              className={`cursor-pointer px-4 py-0.5 text-sm border rounded-full w-fit ${
                selectedOptions.includes(option)
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 border-[1px] border-gray-600"
              }`}
            >
              + {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewLocalitiesAndSocietiesSelector;
