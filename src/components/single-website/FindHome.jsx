import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import {CiLocationOn} from 'react-icons/ci'
import {IoIosHome} from 'react-icons/io'
import {RiHomeSmile2Fill} from 'react-icons/ri'
import houseSecure from '../../../public/single-website/house-secure.png'
import { BsDiamondFill } from 'react-icons/bs'

const FindHome = ({
    img
}) => {
    return (
        <div className={`max-w-screen min-w-screen relative  flex justify-center items-start md:items-end md:min-h-[400px] !overflow-x-hidden`}>
         
                <Image src={img} className='max-w-full min-w-full h-full object-cover  absolute' alt='House / Interior Image.' />

        
            <div className={`bg-transparent text-white text-lg relative top-[10%]  z-10  after:md:rounded-2xl    py-4 sm:py-12 px-8  max-w-screen-lg w-[80%] mx-auto md:mx-8 my-0 md:my-4 sm:my-0 after:content-[''] after:absolute after:bg-black after:inset-0 after:-z-10 after:opacity-[0.7] shadow-xl rounded 
            flex text-center gap-4 flex-col  items-center justify-center
            `}>

                <h3 className='flex justify-center  font-bold text-xl xs:text-2xl md:text-4xl pb-2 text-center border-b-2 border-b-white'>
                    Find Your Perfect Home
                </h3>
                <p className='text-sm md:text-base'>
                On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.

                </p>
             
                

                <Link className='bg-transparent text-white border-2 border-white font-medium text-base md:text-xl py-2 md:py-4 px-2 md:px-4 my-2 inline-flex' href="#"> View More</Link>

            </div>

           
        </div>
    )
}

export default FindHome
