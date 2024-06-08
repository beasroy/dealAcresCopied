import React from 'react'
import Blogcards from '@/components/blogcards/Blogcards'
import Featured from '@/components/Featured/Featured'
import Guides from '@/components/Guides/Guides'
import NewBlogHead from '@/components/allBlog/NewBlogHead'
import Image from 'next/image'
import NewFeaturedSection from '@/components/Featured/NewFeaturedSection'

const Blog = () => {
  return (
    <div className='bg-white '>
      {/* <Bloghead heading='Finanace' content='Something Something'/> */}
      <NewBlogHead />


      <div className='p-4  md:p-6 max-w-screen-xl mx-auto '>
        
        <div className='block '>
          <NewFeaturedSection />

        </div>
        <Blogcards />
        <Blogcards />
        <div style={{ position: 'relative', width: '100%', marginBottom: "30px" }} className='min-h-[56px] md:min-h-[100px]'>
          <Image src='/all blog/SellerManual.png' alt='seller manual' layout='fill'
          style={{width: '100%', height: '100%'}}/>
        </div>
        <Blogcards />
        <Blogcards />
        <div style={{ position: 'relative', width: '100%', marginBottom: "30px" }} className='min-h-[56px] md:min-h-[100px]'>
          <Image src='/all blog/SellerManual.png' alt='seller manual' layout='fill'
            style={{width: '100%', height: '100%'}} />
        </div>
        <Blogcards />
        <Guides />
      </div>
    </div>
  )
}

export default Blog