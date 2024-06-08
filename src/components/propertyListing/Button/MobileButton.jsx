'use client';
import React, { useState } from "react";

const MobileButton = ({ heading, onClick ,hashClick, size, variant, isOption, isSubOption}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked); 
    if(hashClick) onClick(); 
  };

  return (
    <button
      onClick={handleClick}
      className={`py-1 px-6 mr-2 mb-2 
      rounded-xl border-solid border-y-4 border-x-2 hover:border-blue-700 
      whitespace-nowrap 
      text-sm sm:text-base 
      ${size == "small" && "max-sm:text-xs max-sm:xs:text-sm whitespace-nowrap"} 
      ${variant === "secondary" && 'bg-[#cbdbff] text-black max-sm:text-base whitespace-nowrap rounded-lg inline '}  
      ${
        isClicked ? "border-blue-700" : "border-blue-200"
      } 
      ${isOption && '!text-xs sm:!text-sm !px-2 xs:!px-3 sm:!px-6 !mb-1 !mr-1'}
      ${size == "extrasmall" && '!px-2 xs:!px-3 sm:!px-4 !mx-0 !my-0 w-full !text-[10px] xs:!text-xs'}
      `}
    >
      {heading}
    </button>
  );
};
export default MobileButton








