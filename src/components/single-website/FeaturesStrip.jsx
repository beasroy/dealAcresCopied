import Image from 'next/image'
import React from 'react'
import { IoIosHome } from 'react-icons/io'
import { BsDiamondFill } from 'react-icons/bs'
import houseSecure from '../../../public/single-website/house-secure.png'
import { FaLocationDot, FaLocationPin } from 'react-icons/fa6'

const Feature = ({ logo, title }) => {
    return (
        <div className='flex flex-col gap-4  items-center w-[40px] '>
            <span className="rounded-[80px] flex justify-center items-center p-4 border-2 border-white w-[40px] h-[40px] ">

                {logo}
            </span>
            <span className='text-center text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-nowrap'>
                {title}
            </span>


        </div>
    )
}

const FeaturesStrip = () => {
    return (
        <div className='bg-[#1A4789] z-10 w-[90%] mx-auto md:w-[100%] md:mx-0 rounded-[1.5rem] md:rounded-none'>
            <div className="max-w-screen-lg mx-auto text-white font-bold text-xl md:text-2xl flex justify-around py-4  ">

                <Feature logo={<BsDiamondFill size={20} className="min-w-[20px] min-h-[20px]"  />} title={"Luxury House"} />
                <Feature logo={<FaLocationDot size={20} className="min-w-[20px] min-h-[20px]"  />} title={"Best Location"} />
                <Feature logo={<IoIosHome size={20} className="min-w-[20px] min-h-[20px]" />} title={"Good Price"} />
                <div className='flex flex-col gap-4  items-center w-[40px]'>
                    <span className="rounded-[80px] flex justify-center items-center p-4 border-2 border-white max-w-[80px] w-[40px] h-[40px]  ">

                       <Image src={houseSecure} width={20} height={20} className='min-w-[20px] h-[20px]'/>
                    </span>
                    <span className='text-center text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-nowrap'>
                        Home Caring
                    </span>


                </div>






            </div>

        </div>
    )
}

export default FeaturesStrip
