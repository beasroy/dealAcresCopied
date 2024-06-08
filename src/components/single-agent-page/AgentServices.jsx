'use client'
import React from 'react'
import HeadingBorder from './HeadingBorder'
import { useState } from 'react'



const AgentServices = ({
    services
}) => {

    const [showFull, setShowFull] = useState(false);
    console.log(services.split('</br>'))
  
    return (

    
    <div className='w-full md:w-[85%] mx-auto'>
      <h2 className='font-bold text-2xl md:text-4xl inline-flex flex-col pb-2  '>
          Services
          <HeadingBorder />
        </h2>

        <p className='text-sm sm:text-base md:text-lg pb-4 text-justify' dangerouslySetInnerHTML={{ __html: services }} />

      
    </div>
  )
}

export default AgentServices
