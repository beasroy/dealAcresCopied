import React, { Component } from "react";
import Slider from "react-slick";

import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
const GuidesCustomArrow = ({
    className,
    style,
    onClick,
    isNext,
    icon: Icon,
    transparent,
    isManualSlider
}) => {

    return (
        <div
            className={`${className} relative category-next
             
            `}
            style={{ ...style }}
            onClick={onClick}
        >
            <span className={`  text-black w-[45px] ${!transparent && 'bg-blue-200'} h-[45px] rounded-full inline-flex items-center justify-center   absolute
            transition-all hover:bg-blue-100
            hover:shadow-2xl
            hover:scale-110
            top-1/2 -translate-y-1/2 ${isNext ? 'right-8' : '-left-1'} ${transparent && 'right-0'} ${isManualSlider && '!right-0'}`}>

                <Icon size={30}/>
            </span>   
        
         </div>
    );
}

export default GuidesCustomArrow


