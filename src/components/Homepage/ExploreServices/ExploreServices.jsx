

'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const Card = ({ index, imageUrl, heading }) => {
    return (
        <div key={index} className="min-w-[80px] md:min-w-[88px] md:max-w-[90px]  flex flex-col items-center justify-center gap-2 p-2 rounded-xl bg-white text-black">
            <p className='font-bold text-center text-[0.7rem] leading-3 xl:text-[0.8rem] xl:leading-4 h-7 md:h-10 '>{heading}</p>
            <Image src={imageUrl} width={40} height={60} alt={heading} className='w-7 h-7' />
        </div>
    );
};

const ExploreServices = () => {
   

    const cardData = [
        
        {
            imageUrl: 'https://media-public.canva.com/N3bz0/MAFi_QN3bz0/1/t.png',
            heading: 'Rent Agreement'
        },
        {
            imageUrl: 'https://media-public.canva.com/nB8Ek/MAFfqznB8Ek/1/t.png',
            heading: 'Home  Loans'
        },
        {
            imageUrl: 'https://media-public.canva.com/FX_B4/MAFaqXFX_B4/1/t.png',
            heading: 'Property Valuer'
        },
        {
            imageUrl: 'https://media-public.canva.com/zLeFA/MAFKtnzLeFA/1/t.png',
            heading: 'Legal Services'
        },
        {
            imageUrl: 'https://media-public.canva.com/iA9GI/MAERBHiA9GI/1/t.png',
            heading: 'Chartered Accountant'
        },
        {
            imageUrl: '/homePage/homeDecor.webp',
            heading: 'Home Decor'
        },
        {
            imageUrl: '/homePage/homeInterior.webp',
            heading: 'Home Interior'
        },
        {
            imageUrl: '/vaastusastra.jpg',
            heading: 'Vastu Sartar'
        },
        {
            imageUrl: '/homePage/construction.webp',
            heading: 'Construction Contractor'
        },
        {
            imageUrl: '/homePage/modular.webp',
            heading: 'Modular Kitchen'
        }
    ];

   

    return (
        <div className='bg-[#c5dff8] p-4 md:p-8 '>
            <h2 className='md:text-center font-semibold text-[0.73rem] md:text-2xl mb-3 md:mb-10 mt-4 md:mt-0'>LET'S START WITH EXPLORING REAL ESTATE OPTIONS</h2>
            <div className='flex justify-center'>
                <div className='flex flex-row overflow-x-auto gap-4 md:gap-5  cursor-pointer xl:max-w-[1100px] xl:mx-auto '>
                    {cardData.map((card, index) => (
                        <Card key={index} imageUrl={card.imageUrl} heading={card.heading} />
                    ))}
                </div>
            </div>
        
                <div className="flex justify-center mt-3 md:mt-6">
                    <button  className="px-2 py-0.5 md:px-4 md:py-2 bg-blue-500 text-white text-[0.73rem] md:text-base rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">View All</button>
                </div>
          
        </div>
    );
}

export default ExploreServices;
