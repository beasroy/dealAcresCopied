<<<<<<< HEAD
import Image from "next/image"
=======
"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Homepage/services/Card";
import {GoLinkExternal} from 'react-icons/go'
import Link from "next/link";
import { services } from "../Homepage/services/data";

const ServiceExplore = () => {
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    if(typeof window === 'undefined') return;
    const handleResize = () => {
      const width = window.innerWidth;
      let newDeviceType = "";

      if (width >= 1024) {
        newDeviceType = "desktop";
      } else if (width >= 600) {
        newDeviceType = "tablet";
      } else {
        newDeviceType = "mobile";
      }

      setDeviceType(newDeviceType);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };
>>>>>>> 33b1fe1b709683639474d8371f771090607b638d

function ServiceExplore() {
  return (
    <div className="flex flex-row gap-3 items-center bg-blue-900 p-6 rounded-lg">
      <h1 className="text-[1.2rem] font-bold text-white col-span-3 mb-8 ">Explore Our Services{`...`}</h1>
      <div className="relative">
        <div className="relative h-48 w-32 overflow-hidden rounded-lg cursor-pointer border-4 border-white">
          <Image
            src='/singleDeveloper/CommercialProjectsImg.webp'
            alt='Commercial Projects'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <h6 className="absolute bottom-0 left-0 right-0 h-[30px] flex items-center justify-center text-black font-bold rounded-2xl bg-white/90 p-1 opacity-90 ">Home Loan</h6>
      </div>

      <div className="relative">
        <div className="relative h-48 w-32 overflow-hidden rounded-lg cursor-pointer border-4 border-white">
          <Image
            src='/singleDeveloper/ResidentialProjectsImg.webp'
            alt='Residential Projects'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <h6 className="absolute bottom-0 left-0 right-0 h-[30px]flex items-center justify-center text-center text-black font-bold rounded-2xl bg-white/90 p-1 opacity-90 ">Home Decor</h6>
      </div>
      
      <div className="relative">
        <div className="relative h-48 w-32 overflow-hidden rounded-lg cursor-pointer border-4 border-white">
          <Image
            src='/singleDeveloper/ResidentialProjectsImg.webp'
            alt='Residential Projects'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <h6 className="absolute bottom-0 left-0 right-0 h-[30px] flex items-center justify-center text-black font-bold rounded-2xl bg-white/90  opacity-90 ">Home Interior</h6>
      </div>
    </div>
  )
}

export default ServiceExplore
