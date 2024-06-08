import Image from 'next/image'
import React from 'react'

const Insights = () => {
  return (
    <div className=' mx-auto md:px-5 lg:px-20 py-5'>
      <h1 className='text-2xl font-bold mb-5'>Insights about New Gurgaon</h1>
    <div className='flex flex-col lg:flex-row items-start justify-between gap-8 '>
      <Image 
        src='/gurgaonInsights.webp' 
        alt='insights gurugaon' 
        className='rounded-2xl' 
      width={500}
      height={500}
     
      />
      <div className='text-md md:mr-5'>
        <p>
          Gurgaon is a city just southwest of New Delhi in northern India.
          It’s known as a financial and technology hub. The Kingdom of Dreams is a large complex for theatrical shows. Sheetala Mata Mandir is an
          orange-and-white-striped Hindu temple. The Vintage Camera Museum showcases cameras and prints spanning a 
          century. West of the city, Sultanpur National Park is home to hundreds of bird species. 
        </p>
        <p className='mt-1'>
        Gurgaon is a city just southwest of New Delhi in northern India. 
        It’s known as a financial and technology hub. The Kingdom of Dreams is a 
        large complex for theatrical shows. Sheetala Mata Mandir is an orange-and-white-striped 
        Hindu temple. The Vintage Camera Museum showcases cameras and prints spanning a century. 
        </p>
      </div>
    </div>
    <div className="flex justify-end mt-1 lg:mt-0 md:mr-10 ">
        <button className="bg-blue-700 hover:bg-blue-500 text-white text-sm font-bold py-1 px-4 rounded-full">
        Explore Locality Insights 
        </button>
      </div>
    </div>
  )
}

export default Insights
