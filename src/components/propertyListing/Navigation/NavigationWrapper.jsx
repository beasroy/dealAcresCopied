import React from 'react'

const NavigationWrapper = ({
    children
}) => {
  return (
    <section className='container mx-auto mt-12 hidden md:block'>
        {children}
    </section>
  )
}

export default NavigationWrapper
