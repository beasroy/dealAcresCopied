import React from 'react'
import TableHeader from './TableHeader'
// import posts from '@/data/allPostsData.json'
// import articles from '@/data/articlesData.json'
import PostCard from '../PostCard'
import ArticleCard from './ArticleCard'
import Heading from '../Heading'
import styles from './tabular.module.css'

const NewTabularPosts = ({
    posts,
    articles
}) => {
    return (
        <div className='my-4 overflow-x-scroll'>

    <div className='flex flex-row gap-4 flex-nowrap py-2 text-xl font-bold border-b border-b-black overflow-y-auto'>
        <div className='max-md:min-w-[80%] my-2 px-4 lg:col-span-1'>Popular Posts</div>
        <div className='max-md:min-w-[80%] my-2 px-4 lg:col-span-1'>Latest Posts</div>
        <div className='max-md:min-w-[80%] my-2 px-4 lg:col-span-1'>Relevant Articles</div>

    </div>

    <div className='bg-[#edf6f7] flex gap-4 flex-nowrap lg:grid lg:grid-cols-3 max-w-screen-2xl mx-auto w-full max-h-[500px] overflow-y-auto'>


        <div className='max-md:min-w-[80%] my-2 px-4 lg:col-span-1 '>
            <div className='bg-[#edf6f7] lg:max-h-[600px] '>
                {posts.map((post, index) => (
                    <PostCard key={index} title={post.title} img={post.img} />
                ))}
            </div>
        </div>

        <div className='max-md:min-w-[80%] my-2 px-4 lg:col-span-1 '>
            <div className='bg-[#edf6f7] lg:max-h-[600px]'>
                {posts.map((post, index) => (
                    <PostCard key={index} title={post.title} img={post.img} />
                ))}
            </div>
        </div>

        <div className='max-md:min-w-[80%] my-2 px-4 lg:col-span-1 '>
            <div className='lg:max-h-[600px] lg:overflow-y-scroll'>
                {articles.map((article, index) => (
                    <ArticleCard key={index} title={article.title} img={article.img} />
                ))}
            </div>
        </div>
    </div>
</div>

    )
}

export default NewTabularPosts
