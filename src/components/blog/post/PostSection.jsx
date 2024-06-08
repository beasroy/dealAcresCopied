import Image from 'next/image';
import React from 'react'
import SectionList from './SectionList';
import PostHeader from './PostHeader';

import styles from './post.module.css'


const PostSection = ({
    title,
    content,
    img,
    isList,
    lists,
    isItalic
}) => {


    return (
        <div className='py-1'>
            {img && <div className={`relative ${styles.imgContainer}`}>


                <Image src={`/blog/${img}`}
                    width={800} height={500}
                    className={`w-full ${styles.img}`}
                    alt='section image ' />
            </div>
            }
            <PostHeader size='medium' heading={title} align='left' style={isItalic ? 'italic' : ''} />
            <div className='text-sm sm:text-base text-justify py-2'>
                {content}
            </div>
            <ul className='py-2'>
                {
                    isList &&
                    lists?.map((list, index) => {
                        return (

                            <SectionList title={list.title} content={list.content} key={index} />
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default PostSection
