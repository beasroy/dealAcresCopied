"use client"
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Card from "./Card";

const ReadMore = () => {
  const ManualData = [
    {
      id: 1,
      title: "Lorem Ipsum News Magma",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit justo. Duis ut vehicula dolor.",
      imageSrc: "https://via.placeholder.com/200x200",
      date: "September 1, 2023",
    },
    {
      id: 2,
      title: "Aenean Pulvinar Magna",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit justo. Duis ut vehicula dolor.",
      imageSrc: "https://via.placeholder.com/200x200",
      date: "August 28, 2023",
    },
    {
      id: 3,
      title: "Sed Tincidunt Euismod",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit justo. Duis ut vehicula dolor.",
      imageSrc: "https://via.placeholder.com/200x200",
      date: "August 25, 2023",
    },
    {
      id: 4,
      title: "Lorem Ipsum News Dollar",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit justo. Duis ut vehicula dolor.",
      imageSrc: "https://via.placeholder.com/200x200",
      date: "September 1, 2023",
    },
    {
      id: 5,
      title: "Aenean Pulvinar Magna",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit justo. Duis ut vehicula dolor.",
      imageSrc: "https://via.placeholder.com/200x200",
      date: "August 28, 2023",
    },
    {
      id: 6,
      title: "Sed Tincidunt Euismod",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit justo. Duis ut vehicula dolor.",
      imageSrc: "https://via.placeholder.com/200x200",
      date: "August 25, 2023",
    },
  ];

  return (
    <div className="h-[100%] min-h-[100%]">
      <Swiper

        spaceBetween={46}
        
        slidesPerView={1}
        modules={[Pagination]}
        wrapperClass="md:min-h-[400px] flex items-center h-[250px] max-h-[250px]"
        pagination={{ clickable: true, totalClass: '-b-4', currentClass: '-b-8', horizontalClass: 'rentSwiperDots' }}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 10,
            
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          798: {
            slidesPerView: 2.5,
            spaceBetween: 10,
            
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {ManualData.map((ManualItem) => (
          <SwiperSlide className="min-w-[210px] md:min-w-[250px] !h-[250px] min-h-[250px]" key={ManualItem.id}>
            <Card
              title={ManualItem.title}
              text={ManualItem.text}
              imageSrc={ManualItem.imageSrc}
              date={ManualItem.date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReadMore;
