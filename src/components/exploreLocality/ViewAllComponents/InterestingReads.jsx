import React from "react";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import BlogCard from "./BlogCard";

const fakeBlog = [
  {
    imageUrl: "https://via.placeholder.com/400x300",
    date: "October 10, 2023",
    title: "The Art of Digital Painting",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisl eu eros consectetur fringilla.",
  },
  {
    imageUrl: "https://via.placeholder.com/400x300",
    date: "September 25, 2023",
    title: "Exploring the Hidden Treasures of the Amazon Rainforest",
    content:
      "Vivamus efficitur eget massa ac eleifend. Donec tincidunt libero ac nisi malesuada, sit amet ullamcorper augue blandit.",
  },
  {
    imageUrl: "https://via.placeholder.com/400x300",
    date: "September 15, 2023",
    title: "A Beginner's Guide to Astrophotography",
    content:
      "Praesent quis lectus a purus laoreet posuere eget sed odio. Sed ac ultricies libero, in tincidunt purus.",
  },

  {
    imageUrl: "https://via.placeholder.com/400x300",
    date: "September 15, 2023",
    title: "A Beginner's Guide to Astrophotography",
    content:
      "Praesent quis lectus a purus laoreet posuere eget sed odio. Sed ac ultricies libero, in tincidunt purus.",
  },
];

const InterestingReads = () => {
  return (
    <div className="mt-10 mb-8 max-sm:px-[1rem]">
      <div className="flex flex-col items-star justify-start w-fit">
        <p className="text-3xl font-bold max-sm:text-lg">Interesting Reads</p>
        <div className="h-1 w-[50%] bg-yellow-500 mt-1"></div>
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
                  content={blog.content}
                />
              </SwiperSlide>
            );
          })}
          <div className="pt-8">
            <div class="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default InterestingReads;
