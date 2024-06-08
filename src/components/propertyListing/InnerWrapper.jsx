import React from 'react'

const InnerWrapper = ({
  children
}) => {
  return (
    <div className='
    h-full
    w-[90%] xs:w-[80%] 
    mx-auto md:mx-0 md:my-auto   
    md:w-[400px] 
    rounded-xl 
    p-5 
    border-t-4 border-r-2 border-l-2 border-[#dcf0fd] border-b-4 max-md:border-none 
    flex flex-col justify-end '>
      {children}
    </div>
  )
}

export default InnerWrapper
