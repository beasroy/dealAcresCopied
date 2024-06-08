import Image from 'next/image'
import React from 'react'

const SingleBlogCard = ({
    img,
    title,
    tags,
    excrept
}) => {
  return (
    <div className='col-span-1 h-full   flex flex-col '>
        <div className='h-[150px]  md:h-1/2 md:max-h-1/2 w-full '>
            <Image className='w-full h-full  md:object-cover ' src={img} alt={title} width={300} height={900} />
        </div>
        <div className='text-sm py-4 h-1/2'>
            <h3 className='text-lg sm:text-xl'>
                {title}
            </h3>
            <p className='text-xs sm:text-sm font-bold'>
                {tags}
            </p>
            <p className='text-xs sm:text-sm'>
                {excrept}
            </p>
        </div>
      
    </div>
  )
}

export default SingleBlogCard
