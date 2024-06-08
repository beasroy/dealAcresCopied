'use client'

import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './slider.css'
import { AiOutlineRight } from 'react-icons/ai'
import GuidesCustomArrow from './GuidesCustomArrow';
import { useState } from 'react';
import GuideCard from '../blog/guides/GuideCard';
import { useEffect } from 'react';
const ManualCategorySlider = ({
    allGuides,
    tab,
    handleTabChange
}) => {

    


    
    const [guide, setGuide] = useState(allGuides[tab]);

    useEffect(() => {

        setGuide(allGuides[tab]);

    },[tab])

    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: <GuidesCustomArrow transparent icon={AiOutlineRight} isNext isManualSlider={true} />

    };


    return (
        <div>

            {/* Tabs */}
            <div className='px-4 border-b border-b-black'>

                <Slider {...settings}>
                    {
                    
                    allGuides.map((guide, index) => {
                        return (
                            <button
                                key={index}
                                value={index}
                                onClick={(e) => handleTabChange(e.target.value)}
                                className={`mr-4 
                        transition-border
                        font-bold text-lg
                        py-3
                        ${tab == index && 'border-b-4 border-b-blue-500'}
                        `}>
                                {guide.title}
                            </button>
                        )
                    })}

                </Slider>
            </div>


            {/* Tab Content  */}
          
        </div>
    )
}

export default ManualCategorySlider
