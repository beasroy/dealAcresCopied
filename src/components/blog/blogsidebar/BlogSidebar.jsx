'use client'

import React from 'react'
import Topics from './Topics';
import PostsFeed from './PostsFeed';
import BrandBanner from './BrandBanner';
import banner1 from '../../../../public/blog/home-search.webp'
import banner2 from '../../../../public/blog/seller-buyer.webp'


const BlogSideBar = ({
  topics,
  allPosts
}) => {


  return (
    <div>
{/*      
      <Topics topicList = {topics} /> */}
      <BrandBanner hasCta img={banner1} url='banner1'/>
      <PostsFeed posts={allPosts}/>
      <BrandBanner img={banner2} url='banner2'/>
    </div>
  )
}

export default BlogSideBar
