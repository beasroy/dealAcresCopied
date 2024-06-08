'use client'

import React from 'react'
import { Pagination } from "swiper/modules";
import { similarProject } from './main';
import PropertyCard from './PropertyCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import './projectswiper.css'
const SimilarProject = () => {

    return (
        <div>
            <h2 className="text-xl sm:text-3xl lg:text-2xl font-bold  pb-5 ">
                Similar Project
            </h2>
           
            <Swiper
                spaceBetween={46}
                slidesPerView={1}
                modules={[Pagination]}
                pagination={{ clickable: true, horizontalClass: 'similarDotsClass' }}

                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    400: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    560: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    

                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 25,
                    },
                }}
            >
                {similarProject.map((property) => (
                    <SwiperSlide className="md:pb-12" key={property.id}>
                        <PropertyCard
                            title={property.title}
                            description={property.description}
                            price={property.price}
                            imageSrc={property.imageSrc}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );

}

export default SimilarProject
