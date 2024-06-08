import React from 'react'



const SectionList = ({
    title,
    content
}) => {
  return (
    <li className='py-2'>
        <div className='font-medium text-xl'>
            {title}
        </div>
        <div className='text-md text-justify'>
            {content}
        </div>
      
    </li>
  )
}

export default SectionList
