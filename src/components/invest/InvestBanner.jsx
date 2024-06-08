import Image from 'next/image'
import React from 'react'
import banner from '../../../public/invest/team_work.webp'
import styles from './invest.module.css'
import Clouds from './Clouds'


const InvestBanner = () => {
  return (
    <div className={`${styles.investBanner}  rounded-xl shadow-md my-4 flex flex-row justify-around items-center bg-blue-100 py-8 px-4`}>
      <Clouds />
      <h1 className='max-[380px]:text-2xl text-3xl lg:text-4xl  z-10 w-1/2'>
        Invest with <br className='sm:hidden'/> <span className='font-bold text-blue-600'>
           Deal Acres </span>
      </h1>
      <div className='w-1/2 md:w-1/4 h-full'>

        <Image src={banner} alt='teamwork image.' className='' />
      </div>

    </div>
  )
}

export default InvestBanner
