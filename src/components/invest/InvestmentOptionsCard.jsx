import Image from 'next/image'
import React from 'react'

const InvestmentOptionsCard = ({
    title,
    src,
    bgColor
}) => {
  return (
    <div className={`flex  flex-col p-2 rounded-xl overflow-hidden  mx-0   shadow ${bgColor} cursor-pointer transition-all justify-between hover:shadow-lg hover:scale-[1.1] xs:min-w-[170px] xs:max-w-[170px] sm:max-w-full h-[100px] sm:h-[130px]`}>
      <p className='font-bold text-xs xs:text-sm sm:text-base md:text-lg pt-1 '>
        {title}
      </p>
      <div className='flex  justify-end'>
        <div>

        <Image src={src} alt={title} className='w-[60px] min-[440px]:w-[80px] '/>
        </div>
      </div>
    </div>
  )
}

export default InvestmentOptionsCard
