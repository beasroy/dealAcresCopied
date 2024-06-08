import Image from 'next/image'
import React from 'react'
import { FiSearch } from 'react-icons/fi'
const FaqBanner = ({
    img
}) => {
    return (
        <div className=' relative h-[200px] md:h-auto sm:min-h-[350px] sm:max-h-[500px]  flex items-center justify-end md:justify-center'>
            <Image src={img} alt='Question Mark Image.' className='
      w-full
      h-full
      absolute
      max-sm:object-cover
      '/>

            <div className='md:absolute top-1/2 left-1/2 md:-translate-x-1/2 px-4 md:-translate-y-1/2 flex flex-col '>
                <h1 className='z-10 text-lg xs:text-2xl sm:text-3xl lg:text-4xl font-bold py-2 text-center xs:text-left sm:py-4'>Hey, how can we help?</h1>

                <div className='relative'>
                    <span className='absolute 
                    p-1 inset-y-1/2 -translate-y-1/2 left-2 w-[20px] md:w-[30px] h-[20px] md:h-[30px]
                    flex items-center justify-center
                    pointer-events-none z-10 bg-blue-600 rounded-full text-white  '>
                        <FiSearch size={20} />

                    </span>
                    <input type="text" placeholder='Search By Keyword'
                        className='w-full py-2 md:py-[16px] pl-[35px] md:pl-[50px] text-sm rounded-xl shadow-lg' />

                </div>

            </div>


        </div>
    )
}

export default FaqBanner
