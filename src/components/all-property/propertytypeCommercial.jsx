"use client";

import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const PropertytypeCommercial = () => {
  const [isMainVisible, setIsMainVisible] = useState(true);
  const [showAllTags, setShowAllTags] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const tags = [
    "Ready to Move Offoces",
    "Bare Shell Offices",
    "Shops & Retail",
    "Commercial/Institutional Land",
    "Agricultural/Farm Land",
    "Industrial Land/plots","Ware House","Cold Storage","Factory","Manufacturing","Hotel/Resorts","Guest House/Banquet-Halls"

  ];
  const maxVisibleTags = 5;

  const toggleMainVisible = () => {
    setIsMainVisible(!isMainVisible);
  };

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const toggleShowAllTags = () => {
    setShowAllTags(!showAllTags);
  };

  return (
    <div>
      <div
        className="flex items-center justify-between cursor-pointer mt-4"
        onClick={toggleMainVisible}
      >
        <p className="text-gray-900 text-base font-medium">Type of Property</p>
        {isMainVisible ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isMainVisible && (
        <div className="mt-2 flex flex-wrap gap-4">
          {tags
            .slice(0, showAllTags ? tags.length : maxVisibleTags)
            .map((tag) => (
              <div
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`cursor-pointer px-4 py-0.5 text-sm border rounded-full w-fit ${
                  selectedTags.includes(tag)
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 border-[1px] border-gray-600"
                }`}
              >
                + {tag}
              </div>
            ))}
          {tags.length > maxVisibleTags && (
            <div
              className="cursor-pointer  text-blue-600"
              onClick={toggleShowAllTags}
            >
              {showAllTags
                ? "Show less"
                : `+${tags.length - maxVisibleTags} more`}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PropertytypeCommercial;
