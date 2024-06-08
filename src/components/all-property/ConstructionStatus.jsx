"use client";

import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const ConstructionStatusSelector = () => {
  const [isMainVisible, setIsMainVisible] = useState(true);
  const [showAllStatus, setShowAllStatus] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState([]);
  const constructionStatusOptions = [
    "Under Construction",
    "Ready to Move",
    "New Launch",
    "Resale",
  ];
  const maxVisibleStatus = 2;

  const toggleMainVisible = () => {
    setIsMainVisible(!isMainVisible);
  };

  const toggleShowAllStatus = () => {
    setShowAllStatus(!showAllStatus);
  };

  const toggleStatus = (status) => {
    if (selectedStatus.includes(status)) {
      setSelectedStatus(
        selectedStatus.filter((selected) => selected !== status)
      );
    } else {
      setSelectedStatus([...selectedStatus, status]);
    }
  };

  return (
    <div>
      <div
        className="flex items-center justify-between cursor-pointer mt-4"
        onClick={toggleMainVisible}
      >
        <p className="text-gray-900 text-base font-medium">Construction Status</p>
        {isMainVisible ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isMainVisible && (
        <div className="mt-2 flex flex-wrap gap-4">
          {constructionStatusOptions
            .slice(
              0,
              showAllStatus
                ? constructionStatusOptions.length
                : maxVisibleStatus
            )
            .map((status) => (
              <div
                key={status}
                onClick={() => toggleStatus(status)}
                className={`cursor-pointer px-4 py-0.5 border rounded-full w-fit text-sm ${
                  selectedStatus.includes(status)
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 border-[1px] border-gray-600"
                }`}
              >
                + {status}
              </div>
            ))}

          {constructionStatusOptions.length > maxVisibleStatus && (
            <div
              className="cursor-pointer text-blue-600"
              onClick={toggleShowAllStatus}
            >
              {showAllStatus
                ? "Show Less"
                : `+${
                    constructionStatusOptions.length - maxVisibleStatus
                  } more`}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ConstructionStatusSelector;
