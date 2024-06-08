import React from 'react'

const HelpDetails = ({
    showOnMobile,
    showOnDesktop
}) => {
    return (
        <div className={`${showOnMobile && 'block md:hidden'} ${showOnDesktop && 'hidden md:block '} text-center w-full max-md:py-4`}>
            <h1 className='font-bold text-xl'>Need Help?</h1>
            <p className='text-lg'>You Can Email Us</p>
            <p className='text-lg text-blue-600 md:mb-20'>Contact@dealacres.com</p>
        </div>
  )
}

export default HelpDetails
