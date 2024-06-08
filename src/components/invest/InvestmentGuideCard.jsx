"use client"
import React, { useState } from 'react'
import styles from './invest.module.css'
import Image from 'next/image'

const InvestmentGuideCard = ({ src, title, content }) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = (e) => {
    e.stopPropagation()
    setIsClicked(prev => !prev)
    // console.log('clicked', isClicked)
  }

  console.log(isClicked)
  return (
    <>
      <div className={`${styles.investmentGuideCard} hidden shadow-md md:flex flex-col items-center justify-center w-[230px] md:h-[250px] px-2 py-4 rounded-2xl border-r-2 border-r-black border-b-2 border-l-2 border-l-black gap-4 border-b-black hover:border-l-2 hover:border-l-black bg-white`}>
        <div className='overflow-hidden rounded-full transition-all'>
          <Image src={src} alt={title} className='rounded-full h-[100px] hover:scale-[1.3] transition-all w-[100px] border border-blue-300 shadow' />
        </div>
        <div className='font-bold text-base text-center peer py-4 hover:cursor-pointer'>
          {title}
        </div>
        <p className='md:hidden md:opacity-0 text-sm transition-opacity delay-100 ease-in-out duration-500 content-shown peer-hover:block peer-hover:opacity-100 text-center'>
          {content}
        </p>
      </div>
      <div className={`${styles.investmentGuideCard} md:hidden flex flex-col items-center justify-center w-[160px] shadow-[0px_0px_5px_rgba(0,0,0,0.3)] h-[215px] sm:h-[250px] px-2 py-4 rounded-[2.5rem] border border-black gap-2 sm:gap-4 border-b-black hover:border-l-2 hover:border-l-black bg-white border-none ${isClicked && '!h-[370px] before:!bg-[rgb(44,118,214)]'}`}>
        <div className='rounded-full transition-all'>
          <Image src={src} alt={title} className='rounded-full h-[100px] hover:scale-[1.3] transition-all w-[100px] border border-blue-300 shadow' />
        </div>
        <div className='font-bold text-xs xs:text-sm sm:text-base md:text-lg text-center peer py-4 hover:cursor-pointer' onClick={handleClick}>
          {title}
        </div>
        <p className={`hidden opacity-0 transition-opacity delay-100 ease-in-out duration-500 content-shown md:peer-hover:block md:peer-hover:opacity-100 text-sm sm:text-base text-center ${isClicked && 'max-md:opacity-100 max-md:block'}`}>
          {content}
        </p>
      </div>
    </>
  )
}

export default InvestmentGuideCard
