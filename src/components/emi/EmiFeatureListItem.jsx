import Image from 'next/image'
import React from 'react'

const EmiFeatureListItem = ({
    label,
    text,
    img
}) => {
  return (
    <div className='w-full h-full flex gap-4 items-center'>
      <div className='max-w-[70px] max-h-[70px] w-full  h-full hidden md:block'>
        <Image width={50} height={50} src={`/emi/${img}`} alt={label} className='w-full  h-[70px] max-h-full object-contain'/>
      </div>
      <div className='min-w-[85px] min-h-[85px] h-[85px] xs:min-w-[150px] xs:min-h-[150px] max-h-full w-[150px] xs:h-[150px]  self-center xs:self-start md:hidden'>
        <Image width={600} height={600} src={`/emi/${img}`} alt={label} className='w-full  h-full max-h-full max-w-full '/>
      </div>
      
      <div className=' text-xs sm:text-sm md:text-base  '>
        <h3 className='inline font-bold '>
            {label}{": "}
        </h3>
        <p className='inline '>
            {text}
        </p>
      </div>
    </div>
  )
}

export default EmiFeatureListItem
