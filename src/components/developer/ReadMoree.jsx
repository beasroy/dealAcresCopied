"use client"
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import ArticleCard from "@/components/faq/ArticleCard";


import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";


const ReadMoree =() => {
  const newsData = [
    {
      id: 1,
      title: "Lorem Ipsum News Magma",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit justo. Duis ut vehicula dolor.",
      imageSrc: "https://via.placeholder.com/300x200",
      date: "September 1, 2023",
    },
    {
      id: 2,
      title: "Aenean Pulvinar Magna",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit justo. Duis ut vehicula dolor.",
      imageSrc: "https://via.placeholder.com/300x200",
      date: "August 28, 2023",
    },
    {
      id: 3,
      title: "Sed Tincidunt Euismod",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit justo. Duis ut vehicula dolor.",
      imageSrc: "https://via.placeholder.com/300x200",
      date: "August 25, 2023",
    },
    {
      id: 4,
      title: "Lorem Ipsum News Dollar",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit justo. Duis ut vehicula dolor.",
      imageSrc: "https://via.placeholder.com/300x200",
      date: "September 1, 2023",
    },
    {
      id: 5,
      title: "Aenean Pulvinar Magna",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit justo. Duis ut vehicula dolor.",
      imageSrc: "https://via.placeholder.com/300x200",
      date: "August 28, 2023",
    },
    {
      id: 6,
      title: "Sed Tincidunt Euismod",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit justo. Duis ut vehicula dolor.",
      imageSrc: "https://via.placeholder.com/300x200",
      date: "August 25, 2023",
    },
  ];

  return (
    <div className="relative" >
      <h2 className="text-2xl sm:text-4xl lg:text-3xl font-bold py-4">
         Interesting Readings
      </h2>
      <Swiper
        wrapperClass="pb-1 sm:pb-2 md:pb-4 relative "
        spaceBetween={46}
        slidesPerView={1}
        modules={[Pagination, Navigation]}

        pagination={{ clickable: true, horizontalClass: 'rentSwiperDots' }}
        navigation={{
          prevEl: '.prevArrow',
          nextEl: '.nextArrow',
          disabledClass: '.disabledArrow'
        }}
        breakpoints={{

          330: {
            slidesPerView: 1.5,
            spaceBetween: 10,

          },
          540: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 10,
            navigation: false
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 3,
          },
          1250: {
            slidesPerView: 3.5,
            spaceBetween: 3,
          },
          1380:{
            slidesPerView: 4,
            spaceBetween: 4,
          }
        }}
      >
        {newsData.map((newsItem) => (
          <SwiperSlide className="z-[5]" key={newsItem.id}>
            <ArticleCard
              title={newsItem.title}
              date={newsItem.date}
            />
          </SwiperSlide>
        ))}


       
      </Swiper>

      <div className="absolute top-[50%] left-[100%]">
         <div className='nextArrow bg-blue-500 text-white w-[36px] h-[36px]  hidden md:grid items-center justify-center rounded-[100%]   -translate-x-1/2 absolute z-10 cursor-pointer hover:bg-blue-500/70 transition-all '>
          <FaArrowRightLong size={20}/>

        </div>
       
      </div>
    </div>
  );
};

export default ReadMoree;
