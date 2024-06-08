"use client";

import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Select from "react-select";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function valuetext(value) {
  return `${value} Sq. Ft`;
}

const AreaRangeSelector = () => {
  const [isAreaVisible, setIsAreaVisible] = useState(true);
  const [value, setValue] = useState([500, 5000]);

  const handleChange = (event, newValue) => {
    setValue(Array.isArray(newValue) ? newValue : [newValue]);
  };

  const toggleAreaVisibility = () => {
    setIsAreaVisible(!isAreaVisible);
  };
  const minArray = Array.from({ length: 13 }, (_, i) => (i + 1) * 100);
  const minOptions = minArray.map(number => ({
    value: number,
    label: `${number} `
  }));
  const maxArray = Array.from({ length: 30 }, (_, i) => (i + 1) * 100);
  const maxOptions = maxArray.map(number => ({
    value: number,
    label: `${number} `
  }));

  return (
    <div>
      <div
        className="flex flex-row items-center justify-between cursor-pointer mt-4"
        onClick={toggleAreaVisibility}
      >
        <p className="text-gray-900 text-base font-medium">Area Range</p>
        {isAreaVisible ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isAreaVisible && (
        <div className="mt-2">
          <Slider
            value={value}
            onChange={handleChange}
            min={100}
            max={10000}
            step={100}
            valueLabelDisplay="auto"
            valueLabelFormat={valuetext}
            getAriaValueText={valuetext}
          />

          <div className="flex flex-row items-center justify-between mt-2">
          <Select  placeholder="Min"
              options={minOptions}
             />
             
             <Select  placeholder="Max"
              options={maxOptions}
             />
          </div>
        </div>
      )}
    </div>
  );
};

export default AreaRangeSelector;
