import React, { useState } from "react";
import Image from "next/image";
import girlLaptop from "../../../public/localities/girl_with_laptop.png";

const StarRateLocality = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    if (selectedRating === rating) {
      setRating(0);
    } else {
      setRating(selectedRating);
    }
  };

  return (
    <div className="mt-5 mb-5 p-5 bg-[#FBF0B2] flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 space-x-0 sm:space-x-10 rounded-xl">
      <Image
        src={girlLaptop}
        alt="girl with laptop"
        className="w-[5rem] h-[5rem]"
      />
      <div className="flex flex-col items-center justify-center space-y-3">
        <p className="text-lg sm:text-xl font-semibold text-center">
          Are you finding these Insights helpful?
        </p>
        <div className="star-rating flex flex-row items-center space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} onClick={() => handleStarClick(star)}>
              {star <= rating ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarRateLocality;
