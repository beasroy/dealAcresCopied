import React from 'react'

const PageWrapper = ({
    children
}) => {
  return (
    <section className='md:mt-12 md:container mx-auto lg:w-4/5'>
        {children}
    </section>
  )
}

export default PageWrapper
