import React from 'react'




const PostHeader = ({
    heading,
    align,
    size,
    style
}) => {

    let textStyle = ''
    switch(style){
        case 'italic':
            textStyle = 'italic underline font-bold'
            break;
        default:
            textStyle = 'not-italic';
            break;
    }
  return (
    <div className={` py-2 sm:py-4
        ${align === 'center' ? 'text-center' : 'text-left'}
        ${size === 'small' && 'text-lg'}
        ${size === 'medium' && 'text-xl md:text-3xl font-[400]'}
        ${size === 'large' && 'text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold'}
        ${textStyle}
    `}>
        {heading}
    </div>
  )
}

export default PostHeader
