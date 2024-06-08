'use client'

import React from 'react'

import styles from './about.module.css'
import { useState } from 'react'
import FounderTab from './FounderTab'
const AboutEthics = () => {

  const [tab, setTab] = useState('mission');
  return (
    <div className='bg-[#EFF5FE] px-4 py-2 sm:px-16 md:px-24 sm:py-8 md:py-12'>

      {/* tabs */}

      <div className='flex  flex-nowrap  py-4 font-bold max-[400px]:text-xs text-sm sm:text-base min-w-full text-center mx-auto  sm:gap-0 justify-center sm:justify-normal sm:mb-2 '>
        <span className='border bg-white border-black py-2 px-6 sm:px-12  max-w-full  cursor-pointer flex-[0_0_33%] transition-all hover:bg-blue-500 hover:text-white' onClick={() => setTab('mission')}>
          Mission
        </span>
        <span className='border bg-white flex-[0_0_33%] border-black py-2 px-6 sm:px-12  max-w-full  cursor-pointer sm:border-l-0 transition-all hover:bg-blue-500 hover:text-white' onClick={() => setTab('vision')}>
          Vision
        </span>
        <span className='border bg-white  flex-[0_0_34%] border-black py-2 px-6 sm:px-12  max-w-full  cursor-pointer sm:border-l-0 transition-all hover:bg-blue-500 hover:text-white' onClick={() => setTab('values')}>
          Values
        </span>
      </div>

      {/* Leader Tab */}
      <div>
        { tab === 'mission' &&

        <div className={`transition-all
        opacity-0 
         ${tab === 'mission'? styles.fadeIn : '' } `}>

<FounderTab
       
        content={'Our mission at Deal Acres, the leading real estate online marketplace, is to empower individuals and businesses by providing them with innovative and user-friendly tools to make informed and confident real estate decisions. We are committed to simplifying the property buying and selling process, ensuring transparency, and delivering exceptional customer experiences, ultimately reshaping the way real estate transactions are conducted.'}
        />
        </div>

   }
        {
        tab === 'vision' &&
        
        <div className={`transition-all
        opacity-0 
       
         ${tab === 'vision'? styles.fadeIn : '' } `}>
        <FounderTab
        
        content={'Our vision at Deal Acres is to revolutionize the real estate industry by becoming the go-to platform for all property-related needs. We aspire to connect people with their dream properties and to foster a community where trust, innovation, and technology converge. Through continuous growth, expansion, and a deep commitment to excellence, we aim to set new standards in the digital real estate marketplace.'}
        />
        </div>
        }
        {
        tab === 'values' &&
        
        <div className={`transition-all
    opacity-0 
       
         ${tab === 'values'? styles.fadeIn : '' } `}>
        <FounderTab
        
        content={'At Deal Acres, our core values are the driving force behind our success. Integrity and transparency are the foundation of our business, ensuring honesty and accountability in all our dealings. We prioritize customer-centricity, always putting our users needs first and striving to exceed their expectations. Innovation is at the heart of everything we do, as we continuously adapt and evolve to meet the changing landscape of the real estate market. Finally, teamwork and collaboration are our guiding principles, fostering a culture of inclusivity and diversity that enables us to achieve our collective goals.'}
        />
        </div>
        }


      </div>

      
    </div>
  )
}

export default AboutEthics
