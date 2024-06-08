import Image from 'next/image'
import React from 'react'

const MemberCard = ({
    img,
    name = "Name",
    position = "Position"
}) => {
  return (
    <div className='rounded-xl relative w-[270px] md:w-full md:mr-4 p-8 min-h-[450px] flex items-end justify-center '>
        <div className='absolute inset-0 -z-10'>
        <Image src={img} alt={name}   className='object-cover w-full h-full rounded-xl'/>
        </div>
        <div className='   text-center py-2 px-8 bg-black text-white font-bold '>
            <p>{name}</p>
            <p>{position}</p>
        </div>
      
    </div>
  )
}

export default MemberCard
