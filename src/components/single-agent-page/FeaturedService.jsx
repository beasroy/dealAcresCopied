import React from 'react'
import housebg from '../../../public/single-agent/outdoor-house.webp'
import Image from 'next/image'
import Link from 'next/link'
const FeaturedService = () => {
    return (
        <div className={`w-screen relative after:absolute after:content-[''] after:bg-black after:opacity-[0.3] after:inset-0  flex justify-center items-center md:min-h-[450px]`}>
            <div className='w-full h-full absolute'>
                <Image src={housebg} className='w-full h-full object-cover' />

            </div >
            <div className={`bg-transparent text-white  relative top-[10%]  z-10  py-4 sm:py-8 px-4 max-w-screen-lg lg:mx-auto mx-4 sm:mx-8 my-4 sm:my-0 after:content-[''] after:absolute after:bg-black after:inset-0 after:-z-10 after:opacity-[0.7] shadow-xl rounded text-base sm:text-lg  `}>

                <h3 className='font-bold text-lg sm:text-xl pb-2'>
                    The highest level of service from Featured Agents
                </h3>
                <p className='text-sm sm:text-base'>
                    Deal Acres Premier agents are local luxury experts with years of experience buying and selling high-end homes. Only our best agents qualify to become Deal Acres Premiem agents.

                </p>
                <br/>
                <p className='text-sm sm:text-base'>

                    When you're ready to buy, your agent will know what it takes to write a winning offer for the most highly sought-after homes. And when it's time to sell, they will know how to price, prepare, and market your home, so it attracts qualified buyers and sells for more.
                </p>

                <Link className='bg-blue-600 text-white font-bold text-base md:text-xl py-2 px-4 my-2 inline-flex' href="#"> Learn More</Link>

            </div>
        </div>
    )
}

export default FeaturedService
