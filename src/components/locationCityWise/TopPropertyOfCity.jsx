import React from "react";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Explore from "@/components/Homepage/explore/Explore";

import PropertyCard from "@/components/locationCityWise/PropertyCard";

const TopPropertyOfCity = () => {
  return (
    <div className="w-full mb-8">
      <div className="w-fit mb-6">
        <h1 className="text-3xl font-semibold max-lg:text-2xl">
          Top Projects in Gurgaon
        </h1>
        <div className="w-[40%] mt-2 h-1 bg-yellow-500"></div>
      </div>

      <div className="mt-5 w-full">
        <Swiper
          spaceBetween={16}
          modules={[Pagination]}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            798: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <SwiperSlide key={index}>
              <PropertyCard />
            </SwiperSlide>
          ))}

          <div className="pt-10">
            <div class="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>

      <Explore />
    </div>
  );
};

export default TopPropertyOfCity;
