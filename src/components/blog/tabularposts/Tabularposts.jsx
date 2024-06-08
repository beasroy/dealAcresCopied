import React from 'react';
import TableHeader from './TableHeader';
import PostCard from '../PostCard';
import ArticleCard from './ArticleCard';
import styles from './tabular.module.css';

const Tabularposts = ({
  posts,
  articles,
  articlesHeight = 'lg:max-h-[458px]' 
}) => {
  return (
    <div className='my-4 bg-[#edf6f7]'>

      <div className='= flex gap-4 flex-nowrap lg:grid lg:grid-cols-3 max-w-screen-2xl mx-auto w-full max-h-[700px]'>
        <div className='max-[768px]:min-w-[80%] my-2 px-4 lg:col-span-1'>
          <div>
            <TableHeader header='Popular Posts' />
          </div>
          <div className='bg-[#edf6f7] h-fit'>
            {posts.map((post, index) => (
              <PostCard key={index} title={post.title} img={post.img} />
            ))}
          </div>
        </div>

        <div className='max-[768px]:min-w-[80%] my-2 px-4 lg:col-span-1'>
          <TableHeader header='Latest Posts' />
          <div className='bg-[#edf6f7] h-fit'>
            {posts.map((post, index) => (
              <PostCard key={index} title={post.title} img={post.img} />
            ))}
          </div>
        </div>

        <div className='max-[768px]:min-w-[80%] my-2 px-4 lg:col-span-1'>
          <TableHeader header='Relevant Articles' />
          <div className={`${articlesHeight} lg:overflow-y-scroll ${styles.articles}`}>
            {articles.map((article, index) => (
              <ArticleCard key={index} title={article.title} img={article.img} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabularposts;
