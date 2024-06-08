import React, { Component } from "react";
import Slider from "react-slick";
import './styles.css'

import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
const BlogCustomArrow = ({
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
            <span className={`  text-black w-[20px] bg-white/50 border border-black h-[20px] rounded-full inline-flex items-center justify-center   absolute
            transition-all hover:bg-black hover:text-white
            hover:shadow-2xl
            hover:scale-110  font-bold 
            top-[40%] -translate-y-[40%] ${isNext ? 'right-8' : '-right-12'} z-20  `}>

                <Icon size={15}/>
            </span>   
        
         </div>
    );
}

export default BlogCustomArrow


