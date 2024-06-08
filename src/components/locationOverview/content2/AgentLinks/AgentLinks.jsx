import React from 'react';
import LinkSection from '@/components/single-agent-page/AgentLinks/LinkSection';
import { gurugaon, hariyana } from './Menu';

const AgentLinks = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className=''>
        <h2 className='font-bold text-xl py-3'>REAL ESTATE AGENT IN HARYANA </h2>
        <LinkSection data={hariyana} />
      </div>
      <div className='py-2'>
        <h2 className='font-bold text-xl py-3'>PROPERTY DEALER IN GURGAON </h2>
        <LinkSection data={gurugaon} />
      </div>

  
      {/* <div className='flex items-center justify-center mb-3'>
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded-xl'
          onClick={() => {
            
            console.log('View More clicked');
          }}
        >
          View More
        </button>
      </div> */}
    </div>
  );
};

export default AgentLinks;
