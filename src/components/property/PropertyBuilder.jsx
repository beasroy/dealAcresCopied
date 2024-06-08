'use client'
import React, { useState } from 'react';
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import {propertyData }from './main';
import PropertyCard from './PropertyCard';

const PropertyBuilder = () => {
    const [selectedTab, setSelectedTab] = useState('ongoing');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    const filterPropertyData = () => {
        switch (selectedTab) {
            case 'upcoming':
                return propertyData.filter((property) => property.status === 'upcoming');
            case 'delivered':
                return propertyData.filter((property) => property.status === 'delivered');
            default:
                return propertyData.filter((property) => property.status === 'ongoing');
        }
    };

    const filteredPropertyData = filterPropertyData();

    return (
        <div className="md:pt-5">
        <h2 className="text-xl sm:text-3xl lg:text-2xl font-bold  pt-2 pb-2 md:pb-5">
                Projects by DLF Builders
            </h2>
            <div className="flex space-x-4 pb-4 md:pl-4 overflow-x-auto">
                <button
                    className={`rounded-full px-4 py-1 sm:py-2 text-sm sm:text-base border text-blue-500 cursor-pointer transition duration-300 ease-in-out ${selectedTab === 'ongoing' ? 'bg-blue-100' : ''}`}
                    onClick={() => handleTabClick('ongoing')}
                >
                    Ongoing
                </button>
                <button
                    className={`rounded-full px-4 py-1 sm:py-2 text-sm sm:text-base border text-blue-500 cursor-pointer transition duration-300 ease-in-out ${selectedTab === 'upcoming' ? 'bg-blue-100' : ''}`}
                    onClick={() => handleTabClick('upcoming')}
                >
                    Upcoming
                </button>
                <button
                    className={`rounded-full px-4 py-1 sm:py-2 text-sm sm:text-base border text-blue-500 cursor-pointer transition duration-300 ease-in-out ${selectedTab === 'delivered' ? 'bg-blue-100' : ''}`}
                    onClick={() => handleTabClick('delivered')}
                >
                    Delivered
                </button>
            </div>
            <Swiper
                spaceBetween={46}
                slidesPerView={1}
                modules={[Pagination]}
                pagination={{ clickable: true, horizontalClass: 'propertyBuilderDotsClass' }}
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
                {filteredPropertyData.map((property) => (
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
};

export default PropertyBuilder;
