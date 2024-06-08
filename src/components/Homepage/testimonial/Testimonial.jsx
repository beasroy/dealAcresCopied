'use client';


import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialData } from "./tdata";
import Image from "next/image";
import './Testimonial.css'
import NextArrow from "./NextArrow";

const Testimonial = () => {
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

  useEffect(() => {
    console.log("Device type:", deviceType);
  }, [deviceType]);

  useEffect(() => {
    console.log("Testimonial data:", testimonialData);
  }, [testimonialData]);

  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    rows: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: null, 
    arrows: true,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
      
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
  };
  

  return (
    <div className="relative py-10 md:pt-10 md:pb-12 lg:pb-5 xl:pb-8 2xl:pb-10 bg-indigo-50 mb-16 ">
      <div className="max-w-full mx-auto px-10 testimonial-container">
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-3xl heading font-bold font-[Poppins] mb-4 uppercase text-blue-900">
            Testimonials
          </h2>
          <p className="text-2xl paragraph font-bold mb-5">
            What our customers are saying about Deal Acres
          </p>
          <p className="text-md font-light description text-gray-400">
            Hear from our satisfied buyers, tenants, owners and dealers
          </p>
        </div>
        <div className=" max-w-[890px] xl:max-w-[1080px] -mb-24 pt-5 xl:pt-10  ">
          <Slider {...settings} prevArrow={null} >
            {testimonialData.map((testimonial) => (
              <div key={testimonial.id}>
                <div className="bg-white shadow-blue-800 h-[14rem] xl:h-[12rem] shadow-sm rounded-lg p-3 mx-3 mt-3 mb-2 pb-3">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full mr-3"
                      width={56}
                      height={56}
                    />
                    <div className="testimonial-info">
                      <h3 className="text-md font-bold mt-3 mb-2">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-800 text-sm mb-4">
                    {testimonial.testimonial}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
