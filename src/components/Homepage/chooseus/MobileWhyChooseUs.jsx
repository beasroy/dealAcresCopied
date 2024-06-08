"use client";
import "./WhyChooseUs.css";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Card = ({ imageUrl, description ,heading}) => {
  return (
    <div className="p-3 bg-white rounded-sm overflow-hidden flex flex-row items-center gap-3 shadow-md w-full mb-2">
      <div className="relative overflow-hidden transition-transform duration-300 transform hover:scale-110 cursor-pointer">
        <Image
          src={imageUrl}
          alt="Card Image"
       width={150} height={150}
        />
      </div>
<div className="flex flex-col">
    <h1 className="font-bold">{heading}</h1>
      <div className="mt-2">
        <p className="text-black font-medium text-[12px]">
          {description}
        </p>
      </div>
      </div>
    </div>
  );
};

const MobileWhyChooseUs = () => {
  

  return (
    <div className="flex justify-center mt-5 mb-4">
      <div className="w-full px-4">
        <h2 className="font-semibold text-[1.1rem] md:text-2xl  text-[#0e4690e5]  sm:mb-3 md:mb-5">Why Choose Deal Acres for Property Search?</h2>
        <p className="subheading">
          We provide top-notch services that make us stand out from the rest.
        </p>
        <div>
          <Card imageUrl={"/Vast property selection.png"} heading={"Vast Property Selection"} description="We offer an extensive inventory of properties, providing diverse options for potential buyers or investors." />

          <Card imageUrl={"/User-friendly interface.png"} heading={"User-Friendly Interface"} description="We offer an easy-to-use website or app, enhancing the user experience and simplifying property searches." />
          <Card imageUrl={"/transparent transactions.png"} heading={"Transparent Transactions"} description="We prioritize transparency in property deals, ensuring secure and trustworthy transactions. to the clients " />
           
          <Card imageUrl={"/personalized recommendations.png"} heading={"Personalized Recommendations"} description="We provide tailored property recommendations based on individual preferences and investment goals." />
           
          
            
          
        </div>
      </div>
    </div>
  );
};

export default MobileWhyChooseUs;
