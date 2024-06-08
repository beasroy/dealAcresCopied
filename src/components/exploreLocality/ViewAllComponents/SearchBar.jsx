import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="mt-10 mb-10 flex items-center justify-center space-x-2 max-lg:px-5">
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
    </div>
  );
};

export default SearchBar;
