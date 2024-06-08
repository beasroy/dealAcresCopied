import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const BHKSelector = () => {
  const [isMainVisible, setIsMainVisible] = useState(true);
  const [showAllBHK, setShowAllBHK] = useState(false);
  const [selectedBHK, setSelectedBHK] = useState([]);
  const bhkOptions = [
    "1 BHK",
    "2 BHK",
    "3 BHK",
    "4 BHK",
    "5 BHK",
    "6 BHK",
    "7 BHK",
    "8 BHK",
  ];
  const maxVisibleBHK = 5;

  const toggleMainVisible = () => {
    setIsMainVisible(!isMainVisible);
  };

  const toggleShowAllBHK = () => {
    setShowAllBHK(!showAllBHK);
  };

  const toggleBHK = (bhk) => {
    if (selectedBHK.includes(bhk)) {
      setSelectedBHK(selectedBHK.filter((selected) => selected !== bhk));
    } else {
      setSelectedBHK([...selectedBHK, bhk]);
    }
  };

  return (
    <div>
      <div
        className="flex items-center justify-between cursor-pointer mt-4"
        onClick={toggleMainVisible}
      >
        <p className="text-gray-900 text-base font-medium">BHK Selector</p>
        {isMainVisible ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isMainVisible && (
        <div className="mt-2 flex flex-wrap gap-4">
          {bhkOptions
            .slice(0, showAllBHK ? bhkOptions.length : maxVisibleBHK)
            .map((bhk) => (
              <div
                key={bhk}
                onClick={() => toggleBHK(bhk)}
                className={`cursor-pointer px-4 py-0.5 border rounded-full w-fit text-sm ${
                  selectedBHK.includes(bhk)
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 border-gray-600"
                }`}
              >
                {bhk}
              </div>
            ))}
          {bhkOptions.length > maxVisibleBHK && (
            <div
              className="cursor-pointer  text-blue-600"
              onClick={toggleShowAllBHK}
            >
              {showAllBHK
                ? "Show Less"
                : `+${bhkOptions.length - maxVisibleBHK} more`}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BHKSelector;
