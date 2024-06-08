"use client";

import React, { useState } from "react";
import Advertisement from "@/components/exploreLocality/ViewAllComponents/Advertisement";
import BuyerGuideBox from "@/components/exploreLocality/ViewAllComponents/BuyerGuideBox";

const SideBar = () => {
  const [tags, setTags] = useState([]);

  const toggleTag = (tag) => {
    if (tags.includes(tag)) {
      setTags(tags.filter((t) => t !== tag));
    } else {
      setTags([...tags, tag]);
    }
  };

  return (
    <div className="w-1/3 flex flex-col items-center justify-center max-xl:w-1/2 max-lg:hidden">
      <h2 className="font-bold text-2xl">Select a Location</h2>

      <div className="flex flex-wrap p-5 gap-4 border border-blue-300 rounded-xl w-full mt-5 mb-5">
        <span
          className={`bg-blue-100 text-black font-semibold px-2 py-1 rounded-xl ${
            tags.includes("Popular Cities")
              ? "bg-blue-700 text-white font-bold"
              : "hover:bg-blue-100"
          }`}
          onClick={() => toggleTag("Popular Cities")}
        >
          Popular Cities
        </span>
        <span
          className={`bg-blue-100 text-black font-semibold px-2 py-1 rounded-xl ${
            tags.includes("Posh Location")
              ? "bg-blue-700 text-white font-bold"
              : "hover:bg-blue-100"
          }`}
          onClick={() => toggleTag("Posh Location")}
        >
          Posh Location
        </span>
        <span
          className={`bg-blue-100 text-black font-semibold px-2 py-1 rounded-xl ${
            tags.includes("Hotspot Location")
              ? "bg-blue-700 text-white font-bold"
              : "hover:bg-blue-100"
          }`}
          onClick={() => toggleTag("Hotspot Location")}
        >
          Hotspot Location
        </span>
        <span
          className={`bg-blue-100 text-black font-semibold px-2 py-1 rounded-xl ${
            tags.includes("Affordable Location")
              ? "bg-blue-700 text-white font-bold"
              : "hover:bg-blue-100"
          }`}
          onClick={() => toggleTag("Affordable Location")}
        >
          Affordable Location
        </span>
      </div>

      <Advertisement />

      <BuyerGuideBox />
    </div>
  );
};

export default SideBar;
