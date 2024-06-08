'use client'

import React, { useEffect } from 'react'
import PostSection, { PostSectionProps } from './PostSection';
import PostHeader from './PostHeader';
import PublishedOn from './PublishedOn';
import Image from 'next/image';



const  BlogPost = ({
  postData
}) => {

  const { heading, postIntro, publishedOn, img, sections,  } = postData;




  return (

    <div className='px-2 xs:px-4 flex flex-col font-light  '>
      <PostHeader heading={heading} align='left' size={'large'} />

      <PublishedOn date={publishedOn} align='left' />

      <div className="text-justify text-sm md:text-base" dangerouslySetInnerHTML={{ __html: postIntro }}></div>

      <div className='py-2 md:py-4'>
      <Image src={`/blog/${img}`} alt='post cover' width={200} height={100} className='w-full max-w-full h-96' /></div>


      <div>
        {sections.map((section, index) => {
          return (
            <PostSection
              title={section.title}
              content={section.content}
              img={section.img}
              isList={section.isList}
              isItalic={section.isItalic}
              lists={section.lists}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default BlogPost
