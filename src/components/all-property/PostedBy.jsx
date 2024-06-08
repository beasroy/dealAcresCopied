"use client";

import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const PostedBySelector = () => {
  const [isMainVisible, setIsMainVisible] = useState(true);
  const [selectedPostedBy, setSelectedPostedBy] = useState([]);
  const postedByOptions = ["Builder", "Owner", "Dealer", "Feature Dealer"];

  const toggleMainVisible = () => {
    setIsMainVisible(!isMainVisible);
  };

  const togglePostedBy = (postedBy) => {
    if (selectedPostedBy.includes(postedBy)) {
      setSelectedPostedBy(
        selectedPostedBy.filter((selected) => selected !== postedBy)
      );
    } else {
      setSelectedPostedBy([...selectedPostedBy, postedBy]);
    }
  };

  return (
    <div>
      <div
        className="flex items-center justify-between cursor-pointer mt-4"
        onClick={toggleMainVisible}
      >
        <p className="text-gray-900 text-base font-medium">Posted by</p>
        {isMainVisible ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isMainVisible && (
        <div className="mt-2 flex flex-wrap gap-4">
          {postedByOptions.map((postedBy) => (
            <div
              key={postedBy}
              onClick={() => togglePostedBy(postedBy)}
              className={`cursor-pointer px-4 py-0.5 text-sm border rounded-full w-fit ${
                selectedPostedBy.includes(postedBy)
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 border-[1px] border-gray-600"
              }`}
            >
              + {postedBy}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostedBySelector;
