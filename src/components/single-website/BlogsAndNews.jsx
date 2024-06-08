'use client'

import React from 'react'
import SingleBlogCard from './SingleBlogCard'
import src2 from '../../../public/single-website/parking.webp'
import src1 from '../../../public/single-website/room.webp'
import { useState } from 'react'
const BlogsAndNews = () => {
    
    const [showFull, setShowFull] = useState(false)
    const dummyBlogData = {
        title: "Luxurious Living",
        excrept: "Welcome to a world of opulence and comfort! Smart World Orchard Gurgaon, sector 61, a residential development by Smart.",
        img: '/single website/room.webp',
        tags: 'Business, Luxury, Real Estate'
    }
    return (
        <div className=''>
            <div className='flex flex-nowrap md:grid  grid-cols-2 overflow-x-auto lg:grid-cols-3 gap-8 py-2 md:py-4 md:items-center'>
           
           
            {
                [...Array(9)].map((_, index) => {


                   
                    if(index < 3 || showFull){
                    return <div key={index} className='col-span-1 h-full max-h-full min-w-[300px] md:min-w-0 '> 
                            <SingleBlogCard img={index % 2 === 0 ? src2 : src1}
                        title={dummyBlogData.title}
                        tags={dummyBlogData.tags}
                        excrept={dummyBlogData.excrept}/>
                        </div>
                        
                    }else {
                        return (
                            <div key={index} className='md:hidden col-span-1 h-full max-h-full min-w-[300px] md:min-w-0 '> 
                            <SingleBlogCard img={index % 2 === 0 ? src2 : src1}
                        title={dummyBlogData.title}
                        tags={dummyBlogData.tags}
                        excrept={dummyBlogData.excrept}/>
                        </div>
                        )
                    }
                  
                })
            }

            

        </div>
        <div className='text-center hidden md:block'>
            <button className='bg-black px-4 py-2 text-white text-xl shadow rounded mb-2'
            onClick={() => setShowFull(prev => !prev)}
            >
                View {showFull ? 'Less': 'More'}
            </button>
        </div>
        </div>
    )
}

export default BlogsAndNews
