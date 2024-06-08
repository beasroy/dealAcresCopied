import React from 'react'
import housebg from '../../../public/single-website/living-area.jpg'
import Image from 'next/image'
import Link from 'next/link'
const HeroSection = () => {
    return (
        <div className={`max-w-screen min-w-screen flex justify-end items-center pr-[2.5rem]  h-[250px] md:h-[400px] relative  `}>
            <div className='w-full h-full absolute inset-0'>
                <Image src={housebg} className='absolute w-full h-full object-cover ' alt={"House Image"} />

            </div>
            <div className={`
            z-10 text-white font-bold text-3xl md:text-4xl
            relative bg-transparent   p-4 
            pb-[3rem] md:pt-[3rem] 
            after:absolute after:inset-0 after:bg-black 
             after:opacity-[0.7] after:-z-10 text-center after:rounded-[2rem] md:after:rounded-[1.5rem] after:shadow
            flex items-start max-w-[270px] md:max-w-[350px]
            `}>

                <h3 className='font-bold md:pb-2 md:px-2 border-b border-b-gray-300 rounded-md md:rounded-none'>
                    Best Property Dealer in Hisar
                </h3>
               

            </div>
        </div>
    )
}

export default HeroSection
