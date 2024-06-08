"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import Card from "./Card";
import styles from "./imgslider.module.css";
import { FreeMode, Navigation } from "swiper/modules";

const ImgSlider = () => {
  const ManualData = [
    {
      id: 1,
      imageSrc: "/Agent/housing.webp",
    },
    {
      id: 2,
      imageSrc: "/Agent/housing2.jpg",
    },
    {
      id: 3,
      imageSrc: "/Agent/housing3.jpg",
    },
    {
      id: 4,
      imageSrc: "/Agent/housing4.jpg",
    },
  ];

  return (
    <div>
      <div className={styles.slider}>
        <Swiper

          spaceBetween={46}
          slidesPerView={"auto"}
          loop={true}
          freeMode={true}
          modules={[FreeMode, Navigation]}
          navigation={true}
        >
          {ManualData.map((ManualItem) => (
            <SwiperSlide key={ManualItem.id} className="max-w-fit">
              <Card imageSrc={ManualItem.imageSrc} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImgSlider;
