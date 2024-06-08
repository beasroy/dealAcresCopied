'use client'

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'
import './aboutSlider.css'

import MemberCard from './MemberCard';
import member1 from '../../../public/about-us/team-member-1.webp'
import member2 from '../../../public/about-us/team-member-2.webp'
import member3 from '../../../public/about-us/team-member-3.webp'
import AboutCustomArrow from './AboutCustomArrow';

import styles from './about.module.css'

const TeamSlider = () => {



    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: <AboutCustomArrow icon={BsArrowRight} />,
        prevArrow: <AboutCustomArrow icon={BsArrowLeft} />,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                rows:1,
                arrows:false,
                dots: true,
                variableWidth: false,
                infinite: true,

              }
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows:1,
                arrows:false,
                dots: true,
                variableWidth: false,
                infinite: true,

              }
            },
            
          ],

    };
  return (
    <div className={`relative ${styles.sliderContainer} max-h-[600px] sm:max-h-[900px] `}>

      
        
       <div className={`relative max-w-[900px] mx-auto py-[4rem] sm:py-[8rem]  max-h-[900px] `} >

       <h3 className='max-w-screen-xl mx-auto z-30 px-8 absolute font-bold text-2xl md:text-3xl top-[3%] sm:top-[5%] lg:top-[10%] lg:left-[-5%] '>
            Our Team
        </h3>
      <Slider {...settings} className="flex " >
        <div className='min-w-[300px]  !flex md:inline-block justify-center'>
        <MemberCard img={member1}/>

        </div>
        <div className='min-w-[300px] !flex md:inline-block justify-center'>
        <MemberCard img={member2}/>

        </div>
        <div className='min-w-[300px] !flex md:inline-block justify-center'>
        <MemberCard img={member3}/>

        </div>
        <div className='min-w-[300px] !flex md:inline-block justify-center'>
        <MemberCard img={member1}/>

        </div>
        <div className='min-w-[300px] !flex md:inline-block justify-center'>
        <MemberCard img={member2}/>

        </div>
        <div className='min-w-[300px] !flex md:inline-block justify-center'>
        <MemberCard img={member3}/>

        </div>
        <div className='min-w-[300px] !flex md:inline-block justify-center'>
        <MemberCard img={member1}/>

        </div>
        <div className='min-w-[300px] !flex md:inline-block justify-center'>
        <MemberCard img={member2}/>

        </div>

        
        
      </Slider>

       </div>
    </div>
  )
}

export default TeamSlider
