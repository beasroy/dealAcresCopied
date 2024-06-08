import React from 'react';
import Link from 'next/link';

const LinkSection = ({ data }) => {
  return (

      <div className="grid grid-cols-[repeat(4,200px)] md:grid-cols-4 overflow-x-auto max-sm:max-h-[200px] overflow-y-auto  ">
        {data.map((item, index) => (
    
            <Link key={index} href={item.link} className='text-xs lg:text-sm  hover:text-blue-600'>
              
                {item.name}
              
            </Link>
       
        ))}
      </div>
   
  );
};

export default LinkSection;
