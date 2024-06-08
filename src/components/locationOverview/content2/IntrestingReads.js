"use client"
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Card from "@/components/propertyListing/Card/Card";

const IntrestingReading = () => {
  const newsData = [
    {
      id: 1,
      title: "Lorem Ipsum News",
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
      title: "Lorem Ipsum News ",
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
    <div className="space-y-8 py-5">
      <Swiper
        spaceBetween={36}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          798: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1100: {
            slidesPerView: 2.7,
            spaceBetween: 20,
          },
          1300:{
            slidesPerView: 3.7,
            spaceBetween: 5,
          }
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

export default IntrestingReading;
