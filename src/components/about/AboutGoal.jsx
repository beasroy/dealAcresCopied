import React from 'react'
import buildingsBg from '../../../public/about-us/buildings.webp'
import Image from 'next/image'
const AboutGoal = () => {
    return (
        <div className={`after:content-[''] text-white   isolation-auto  relative 
    after:absolute after:isolate after:bg-black after:opacity-50 after:inset-0 after:-z-10`}>
            
            <div className='w-full h-full absolute -z-10  '>
                <Image src={buildingsBg} alt={'Buildings Image'}
                className="object-cover" 
                fill/>
            </div>
            <div className='px-8 sm:px-16 py-8 opacity-100 max-w-screen-xl mx-auto text-justify'>
            <h3 className='font-bold text-xl sm:text-2xl md:text-3xl'>
            Why We Started
            </h3>
            <p className='font-medium text-sm sm:text-base md:text-lg py-4'>
            To give the highest level of integrity, creativity, and teamwork to our clients in order to promote more deals. Our Purpose is to position Deal Acres at the top of the real estate business by providing tangible services to our clients and using a creative approach. Furthermore, we work hard to assure long-term viability through ongoing effort and innovation. By providing the finest options in luxury building floors, independent builder floors, residential apartments, and plots, we look forward to extending our client relationships, forming new ones, and exceeding expectations. Our Vision is to be professional in the field of Real Estate Consultancy offering complete residential solutions to the client.

            </p>
            </div>
        </div>
    )
}

export default AboutGoal
