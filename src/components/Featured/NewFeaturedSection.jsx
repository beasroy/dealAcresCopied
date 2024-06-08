import React from "react";
import Image from "next/image";
import background from "../../../public/all blog/villa.jpg";
import discussion from "../../../public/all blog/discussions.webp";
import NewFeatureCard from "./NewFeatureCard";
import FeatureSlider from "../allBlog/FeatureSlider";

const NewFeaturedSection = () => {
    return (
        <div className="md:px-4  flex flex-col gap-8 md:gap-16 ">
            <div className="grid grid-cols-2 grid-rows-[repeat(1,400px)] md:grid-rows-[repeat(1,600px)]  gap-2 xs:gap-4 md:gap-12  ">
                <div className="col-span-1 pb-4 max-h-[400px] md:max-h-[600px] flex flex-col   ">
                    <div className="flex justify-start mb-2 ">
                        <h2 className="text-2xl sm:text-4xl border-b border-b-black font-[Poppins]">
                            Featured
                        </h2>
                    </div>
                    <div className="h-full max-w-full">
                        <NewFeatureCard img={discussion} text="Top Coworking Space On Rent in Modle Town Hisar" />
                    </div>

                </div>
                <div className="col-span-1 pb-4 max-md:h-[400px]  max-md:overflow-auto flex flex-col  ">
                    <div className="flex justify-start mb-2">
                        <h2 className="text-2xl sm:text-4xl border-b border-b-black font-[Poppins]">
                            New Updates
                        </h2>
                    </div>
                    <div className="overflow-auto h-full flex flex-col gap-1 sm:gap-y-4 ">
                        <div className="grid grid-cols-[repeat(2,90%)] sm:grid-cols-[repeat(2,75%)] md:grid-cols-2 gap-2 sm:gap-8 md:h-full  overflow-x-auto h-[50%]">
                            <NewFeatureCard img={background} text={'Top Coworking Space On Rent in Modle Town Hisar'} variant={"small"} />
                            <NewFeatureCard img={background} text={'Top Coworking Space On Rent in Modle Town Hisar'} variant={"small"} />



                            {/* Repeat the above structure for the other New Updates items */}
                        </div>
                        <div className="grid grid-cols-[repeat(2,90%)] sm:grid-cols-[repeat(2,75%)] md:grid-cols-2 gap-2 md:gap-8 md:h-full  overflow-x-scroll h-[50%]">
                            <NewFeatureCard img={background} text={'Top Coworking Space On Rent in Modle Town Hisar'} variant={"small"} />
                            <NewFeatureCard img={background} text={'Top Coworking Space On Rent in Modle Town Hisar'} variant={"small"} />



                            {/* Repeat the above structure for the other New Updates items */}
                        </div>
                    </div>

                </div>
            </div>
            <div className="grid grid-cols-6 gap-2 sm:gap-4 md:gap-12 h-[200px] md:h-[300px] ">
                <div className="col-span-2 h-full max-h-[200px] md:max-h-[300px] ">
                    <div className="h-full ">
                        <NewFeatureCard img={background} text={"Top Coworking Space On Rent in Modle Town Hisar"} variant={"small"} />

                    </div>
                </div>
                <div className="col-span-4  h-full max-h-[200px] md:max-h-[300px] ">

                    {/* <NewFeatureCard img={background} text={"Top Coworking Space On Rent in Modle Town Hisar"}/> */}
                    <div className="w-full h-full ">
                        <FeatureSlider img={background} title={"Top Coworking Space On Rent in Modle Town Hisar"} />

                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewFeaturedSection;
