"use client";

import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const PurchaseType = () => {
  const [isMainVisible, setIsMainVisible] = useState(true);
  const [selectedPurchaseType, setSelectedPurchaseType] = useState([]);
  const purchaseTypeOptions = ["Resale", "New Booking"];

  const toggleMainVisible = () => {
    setIsMainVisible(!isMainVisible);
  };

  const togglePurchaseType = (purchaseType) => {
    if (selectedPurchaseType.includes(purchaseType)) {
      setSelectedPurchaseType(
        selectedPurchaseType.filter((selected) => selected !== purchaseType)
      );
    } else {
      setSelectedPurchaseType([...selectedPurchaseType, purchaseType]);
    }
  };

  return (
    <div>
      <div
        className="flex items-center justify-between cursor-pointer mt-4"
        onClick={toggleMainVisible}
      >
        <p className="text-gray-900 text-base font-medium">Purchase Type</p>
        {isMainVisible ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isMainVisible && (
        <div className="mt-2 flex flex-wrap gap-4">
          {purchaseTypeOptions.map((purchaseType) => (
            <div
              key={purchaseType}
              onClick={() => togglePurchaseType(purchaseType)}
              className={`cursor-pointer px-4 py-0.5 text-sm border rounded-full w-fit ${
                selectedPurchaseType.includes(purchaseType)
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 border-[1px] border-gray-600"
              }`}
            >
              + {purchaseType}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PurchaseType;
