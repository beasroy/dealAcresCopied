import Image from 'next/image';
import React from 'react'


const PostCard= ({
    title,
    img,
    isTabPosts
}) => {
  return (
    <div className={`p-2 border border-b-gray-700  ${isTabPosts ? 'h-[90px]' : 'h-full'}`}>
      
      <div className='flex gap-4 items-center '>
        <div className='min-w-[100px] max-w-[100px] relative'>

            <Image alt={title} width={100} height={100} className='w-full' src={`/blog/${img}`} />
        </div>
       

        <div className='text-[10px] xs:text-[12px] sm:text-sm md:text-[0.94rem] md:leading-5'>
        {title}
        </div>
      </div>
    </div>
  )
}

export default PostCard
