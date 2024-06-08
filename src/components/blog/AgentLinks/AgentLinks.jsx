import React from 'react';
import LinkSection from './LinkSection';
import { gurugaon, hariyana } from './Menu';

const AgentLinks = () => {
  return (
    <div>
      <div className='flex flex-col  my-2 md:my-4  px-4'>
      <div className='pt-2 '>
        <h2 className='font-bold text-lg sm:text-xl py-3 uppercase'>Search for homes by city </h2>
        <LinkSection data={hariyana} />

        <div className='flex items-center justify-center mt-4'>
        <button
          className='bg-blue-500 text-white px-2 xs:px-4 py-1 xs:py-2  rounded-xl text-sm font-bold sm:text-base'
        
        >
          View More Cities
        </button>
      </div>
      </div>
      <div className='pt-2 '>
        <h2 className='font-bold text-lg sm:text-xl py-3 uppercase'>Seach for home by districts</h2>
        <LinkSection data={gurugaon} />

        <div className='flex items-center justify-center my-4'>
        <button
          className='bg-blue-500 text-white px-2 xs:px-4 py-1 xs:py-2  rounded-xl text-sm font-bold sm:text-base'
        
        >
          View More Cities
        </button>
      </div>
      </div>

  
    </div>
      
    </div>
  );
};

export default AgentLinks;
