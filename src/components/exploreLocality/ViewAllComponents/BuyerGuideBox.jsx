import React from "react";
import userGuideImage from "../../../../public/exploreLocality/user-guide.png";
import Image from "next/image";

const BuyerGuideBox = () => {
  return (
    <div className="p-6 flex flex-col items-center justify-center bg-[#F6C094] w-full rounded-xl space-y-3 mb-5">
      <h2 className="text-2xl font-bold max-sm:text-xl">
        Buyers <span className="text-[#F6A05A]">Guide</span>
      </h2>

      <Image
        src={userGuideImage}
        alt="deal acres user guide"
        className="h-28 w-auto max-sm:h-16"
      />
    </div>
  );
};

export default BuyerGuideBox;
