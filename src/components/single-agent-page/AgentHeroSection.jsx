'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeadingBorder from './HeadingBorder'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoIosGlobe } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


import { CiLinkedin } from "react-icons/ci";
import { IoGlobeOutline } from "react-icons/io5";


const AgentHeroSection = ({
  img,
  name,
  contacts,
  address,
  languages,


}) => {

  const [mMode, setMMode] = useState('');
  const router = useRouter();

  const handleContactClick = (value) => {
    console.log(mMode)
    setMMode(value)
  }
  const handleGetIntoTouch = (value) => {
    router.push(`/meetings/schedule?mode=${mMode}`)
  }

  return (
    <div className='w-full md:w-[85%] mx-auto grid grid-cols-7 md:grid-cols-3 bg-[#334257] rounded-3xl shadow '>

      <div className='text-white col-span-4  md:col-span-2'>
        <div className='py-4 sm:py-8 px-2 md:px-6 flex flex-col md:justify-between h-full gap-2 md:gap-8'>
          <div className='text-left'>
            <h2 className='inline-flex w-2/5 flex-col text-xl md:text-4xl font-bold   '>
              {name}
              <div className='flex justify-start' >
                <HeadingBorder />

              </div>
            </h2>
            <p className='text-sm sm:text-base md:text-lg'>
              {contacts.map((contact, index) => (<span key={index}>{contact}</span>))}
            </p>
            <p className='font-bold text-xs xs:text-sm  sm:text-base md:text-lg'>
              {languages.map((language, index) => (<span key={index}>
                {language + ' '}</span>))}
            </p>

            <p className='md:text-lg md:pt-4 py-1 text-[10px] sm:text-xs sm:py-4'>
              {address}
            </p>
          </div>

          <div className='flex flex-col gap-2 md:gap-4 items-start '>
            <p className='text-xs xs:text-sm md:text-lg font-bold'>
              Meet with Sanya Bansal
            </p>
            <div className='flex flex-row gap-4 md:gap-8 accent-green-500 text-[10px] sm:text-xs md:text-base'>
              <div className='flex flex-row gap-2'>
                <input type="radio" id='inperson' name='mode' value={'inPerson'} onClick={() => handleContactClick('inPerson')} />
                <label htmlFor="inperson">
                  In Person
                </label>
              </div>
              <div className='accent-green-500 flex flex-row gap-2 '>
                <input type="radio" id='video' name='mode' value={'videoChat'}
                  onClick={() => handleContactClick('videoChat')} />
                <label htmlFor="video">
                  Video Call
                </label>
              </div>
            </div>
            <span className='w-auto py-1 xs:py-2 px-2 xs:px-4 bg-blue-600 text-white text-center font-bold text-xs xs:text-sm md:text-xl cursor-pointer sm:inline-flex ' onClick={() => handleGetIntoTouch()}>
              Get In Touch
            </span>
            <div>
              <p className='text-xs sm:text-sm md:text-lg flex gap-2 items-start sm:items-center  whitespace-nowrap font-bold flex-col sm:flex-row justify-start'>Follow Us -
                <ul className='inline-flex gap-2 items-center justify-center '>
                  <CiFacebook size={14}   className='bg-white text-black rounded-full md:w-5 md:h-5' />
                  <FaInstagram size={14} className='bg-white text-black rounded-full md:w-5 md:h-5' />
                  <FaYoutube size={14} className='bg-white text-black rounded-full md:w-5 md:h-5' />
                  <FaXTwitter  className='bg-white text-black rounded-full md:w-5 md:h-5' />
                  <CiLinkedin size={14} className='bg-white text-black rounded-full md:w-5 md:h-5' />
                  <IoGlobeOutline size={14} className='bg-white text-black rounded-full md:w-5 md:h-5' />

                </ul></p>
            </div>
          </div>
      
        </div>
       

      </div>

      <div className='md:order-2 sm:relative rounded-3xl h-[100%] w-full col-span-3 md:col-span-1 '>
        <Image src={`/about-us/${img}`} className='rounded-3xl h-full w-full  mx-auto sm:mx-0 sm:w-full sm:h-full  object-cover sm:absolute z-10' style={{boxShadow: '-7px 7px white, -7px 0px white'}} width={300} height={300} />
      </div>
    </div>
  )
}

export default AgentHeroSection
