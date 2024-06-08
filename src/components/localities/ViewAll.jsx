"use client";

import React, { Fragment, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiFillFilter } from "react-icons/ai";

import SideFilter from "@/components/localities/SideFilter";
import LocalityCard from "@/components/localities/LocalityCard";
import Explore from "@/components/Homepage/explore/Explore";
import StarRateLocality from "@/components/localities/StarRateLocality";
import ThumbRating from "@/components/localities/ThumbRating";
import LocalityResidentialZone from "@/components/localities/LocalityResidentialZone";
import LocalityCommercialZone from "@/components/localities/LocalityCommercialZone";
import ExploreMoreLocality from "@/components/localities/ExploreMoreLocality";
import FNQ from "@/components/localities/FNQ";
import PopUpSideFilter from "@/components/localities/PopUpSideFilter";

const ViewAll = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterButtonClick = () => {
    setIsFilterOpen(true);
  };

  const handleFilterApply = (selectedFilters) => {
    console.log("Selected Filters:", selectedFilters);
  };

  return (
    <Fragment>
      <div className="mt-10 mb-10 flex items-center justify-center space-x-2 max-lg:px-5 ">
        <div className="relative w-1/3 max-lg:w-full max-lg:px-[5rem] max-md:px-1">
          <input
            type="text"
            placeholder="Enter city locality or project"
            className="pl-5 py-2 placeholder:font-bold border-2 border-[#A6A6A6] rounded-xl focus:outline-[#004AAD] w-full"
          />
          <button className="absolute text-center py-3 px-4 font-bold text-white bg-[#004AAD] rounded-xl right-0 top-1/2 transform -translate-y-1/2 translate-x-5 max-xl:hidden">
            Search Locality Insights
          </button>
          <button className="absolute inset-y-0 right-0 flex items-center p-4  bg-[#004AAD] xl:hidden max-lg:right-10 rounded-r-xl max-md:right-1">
            <FaSearch className="text-white" />
          </button>
        </div>
        <button
          className="flex items-center p-4 bg-[#004AAD] lg:hidden rounded-md text-white"
          onClick={() => setIsFilterOpen(true)}
        >
          <AiFillFilter />
        </button>
      </div>

      {isFilterOpen && (
        <PopUpSideFilter
          onApply={handleFilterApply}
          onClose={() => setIsFilterOpen(false)}
        />
      )}


  <div className="max-w-[1200px] flex items-start justify-between w-full space-x-10 max-md:space-x-0 mx-auto mb-4 md:mb-7">
    <SideFilter />
    <div className=" max-xl:pr-[4.5rem] max-md:pr-0 w-full md:w-4/5">
      <LocalityCard />

      <StarRateLocality />

      <LocalityCard />

      <LocalityCard />

      <ThumbRating />

      <LocalityCard />

      <div className="w-full flex items-center justify-center py-3">
        <button class="font-bold text-lg rounded-md bg-blue-600 px-3 py-1 text-white">
          Show More
        </button>
      </div>
    </div>
  </div>


      <div className="max-w-[1100px] mx-auto mb-10"><Explore />
</div>
      
      <LocalityResidentialZone />

      <LocalityCommercialZone />

      <ExploreMoreLocality />
        <div className="max-w-screen-xl mx-auto">
        <FNQ />
        </div>
     
    </Fragment>
  );
};

export default ViewAll;
