// import Image from 'next/image';
// import React from 'react'

// const ArticleCard = ({
//     title,
//     img
// }) => {
//   return (
//     <div className='flex flex-col items-center '>
//       <div className='w-full  h-[100px] md:h-[200px] relative'>

//       <Image alt={title}   src={`/blog/${img}`}
//       fill 
//       className='object-cover '/>
//       </div>

//         <div className='w-full font-semibold text-base md:text-lg bg-neutral-300 text-center py-2'>
//             {title}
//         </div>
//     </div>

//   )
// }

// export default ArticleCard

import Image from 'next/image';
import React from 'react'

const ArticleCard = ({
    title,
    img
}) => {
  return (
    <div className='flex flex-col items-center h-[180px] md:h-[220px]'>
      <div className='w-full h-full  relative'>

      <Image alt={title}   src={`/blog/${img}`}
      fill 
      className='object-cover '/>
      </div>

        <div className='w-full font-semibold text-[12px] xs:text-sm sm:text-base leading-[12px] xs:leading-[14px] sm:leading-[16px] md:text-lg bg-neutral-300 text-center py-2'>
            {title}
        </div>
    </div>

  )
}

export default ArticleCard

