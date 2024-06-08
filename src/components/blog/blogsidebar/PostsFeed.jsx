import React from 'react'
import PostCard from '../PostCard'


const PostsFeed = ({posts}) => {
  return (
    <div className='bg-[#edf6f7] w-5/6 mx-auto my-2'>
      <div className='font-bold text-xl p-2 my-2'>
        You might also like.
      </div>

        {
            posts.map((post, index) => {
                return (
                    <PostCard
                    title={post.title}
                    img={post.img}
                    key={index}
                    />
                )
            })
        }
    </div>
  )
}

export default PostsFeed
