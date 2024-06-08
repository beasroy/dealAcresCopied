'use client'

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import './styles.css'

import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import Image from 'next/image';
import BlogCustomArrow from './BlogCustomArrow';



const FeatureSlider = ({
    img,
    title
}) => {


    const settings = {
        className: "govind",
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <BlogCustomArrow isNext icon={AiOutlineRight} transparent />,
        prevArrow: <BlogCustomArrow  icon={AiOutlineLeft} transparent />
       

    };
    return (
        <div className='h-full max-h-full border-1 shadow-lg transition-all     '>
            <Slider {...settings}>
                {
                    [...Array(4)].map((_, index) => (
                        <div key={index} className='h-full max-h-full !flex flex-col '>
                            <Image className=' 
                            w-full h-full
                            object-cover' src={img} alt={"Slider Image"} width={500} height={200}/>

                            <div className='
                        
                            w-full
                            text-[10px]
                            xs:text-sm
                            p-0 text-center
                            sm:text-base lg:text-lg font-bold   sm:py-4 sm:px-2 shadow-lg border border-t-0 border-gray-400'>
                                {title}
                            </div>
                        </div>
                    ))
                }
            </Slider>

        </div>
    )
}

export default FeatureSlider
