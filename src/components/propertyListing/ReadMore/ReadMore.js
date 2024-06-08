"use client"
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import Card from "@/components/propertyListing/Card/Card";
import ArticleCard from "@/components/faq/ArticleCard";
import { IoIosArrowRoundForward } from "react-icons/io";

import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useRef, useState } from "react";
import './swiper-custom.css'
// import ArticleCard from ";

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

const ReadMore = ({
  isFullScreen, header, subheader, hasCustomHeader
}) => {

  const sliderRef = useRef();
  const [curSlide, setCurSlide] = useState(1);
  console.log(curSlide)
  return (
    <div className={`${isFullScreen ? '' : 'px-4 sm:px-8 md:px-16 lg:px-32 md:space-y-8 md:mt-10 py-2 md:py-5'} relative`}>
    {!hasCustomHeader   && <h2 className="font-bold text-[18px] py-4 flex justify-between gap-2 items-center">
        {header ? header : 'Interesting Readings'}

        {subheader && <span className="text-[10px] leading-normal sm:text-sm text-blue-500 font-bold max-w-[40%]">{subheader}</span>}
      </h2>}


      <Swiper
        
        onNavigationNext={() => setCurSlide(prev => prev + 1)}
        onNavigationPrev={() => setCurSlide(prev => prev - 1)}
        
        wrapperClass="pb-1 sm:pb-2 md:pb-8 relative "
        spaceBetween={46}
        slidesPerView={1}
        modules={[Pagination, Navigation]}
   
        pagination={{ clickable: true, horizontalClass: 'rentSwiperDots' }}
        navigation={{
          prevEl: '.swiper-prevArrow',
          nextEl: '.swiper-nextArrow',
          disabledClass: '.swiper-disabledArrow'
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
            slidesPerView: 4,
            spaceBetween: 15,
          },
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

      <div className="absolute inset-0 hidden md:block">
         <div className={`swiper-nextArrow ${curSlide === newsData.length && 'swiper-disabledArrow'} bg-blue-500 text-white w-[36px] h-[36px]  hidden md:grid items-center justify-center rounded-[100%]  top-[50%] mb-8 -translate-x-1/2 absolute z-10 cursor-pointer hover:bg-blue-500/70 transition-all ${isFullScreen ? 'right-[-2rem]' : 'right-[2rem] lg:right-[6rem] '}`}

         >
          <FaArrowRightLong size={20}/>

        </div>
       
      </div>
    </div>
  );
};

export default ReadMore;
