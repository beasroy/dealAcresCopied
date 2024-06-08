"use client"
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Card from "@/components/propertyListing/Card/Card";

const ReadMoreProperty = () => {
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
    <div className="py-5">
      <Swiper
        spaceBetween={46}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          798: {
            slidesPerView: 1.5,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
        }}
      >
        {newsData.map((newsItem) => (
          <SwiperSlide className="pb-12" key={newsItem.id}>
            <Card
              title={newsItem.title}
              text={newsItem.text}
              imageSrc={newsItem.imageSrc}
              date={newsItem.date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReadMoreProperty;
