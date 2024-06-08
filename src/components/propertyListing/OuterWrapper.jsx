import React from 'react'

const OuterWrapper = ({
    children
}) => {
  return (
    <section className='
    flex flex-col md:flex-row 
    md:px-4 
    items-start justify-center 
  md:gap-[2rem]
    mx-auto md:my-10 

    
      container '>


        {children}
    </section>
  )
}

export default OuterWrapper
