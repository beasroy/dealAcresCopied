"use client";
import "./WhyChooseUs.css";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Card = ({ imageUrl, description }) => {
  return (
    <div className="p-3 mx-auto bg-white rounded-sm overflow-hidden flex flex-col items-center shadow-xl h-[240px] w-[200px]">
      <div className="relative overflow-hidden transition-transform duration-300 transform hover:scale-110 cursor-pointer">
        <Image
          src={imageUrl}
          alt="Card Image"
       width={80} height={80}
        />
      </div>

      <div className="mt-4">
        <p className="text-black font-medium text-[12px]">
          {description}
        </p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight) {
        container.classList.add("animate");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <div className="container" ref={containerRef}>
        <h2 className="heading">Why Choose Deal Acres for Property Search?</h2>
        <p className="subheading">
          We provide top-notch services that make us stand out from the rest.
        </p>
        <div className="imagesContainer">
          <Card imageUrl={"/Vast property selection.png"} description="We offer an extensive inventory of properties, providing diverse options for potential buyers or investors." />

          <Card imageUrl={"/User-friendly interface.png"} description="We offer an easy-to-use website or app, enhancing the user experience and simplifying property searches." />
          <Card imageUrl={"/transparent transactions.png"} description="We prioritize transparency in property deals, ensuring secure and trustworthy transactions. to the clients " />
           
          <Card imageUrl={"/personalized recommendations.png"} description="We provide tailored property recommendations based on individual preferences and investment goals." />
           
          
            
          
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
