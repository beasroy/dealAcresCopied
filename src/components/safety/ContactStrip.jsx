import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import whatsapp from '/public/whatsapp-icon.webp'
import Image from 'next/image'
const ContactStrip = ({
    isFullScreen
}) => {
    return (
        <div className={`${isFullScreen ? 'w-screen': 'w-full'} bg-[#0061df] text-white  grid-cols-1 grid md:grid-cols-3 uppercase text-sm md:text-base`}>
            <div className='border-r border-r-black py-2 font-bold  flex  flex-col  justify-center
            text-center
            md:text-left
            md:border-b-0 border-b border-b-black px-4 items-center  '>

                <div>
                <p>contact us</p>
                <p>7015963201, 8307757571</p>

                </div>

            </div>
            <div className='border-r border-r-black py-2 font-bold  flex items-center justify-center gap-4 md:border-b-0 border-b border-b-black '>
                <div className=''>
                   <Image src={whatsapp} alt='Whatsapp Icon' className='rounded-full w-[30px] md:w-[50px]' />
                </div>
                <div>

                Whatsapp us
                </div>
            </div>
            <div className=' flex flex-col px-4 py-2 font-bold justify-center items-center md:items-start '>
                <p>Write to us at</p>
                <p className='lowercase'>contactus@dealacres.com</p>
            </div>
        </div>
    )
}

export default ContactStrip
