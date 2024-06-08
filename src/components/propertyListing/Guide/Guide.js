import React from "react";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { MdPermMedia } from "react-icons/md";
import { BsCurrencyRupee } from "react-icons/bs";
import "./guide.css"
const Guide = () => {
  return (
    <section className="flex flex-col space-y-10 mt-10 p-5">
      <p className="font-bold text-2xl lg:text-3xl uppercase text-center">
        Step by Step Guide for Free Property Listing
      </p>

      <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row items-center justify-center lg:space-x-10">
        <div className="flex flex-col guide-col space-y-5 w-full lg:w-1/4 items-center justify-center">
          <AiOutlineFolderOpen className=" bg-blue-500 p-2 rounded-full w-24 h-24 text-white" />
          <p className="font-semibold items-center  text-lg ">
            Step 1 : Add proper detail
          </p>
          <p className="text-lg text-center">
            Start filling the form with a few basic details like type of
            property, Area, Location, etc.
          </p>
        </div>
        <div className="flex flex-col guide-col space-y-5 w-full lg:w-1/4 items-center justify-center">
          <MdPermMedia className="bg-blue-500 p-2 rounded-full w-24 h-24 text-white " />
          <p className="font-semibold text-lg items-center">
            Step 2 : Add Images & Videos
          </p>
          <p className="text-lg items-center text-center">
            Upload your property images or videos either from your Mobile or
            Desktop.
          </p>
        </div>
        <div className="flex flex-col guide-col space-y-5 w-full lg:w-1/4 items-center justify-center">
          <BsCurrencyRupee className="bg-blue-500 p-2 rounded-full w-24 h-24 text-white" />
          <p className="font-semibold text-lg text-center">
            Step 3 : Add Pricing
          </p>
          <p className="text-lg text-center">
            Upload the expected price of your property, and now it is ready to post..
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guide;
