import React, { useState, useEffect } from 'react';

const RoundedDiv = ({ size, width, height, onClick, dropdown, dropdownLength, selectedFloor, onSelectionChange }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setSelectedOptions(prevOptions => {
      if (!prevOptions[selectedFloor]) {
        return { ...prevOptions, [selectedFloor]: null };
      }
      return prevOptions;
    });
  }, [selectedFloor]);

  const handleButtonClick = (index) => {
    const selectedValue = index + 1;
    setSelectedOptions(prevOptions => ({
      ...prevOptions,
      [selectedFloor]: selectedValue
    }));
    if (onClick) {
      onClick(selectedValue);
    }
    if (onSelectionChange) {
      onSelectionChange(selectedValue);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOptions(prevOptions => ({
      ...prevOptions,
      [selectedFloor]: option
    }));
    setShowDropdown(false);
    if (onSelectionChange) {
      onSelectionChange(option);
    }
  };

  const dropdownOptions = Array.from({ length: dropdownLength }, (_, index) => index + size + 1);

  return (
    <div className="md:relative md:flex items-center">
      <div className="flex justify-start gap-4 my-2">
        {Array.from({ length: size }, (v, index) => (
          <button
            key={index + 1}
            style={{
              width: `${width}px`,
              height: `${height}px`,
              backgroundColor: selectedOptions[selectedFloor] === index + 1 ? '#3498db' : 'white',
              color: selectedOptions[selectedFloor] === index + 1 ? 'white' : '#3498db',
            }}
            className="rounded-full flex items-center justify-center font-bold border border-blue-700 text-sm xs:text-base"
            onClick={() => handleButtonClick(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {dropdown && (
        <div className="relative ml-4 ">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className={`flex items-center justify-center rounded-full w-[30px] h-[30px] border  border-blue-700 bg-${showDropdown ? 'gray-200' : 'white'}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-700"
              viewBox="0 0 20 20"
              fill="currentColor"
              transform={showDropdown ? 'rotate(180)' : 'rotate(0)'}
            >
              <path
                fillRule="evenodd"
                d="M9.292 13.707a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414l-3.293 3.293-3.293-3.293a1 1 0 00-1.414 1.414l4 4z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {showDropdown && (
            <div className="absolute top-full right-0 mt-1 z-10 bg-white border border-gray-300 rounded max-h-40 overflow-y-auto">
              {dropdownOptions.map((option, index) => (
                <button
                  key={index}
                  className={`block w-full py-2 px-4 text-left text-gray-800 hover:bg-gray-200 ${option === selectedOptions[selectedFloor] ? 'bg-gray-200' : ''}`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RoundedDiv;
