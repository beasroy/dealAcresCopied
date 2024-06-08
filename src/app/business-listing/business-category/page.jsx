'use client'

import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import Select from "react-select";

const BusinessCategory = () => {
  const [primaryCategory, setPrimaryCategory] = useState(null);
  const [secondaryCategory, setSecondaryCategory] = useState(null);
  const [selectedSecondaryCategories, setSelectedSecondaryCategories] =
    useState([]);

  const handlePrimaryChange = (selectedOption) => {
    setPrimaryCategory(selectedOption);
    setSelectedSecondaryCategories([]);
    setSecondaryCategory(null);
  };

  const handleSecondaryChange = (selectedOption) => {
    if (selectedSecondaryCategories.length < 3) {
      setSecondaryCategory(selectedOption);
      setSelectedSecondaryCategories((prevSelected) => [
        ...prevSelected,
        selectedOption,
      ]);
    }
  };

  const handleRemoveSecondaryCategory = (indexToRemove) => {
    setSelectedSecondaryCategories((prevSelected) =>
      prevSelected.filter((_, index) => index !== indexToRemove)
    );
  };

  const primaryOptions = [
    { value: "Property Dealer", label: "Property Dealer" },
    { value: "Property Services", label: "Property Services" },
    { value: "Home Designing", label: "Home Designing" },
    { value: "Value Added Service", label: "Value Added Service" },
  ];

  const secondaryOptions = {
    "Property Services": [
      { value: "Rent Agreement", label: "Rent Agreement" },
      { value: "Home Loan", label: "Home Loan" },
      { value: "Property Valuer", label: "Property Valuer" },
      { value: "Legal Services", label: "Legal Services" },
      { value: "Chartered Accountant", label: "Chartered Accountant" },
    ],
    "Home Designing": [
      { value: "Electronic Good Dealers", label: "Electronic Good Dealers" },
      { value: "Home Décor", label: "Home Décor" },
      { value: "Home Interior", label: "Home Interior" },
      { value: "Vastu Shartar", label: "Vastu Shartar" },
      { value: "Furniture Dealer", label: "Furniture Dealer" },
      { value: "Modular Kitchen", label: "Modular Kitchen" },
      { value: "Construction Contractor", label: "Construction Contractor" },
    ],
    "Value Added Service": [
      { value: "Packer & Movers", label: "Packer & Movers" },
      { value: "Pest Control", label: "Pest Control" },
      { value: "Solar Product Dealer", label: "Solar Product Dealer" },
      { value: "Carpenter", label: "Carpenter" },
      { value: "Plumbing Contractor", label: "Plumbing Contractor" },
      { value: "Electrician", label: "Electrician" },
      { value: "Security System Dealer", label: "Security System Dealer" },
      { value: "Sanitary Dealer", label: "Sanitary Dealer" },
      { value: "Painting Service", label: "Painting Service" },
      { value: "Flooring & Marble Dealer", label: "Flooring & Marble Dealer" },
    ],
  };

  const secondaryOptionsForSelectedPrimary =
    primaryCategory && secondaryOptions[primaryCategory.value];

  const isSaveEnabled = primaryCategory && selectedSecondaryCategories.length > 0;

  return (
    <div className="flex items-center justify-center py-8 max-md:p-2">
      <div className="p-2 md:p-5 w-fit md:border-2 rounded-lg md:border-blue-300 md:pr-10 ">
        <h1 className="font-semibold text-3xl mb-3 max-md:text-lg">
          First Choose your Real Estate <br className="max-md:hidden" />
          Business Category
        </h1>
        <p className="mb-4 text-gray-500 text-sm md:text-base">
          This helps customers if they are looking for a service which you are
          providing.
        </p>

        <div className="flex items-end justify-start space-x-3 w-full mb-4 max-md:space-x-2">
          <FaSearch className="h-6 w-6 mb-2" color="#747264" />
          <div className="w-full">
            <label className="text-lg max-md:text-base">
              Primary Business Category
            </label>
            <Select
              value={primaryCategory}
              onChange={handlePrimaryChange}
              options={primaryOptions}
              className="w-[90%] mt-2"
            />
          </div>
        </div>

        <div className="flex items-end justify-start space-x-3 w-full mb-4">
          <FaSearch className="h-6 w-6 mb-2" color="#747264" />
          <div className="w-full">
            <label className="text-lg max-md:text-base">
              Secondary Business Category
            </label>
            <Select
              value={secondaryCategory}
              onChange={handleSecondaryChange}
              options={secondaryOptionsForSelectedPrimary}
              className="w-[90%] mt-2"
              isDisabled={
                !primaryCategory || selectedSecondaryCategories.length >= 3
              }
              placeholder={
                !primaryCategory
                  ? "Please select a primary category first"
                  : "Select an option..."
              }
            />
          </div>
        </div>
        <div className="flex flex-wrap md:hidden gap-2">
          <input  className="border border-blue-400 p-0.5 rounded-md w-[48%]"/>
          <input className="border border-blue-400 p-0.5 rounded-md w-[48%]"/>
          <input className="border border-blue-400 p-0.5 rounded-md w-[48%]"/>

        </div>
        <p className="mt-2 md:hidden text-xs">You can only choose 3 Real estate services not more then that. </p>

        <div className="md:flex flex-wrap items-center hidden ">
          {selectedSecondaryCategories.map((category, index) => (
            <div
              key={index}
              className="bg-blue-300 text-blue-800 px-3 py-2 rounded-full flex items-center space-x-2 m-1"
            >
              <span className="font-semibold">{category.label}</span>
              <button
                onClick={() => handleRemoveSecondaryCategory(index)}
                className="text-red-600"
              >
                <FaTimes />
              </button>
            </div>
          ))}
        </div>
        <button
          className={`bg-blue-600 text-sm md:text-base text-white font-semibold rounded-md p-2 mt-2 ${isSaveEnabled ? "" : "opacity-50 cursor-not-allowed"}`}
          disabled={!isSaveEnabled}
        >
          Save and Continue
        </button>
      </div>
    </div>
  );
};

export default BusinessCategory;
