import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FeaturesStrip from './FeaturesStrip'

const MobileFindHome = ({
    img
}) => {
    return (
        <div className={`max-w-screen min-w-screen relative  flex flex-col justify-end items-end min-h-unset !overflow-x-hidden`}>

            <Image src={img} className='max-w-full min-w-full h-full object-cover  absolute' alt='House / Interior Image.' />


            <div className={`bg-transparent text-white text-lg relative top-[10%]  z-10  after:rounded-t-2xl    py-4 md:py-12 px-8  max-w-screen-lg lg:mx-auto w-[70%] mx-auto mt-8 after:content-[''] after:absolute after:bg-black after:inset-0 after:-z-10 after:opacity-[0.7] shadow-xl rounded 
            flex text-center gap-4 flex-col  items-center justify-center
            `}>

                <h3 className='flex justify-center  font-bold text-lg xs:text-xl md:text-2xl pb-2 text-center border-b-2 border-b-white'>
                    Find Your Perfect Home
                </h3>
                <p className='text-xs sm:text-sm md:text-base'>
                On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.

                </p>
             
                

                <Link className='bg-transparent text-white border-2 border-white font-medium text-sm sm:text-base md:text-xl py-2 md:py-4 px-2 md:px-4 my-2 inline-flex' href="#"> View More</Link>

            </div>

            <FeaturesStrip/>


        </div>
    )
}

export default MobileFindHome
