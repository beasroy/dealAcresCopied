"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import Sidebox from "./Sidebox";

import Explore from "@/components/Homepage/explore/Explore";

import NewExploreForBlog from "../blog/NewExploreForBlog";
import FAQlocalities from "./FAQlocalities";
import InterestingReads from "../exploreLocality/ViewAllComponents/InterestingReads";

const Card = ({ location }) => {
    return (
        <div className="bg-white rounded-3xl border-2 border-blue-200 shadow-md px-6 py-2 max-md:px-2 flex flex-col items-center text-center">
            <h2 className="text-base max-md:text-s4 font-semibold mb-2">Explore</h2>
            <Image
                src="/t.webp"
                alt="Explore Image"
                width={100}
                height={30}
                className="rounded-lg max-md:w-20 max-md:h-12 "
            />
            <p className="mt-2 max-md:text-sm text-base">Localities in <br /> <span className="text-blue-500 font-bold">{location}</span></p>
            <p className="mt-2 text-xs max-md:text-[0.57rem] max-md:leading-3 w-full">Overview, Reviews, Lifestyle & More of {location}</p>
        </div>
    );
};
const locations = [
    "Haryana", "New Delhi", "Punjab", "Rajasthan", "Uttar Pradesh",
    "Uttarakhand", "Himachal Pradesh", "Chandigarh", "Jharkhand", "Bihar",
    "Maharashtra", "West Bengal", "Chhattisgarh", "Tamil Nadu", "Karnataka",
    "Assam", "Gujarat"
];

const Insights = () => {

    const [showAll, setShowAll] = useState(false);

    const handleToggle = () => {
        setShowAll(!showAll);
    };

    return (
        <div className=" overflow-x-hidden">
            <div className="my-10 flex items-center justify-center space-x-2 max-lg:px-5 ">
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


            <div className="max-w-[1180px] flex items-start justify-between w-full space-x-10 max-md:space-x-0 mx-auto mb-4 md:mb-10">
                <Sidebox />
                <div className="flex flex-col items-center  max-lg:px-[5rem] max-md:px-5">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12  ">
                        {locations.slice(0, showAll ? locations.length : 12).map((location) => (
                            <Card key={location} location={location} />
                        ))}
                    </div>
                    <button
                    onClick={handleToggle}
                    className="mt-8 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-fit"
                >
                    {showAll ? 'View Less' : 'Show More'}
                </button>

                </div>
          
            </div>

            <div className="max-w-[1180px] mx-auto ">
                <Explore />

            </div>
            <div className="max-w-[1180px] mx-auto mt-10 md:mt-14">
                <NewExploreForBlog />
            </div>
            <div className="max-w-[1180px] mx-auto ">
            <InterestingReads />
            </div>
            <div className="max-w-[1180px] mx-auto mb-8">
                <FAQlocalities />
            </div>


        </div >
    );
};

export default Insights;
