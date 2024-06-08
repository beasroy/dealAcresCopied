import React from 'react'
import TableHeader from './TableHeader'
// import posts from '@/data/allPostsData.json'
// import articles from '@/data/articlesData.json'
import PostCard from '../PostCard'
import ArticleCard from './ArticleCard'
import Heading from '../Heading'
import styles from './tabular.module.css'

const MobileTabularposts = ({
  posts,
  articles
}) => {
  return (
    <div className='my-4  overflow-x-auto'>

      {/* <Heading heading='Read More' /> */}
      <div className="grid grid-cols-[repeat(3,65%)] md:grid-cols-[repeat(3,50%)]">
            <TableHeader header='Popular Posts' />
            <TableHeader header='Latest Posts' />
            <TableHeader header='Relevant Articles' />

      </div>

      
      <div className='mt-2 md:mt-4 bg-[#edf6f7] grid grid-cols-3 w-[195%] md:w-[150%]     overflow-y-auto   '>
        <div className='min-w-[65%] md:min-w-[50%] my-2  '>
          {/* <div>

            <TableHeader header='Popular Posts' />
          </div> */}
          <div className='bg-[#edf6f7] lg:max-h-[600px] '>
            {
              posts.map((post, index) => {
                return (
                  <PostCard key={index} title={post.title} img={post.img} isTabPosts />
                )
              })
            }
          </div>

        </div>

        <div className='min-w-[65%] md:min-w-[50%] my-2   '>
          {/* Latest Posts do some validation for grabing latest posts through date. */}

          {/* <TableHeader header='Latest Posts' /> */}
          <div className='bg-[#edf6f7] lg:max-h-[600px]'>
            {
              posts.map((post, index) => {
                return (
                  <PostCard key={index} title={post.title} img={post.img} isTabPosts />
                )
              })
            }
          </div>
        </div>

        <div className='min-w-[65%] md:min-w-[50%] my-2  '>
          {/* Relevant Articles. */}


          {/* <TableHeader header='Relevant Articles' /> */}
          <div className={`lg:max-h-[600px] 
          ${styles.articles}
          `}>

            {
              articles.map((article, index) => {
                return (
                  <ArticleCard key={index} title={article.title} img={article.img} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileTabularposts
