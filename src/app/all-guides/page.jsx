'use client';
import React, { useRef } from 'react'
import { allGuidesData } from './allGuidesData'
import GuideCard from '@/components/blog/guides/GuideCard'
import AllGuidesBanner from '@/components/all-guides/AllGuidesBanner'
import GuidesSlider from '@/components/all-guides/GuidesSlider'
import ManualCategorySlider from '@/components/all-guides/ManualCategorySlider'
import Tabularposts from '@/components/blog/tabularposts/Tabularposts'
import { useState } from 'react'
import { useCallback } from 'react'
import CheckList from '@/components/all-guides/CheckList'
import ManualCard from '@/components/all-guides/ManualCard'
import Explore from '@/components/Homepage/explore/Explore'
import { FaArrowUp } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import styles from './allguides.module.css'
import Link from 'next/link'
import { RiArrowDropDownLine } from "react-icons/ri";
import MobileTabularposts from '@/components/blog/tabularposts/MobileTabularPosts';

const allPostsData = [
  {
    "title": "Preparing Your Home for a Loved One with Alzheimer’s: A Caregiver’s Guide",
    "img": "article-thumb-1.jpg"
  }
  ,
  {
    "title": "Why is My House So Dusty? 5 Easy Ways to Eliminate Dust",
    "img": "article-thumb-2.webp"
  }
  ,
  {
    "title": "Preparing Your Home for a Loved One with Alzheimer’s: A Caregiver’s Guide",
    "img": "article-thumb-1.jpg"
  }
  ,
  {
    "title": "Why is My House So Dusty? 5 Easy Ways to Eliminate Dust",
    "img": "article-thumb-2.webp"
  },
  {
    "title": "Preparing Your Home for a Loved One with Alzheimer’s: A Caregiver’s Guide",
    "img": "article-thumb-1.jpg"
  }
  
]

const articlesData = [
  {
    "title": "Solar Panels for Apartments: The Complete Guide for Renters",
    "img": "solar-panels.webp"
  },
  {
    "title": "Solar Panels for Apartments: The Complete Guide for Renters",
    "img": "solar-panels.webp"
  },
  {
    "title": "Solar Panels for Apartments: The Complete Guide for Renters",
    "img": "solar-panels.webp"
  }

]

const AllGuidesPage = () => {

  const [tab, setTab] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(4)

  const cardsContRef = useRef(null);

  const scrollToCardContainer = () => {
    if (cardsContRef.current) {
      cardsContRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',     
      });
    }
  };

  const handleTabChange = useCallback((value) => {
    setTab(value)
  }, [tab])

  return (
    <div className={`scroll-smooth`}>

      {/* Banner */}
      <AllGuidesBanner />

      {/* Guides Slider */}
      <div className='max-w-[1060px]   mx-auto my-6'>

        <GuidesSlider allGuides={allGuidesData} isAllGuides={true} handleTabChange={handleTabChange}  />
      </div>

      {/* Real Estate Made easy.... */}
      <div className='px-4 max-w-[1060px] mx-auto'>
        <h2 className='text-xl xs:text-2xl sm:text-3xl font-bold py-2'>
          Real Estate Made Easy: Your Comprehensive Manual
        </h2>

        <p className='text-justify normal-paragraph md:text-lg md:py-4 '>
          Our real estate manuals are like helpful guides for buying and selling homes. They explain everything step by step, from finding the perfect property to signing the paperwork. These manuals are easy to understand, with clear explanations and tips to make real estate transactions smooth and simple.
        </p>
      </div>

      <div className='max-w-[1060px] mx-auto my-4 '>
        <ManualCategorySlider allGuides={allGuidesData} handleTabChange={handleTabChange}  tab={tab} />
      </div>

      <div className='max-w-[1060px] md:mx-auto my-6 flex flex-col md:flex-row justify-between gap-12'>
        <div className='sticky top-0 w-full md:w-[30%]  h-fit'>
        
          <CheckList DropIcon={RiArrowDropDownLine} data={allGuidesData} tab={tab}  />
        </div>
        <div className='hidden md:block w-full md:w-[70%]'>
          <h3 className='font-bold text-4xl py-2 text-center md:text-left'>
            {allGuidesData[tab].title}
          </h3>
          <div id="manualCards" ref={cardsContRef} className='hidden md:flex flex-col gap-8 py-4 '>
            {[...Array(10).keys()].map((key) => {
              if(key < cardsToShow){
                return (
                  <div className='sm:max-w-[350px] sm:mx-auto md:max-w-full' key={key}>
                    <ManualCard />
                  </div>
                )
              } 
            })}
          </div>
          <div className='flex gap-4 items-center justify-center'>
            <button
              disabled={cardsToShow == 10}
              className=' bg-blue-500 text-white text-lg px-4 py-2 flex justify-center items-center
            rounded-lg shadow disabled:opacity-50
            disabled:pointer-events-none
            peer'
              onClick={() => setCardsToShow(prev => prev + 2)}
            >
              Show More
            </button>
            <span 
              onClick={() => {setCardsToShow(2); scrollToCardContainer()}}
              className= 'hidden peer-disabled:inline text-blue-400 animate-pulse'>
              <FaArrowUp size={40}/>
            </span>
          </div>
        </div>
      </div>

      {/* tabular posts */}
      <div className='hidden md:block py-4 mb-6 max-w-[1060px] mx-auto'>
        <Tabularposts posts={allPostsData} articles={articlesData} />
        <Explore />
      </div>
      <div className='py-4 mb-6 max-w-[1060px] mx-auto md:hidden'>
      <MobileTabularposts posts={allPostsData} articles={articlesData} />
      <Explore />
      </div>
    </div>
  )
}

export default AllGuidesPage
