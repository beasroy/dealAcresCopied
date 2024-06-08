import Image from 'next/image'
import React from 'react'

const NewFeatureCard = ({
  img,
  text,
  variant
}) => {
  return (
    <div className={`border-1 shadow-lg transition-all overflow-hidden  hover:bg-neutral-200 cursor-pointer    h-full max-h-full flex flex-col  `}>
      <div className=" overflow-hidden max-w-full h-full    ">
        <Image
          src={img}
          alt="card"
          className="w-full h-full scale-100 transition-all  hover:scale-[1.3]"
          width={600}
          height={1800}
        />
      </div>
      <div className={`flex  justify-center text-center text-[10px] xs:text-[12px] sm:text-xs leading-[10px] xs:leading-[15px]  md:text-base  font-bold   py-2 px-1 shadow border border-t-0 border-gray-400 ${variant === "small" && 'max-md:px-1 max-md:py-1'}`}>
        {text}
      </div>
    </div>
  )
}

export default NewFeatureCard
