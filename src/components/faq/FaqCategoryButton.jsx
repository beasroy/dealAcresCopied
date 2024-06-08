import React from 'react'

const FaqCategoryButton = ({
    label
}) => {
  return (
    <button className='w-full col-span-1 bg-white border-x-[4px] border-y-[1px] border-blue-500 rounded-2xl text-center py-2 md:py-4 text-blue-500 font-medium text-sm  sm:text-lg min-w-[160px]'>
        {label}
    </button>
  )
}

export default FaqCategoryButton

