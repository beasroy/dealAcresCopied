import React from 'react';
import Link from 'next/link';

const LinkSection = ({ data }) => {
  return (

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-x-12 md:gap-x-40 sm:gap-y-1 whitespace-nowrap  ">
        {data.map((item, index) => (
    
            <Link key={index} href={item.link} className='text-[11px] md:text-xs lg:text-[13px]  hover:text-blue-600'>
              
                {item.name}
              
            </Link>
       
        ))}
      </div>
   
  );
};

export default LinkSection;





