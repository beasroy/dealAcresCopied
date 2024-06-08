import React from 'react'

const SafetyInro = ({
    title,
    content
}) => {
  return (
    <div>
        <p className='py-1 md:py-2 font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl'>{title}</p>
        <p className='text-justify text-sm xs:text-base'>{content}</p> 
    </div>
  )
}

export default SafetyInro
