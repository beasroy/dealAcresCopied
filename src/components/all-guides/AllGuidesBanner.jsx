import React from 'react'
import skyscrappers from '../../../public/all-guides/skyscrappers.webp'
import bookBg from '../../../public/all-guides/book.svg'
import bannerBg from '../../../public/all-guides/banner.png'
import Image from 'next/image'
import styles from './allguides.module.css'

const AllGuidesBanner = () => {
  return (
    <div className={`md:max-h-full min-h-[200px] flex flex-row gap-4 justify-around items-center md:pt-8 bg-[#bdd5ff]`}>
      <div className={` ${styles.bannerText} w-[60%] md:w-[34%]  font-bold text-white  z-10 flex justify-end max-h-[40%] md:h-full py-4 `}>
        <div className='text-center md:text-left md:justify-self-end'>
        <span className='text-3xl xs:text-4xl md:text-5xl text-right'>
          Real Estate
        </span>
        <br />
        <span className='text-4xl xs:text-5xl md:text-6xl text-right'>
          Manuals
        </span>
        </div>
      </div>
      <div  className={`w-[40%] md:w-1/2 max-h-[30%] md:h-full md:hidden    `}>
        
        <Image src={bookBg} className=''  />

      </div>

      <div  className={`md:w-[33%] max-h-[30%] md:h-full hidden md:block     `}>
        
        <Image src={bannerBg} className=''  />

      </div>

      <div className='md:w-[34%]  md:self-end max-h-[30%] md:h-full hidden md:block '>
        <Image src={skyscrappers} alt="Skyscrapper image" />
      </div>

    </div>
  )
}

export default AllGuidesBanner
