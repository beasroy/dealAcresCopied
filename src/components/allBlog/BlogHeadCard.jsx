import React from 'react'

const BlogHeadCard = ({
    title,
    description,
    color,

}) => {
  return (
    <div className={` hover:bg-white/10  md:hover:bg-white/30 cursor-pointer transition-all py-2 px-4 rounded shadow-lg bg-black/30`}>
      <p className={`${color} text-base min-[768px]:text-xl font-bold`}>
        {title}
      </p>
      <p className='text-sm min-[768px]:text-lg'>
        {description}
      </p>
    </div>
  )
}

export default BlogHeadCard
