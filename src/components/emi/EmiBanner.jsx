import React from 'react'
import bg from '../../../public/emi/emi_banner.webp'
import Image from 'next/image'
const EmiBanner = () => {
  return (
    <div className='h-[200px] md:h-[300px] relative '>
    <div className='w-full h-full md:h-4/5'>
      <Image src={bg} alt='Emi calculator' className='w-full h-full object-cover'/>
    </div>
   
    <div className='absolute inset-0 flex items-center justify-end pr-8'>
       <h1 className='font-bold text-[28px] xs:text-[2rem] md:text-6xl'>
       EMI Calculator
       </h1>
      </div>
    </div>
  )
}

export default EmiBanner

