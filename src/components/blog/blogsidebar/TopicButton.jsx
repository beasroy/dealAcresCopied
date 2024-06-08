import React from 'react'
import styles from './blogsidebar.module.css'
const TopicButton = ({label, size}) => {
  return (
    <button className={`
    w-full
    text-center uppercase ${styles.topicButton} p-2 rounded-[20px] whitespace-normal break-words
    ${size === 'big' ? 'col-span-2' : 'col-span-1'}
    `}>
      {label}
    </button>
  )
}

export default TopicButton
