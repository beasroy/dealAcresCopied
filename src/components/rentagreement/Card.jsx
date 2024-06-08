import React from "react";

import { IoShareSocialOutline } from "react-icons/io5";

function NewsCard({ title, text, imageSrc, date, handleShare }) {
  return (
    <div className="bg-white lg:max-w-[100%] rounded-lg overflow-hidden shadow-lg w-full  md:h-[300px]  grid grid-rows-[_repeat(10,1fr)]  md:min-h-[230px] min-w-[210px] md:min-w-[250px] h-[unset] min-h-[unset] max-h-full">
      <div className="row-span-4">
        <img
          src={imageSrc}
          alt="Manual"
          className=" object-cover w-full h-full"
          
        />
      </div>
      <div className="p-2  grid grid-rows-4 row-span-6 ">
        <h3 className="text-sm md:text-base font-semibold row-span-1">{title}</h3>
        <p className="text-gray-700 text-xs md:text-sm text-left row-span-2">{text}</p>
        <div className="flex justify-between items-center row-span-1">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-xs sm:text-sm">{date}</span>
          </div>
          <div>
            <button
              onClick={handleShare}
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <IoShareSocialOutline size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
