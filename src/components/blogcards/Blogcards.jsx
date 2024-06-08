// components/CardWithHeading.js
import React from "react";
import "./Blogcard.css";
import Link from "next/link";
import Image from "next/image";
import background from "../../../public/home.jpg";
import loan1 from "../../../public/all blog/loan1.webp";
import loan2 from "../../../public/all blog/loan2.webp";
import loan3 from "../../../public/all blog/loan3.jpg";
import FeatureCard from "../Featured/FeatureCard";

const Blogcards = () => {
  return (
    <div className="mb-4">
      <div className="flex  gap-1  py-4 mb-4 w-full   text-black bg-white items-start">
        <div className="whitespace-nowrap">
          <h2 className=" inline-flex flex-col
          text-lg xs:text-xl md:text-2xl lg:text-3xl font-[Poppins] w-full">Loan Assistance
          <span className="self-end text-base font-normal">
            Stay Informed
          </span>
          </h2>
          
        </div>
        <div className=" inline self-center  border-t-4 border-black w-full "></div>
        <h2 className="self-center whitespace-nowrap ">
          <Link className="text-blue-600 font-bold break-keep  text-xs   xs:text-sm sm:text-base md:text-lg block w-full lg:text-xl" href="/">
            Read More
          </Link>
        </h2>
      </div>
      <div className="flex gap-4 flex-nowrap overflow-x-auto  md:justify-normal    ">
        <FeatureCard img={loan1} text={"Mastering Mortgage Basics: 10 Key Concepts Every"} />
        <FeatureCard img={loan2} text={"Mastering Mortgage Basics: 10 Key Concepts Every"} />
        <FeatureCard img={loan3} text={"Mastering Mortgage Basics: 10 Key Concepts Every"} />
        
      </div>
      

    </div>
  );
};

export default Blogcards;
