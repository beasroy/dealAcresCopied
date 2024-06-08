import React, { Component } from "react";
import Slider from "react-slick";

import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
const CustomArrow = ({
    className,
    style,
    onClick,
    isNext
}) => {

    return (
        <div
            className={`${className} relative category-next`}
            style={{ ...style }}
            onClick={onClick}
        >
            <span className={`  text-black w-[30px] bg-white h-[30px] rounded-full inline-flex items-center justify-center border-2 border-blue-300 absolute
            top-1/2 -translate-y-1/2 ${isNext ? '-right-[1.5rem]' : 'left-4'}`}>

                {isNext ? <FaGreaterThan size={10} /> : <FaLessThan size={10} />}
            </span>    </div>
    );
}

export default CustomArrow


