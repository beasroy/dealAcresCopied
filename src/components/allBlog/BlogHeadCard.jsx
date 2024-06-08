import React from 'react'

const BlogHeadCard = ({
    title,
    description,
    color,

}) => {
  return (
<<<<<<< HEAD
    <div className={` hover:bg-white/30 cursor-pointer transition-all py-2 px-4 rounded shadow-lg bg-black/30`}>
=======
    <div className={` hover:bg-white/10 cursor-pointer transition-all py-2 px-4 md:py-4 rounded shadow-lg bg-black/40 max-sm:bg-black/50`}>
>>>>>>> 33b1fe1b709683639474d8371f771090607b638d
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
