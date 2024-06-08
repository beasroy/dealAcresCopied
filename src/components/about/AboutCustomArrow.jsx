import React, { Component } from "react";
import Slider from "react-slick";

import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
const AboutCustomArrow = ({
    className,
    style,
    onClick,
    isNext,
    icon: Icon,
    transparent
}) => {

    return (
        <div
            className={`${className} relative category-next
             
            `}
            style={{ ...style }}
            onClick={onClick}
        >
            <span className={`  text-black w-[45px] bg-[#FFFFFF] h-[45px]  inline-flex items-center justify-center   absolute
            transition-all hover:bg-blue-100
            hover:shadow-2xl
            hover:scale-110
            '} `}>

                <Icon size={30}/>
            </span>   
        
         </div>
    );
}

export default AboutCustomArrow


