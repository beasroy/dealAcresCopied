'use client'

import React from 'react'
import { faqData } from '@/app/invest/CategoryFaqData'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './slider.css'

import { useState } from 'react'
import { light } from '@mui/material/styles/createPalette'
import FaqListItem from './FaqListItem'
import {TbMathGreater} from 'react-icons/tb'
import { useRef } from 'react'

import CustomArrow from './CustomArrow';

const CategoryFaq2 = () => {

    const [tab, setTab] = useState(0);

    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: <CustomArrow isNext/>,
        prevArrow: <CustomArrow/>
    };
    

   
    return (


        <div className='px-4'>
            <div className='' >
                
                <Slider {...settings}>

                {
                    faqData.map((item, index) => {

                        console.log(index , tab);
                        return (

                            
                            <button onClick={(e) => setTab(Number(e.target.value))} value={index} className={` ${index == tab ? 'bg-blue-600' : 'bg-blue-100'} text-center flex items-center justify-center mx-4 py-4 shadow-md rounded min-w-[150px]`} key={index}  >
                                {item.category}
                            </button>
                        )
                    })
                }

                </Slider>
           
                
            </div>

            <div className='py-4'>

                {
                    faqData.map((item, index) => {

                        console.log(item, index)
                        return index === tab ? (
                            item.faq.map((q, i) => <FaqListItem key={i} question={q} />)
                        ) : ""
                    })
                }

            </div>
        </div>
    )
}

export default CategoryFaq2
