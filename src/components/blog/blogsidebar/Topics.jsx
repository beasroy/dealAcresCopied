import React from 'react'
import TopicButton from './TopicButton'



const Topics = ({
    topicList
}) => {
  return (
    <div className='hidden md:grid grid-cols-2 gap-4 bg-[#edf6f7]
    w-5/6 mx-auto p-4 '>
      {topicList.map((topic, index) => {
        return (<TopicButton size={index > 7 ? 'big' : 'small'} label={topic} key={index}/>)
      }
      )
      }
    </div>
  )
}

export default Topics
