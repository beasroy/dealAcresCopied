'use client'

import React from 'react'

import styles from './about.module.css'
import founderBg from '../../../public/about-us/founder.webp'
import cofounderBg from '../../../public/about-us/team-member-1.webp'
import { useState } from 'react'
import FounderTab from './FounderTab'
const Leaders = () => {

  const [tab, setTab] = useState('founder');
  return (
    <div>

      {/* tabs */}

      <div className='flex justify-center py-4 font-bold text-xs sm:text-base'>
        <span className='border text-center border-black py-2 px-2 cursor-pointer transition-all hover:bg-blue-500 hover:text-white' onClick={() => setTab('founder')}>
          Meet Our Founder
        </span>
        <span className='border text-center border-black py-2 px-2 cursor-pointer border-l-0 transition-all hover:bg-blue-500 hover:text-white' onClick={() => setTab('cofounder')}>
          Meet Our Co-Founder
        </span>
      </div>

      {/* Leader Tab */}
      <div>
        { tab === 'founder' &&

        <div className={`transition-all
        -translate-x-[100%]
         ${tab === 'founder'? styles.translateIn : '' } `}>

<FounderTab
        img={founderBg}
        altText={'Founder Pic'}
        content={'To give the highest level of integrity, creativity, and teamwork to our clients in order to promote more deals. Our Purpose is to position Deal Acres at the top of the real estate business by providing tangible services to our clients and using a creative approach. Furthermore, we work hard to assure long-term viability through ongoing effort and innovation. By providing the finest options in luxury building floors, independent builder floors, residential apartments, and plots, we look forward to extending our client relationships, forming new ones, and exceeding expectations. Our Vision is to be professional in the field of Real Estate Consultancy offering complete residential solutions to the client. '}
        />
        </div>

   }
        {
        tab === 'cofounder' &&
        
        <div className={`transition-all
        translate-x-[100%]
       
         ${tab === 'cofounder'? styles.translateIn : '' } `}>
        <FounderTab
        img={cofounderBg}
        altText={'Co-Founder Pic'}
        content={'To give the highest level of integrity, creativity, and teamwork to our clients in order to promote more deals. Our Purpose is to position Deal Acres at the top of the real estate business by providing tangible services to our clients and using a creative approach. Furthermore, we work hard to assure long-term viability through ongoing effort and innovation. By providing the finest options in luxury building floors, independent builder floors, residential apartments, and plots, we look forward to extending our client relationships, forming new ones, and exceeding expectations. Our Vision is to be professional in the field of Real Estate Consultancy offering complete residential solutions to the client. '}
        />
        </div>
        }


      </div>

      
    </div>
  )
}

export default Leaders
