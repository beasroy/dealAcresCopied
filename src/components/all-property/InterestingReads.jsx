import React from "react";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import BlogCard from "@/components/areaCalculator/BlogCard";

const fakeBlog = [
  {
    imageUrl: "https://via.placeholder.com/400x300",
    date: "October 10, 2023",
    title: "The Art of Digital Painting",
  },
  {
    imageUrl: "https://via.placeholder.com/400x300",
    date: "September 25, 2023",
    title: "Exploring the Hidden Treasures of the Amazon Rainforest",
  },
  {
    imageUrl: "https://via.placeholder.com/400x300",
    date: "September 15, 2023",
    title: "A Beginner's Guide to Astrophotography",
  },
  {
    imageUrl: "https://via.placeholder.com/400x300",
    date: "August 28, 2023",
    title: "Cooking with Exotic Spices: A Culinary Adventure",
  },
];

const InterestingReads = () => {
  return (
    <div className="mt-10 px-[5rem] mb-10 max-sm:px-[1rem]">
      <div className="flex flex-row items-center justify-between">
        <p className="text-2xl font-bold max-sm:text-sm">Interesting Reads</p>
        <p className="text-lg font-bold text-blue-500 max-sm:text-xs">
          Read news, guides and article
        </p>
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
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {fakeBlog.map((blog, index) => {
            return (
              <SwiperSlide key={index}>
                <BlogCard
                  key={index}
                  imageUrl={blog.imageUrl}
                  title={blog.title}
                  date={blog.date}
                />
              </SwiperSlide>
            );
          })}
          <div className="pt-10">
            <div class="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default InterestingReads;
