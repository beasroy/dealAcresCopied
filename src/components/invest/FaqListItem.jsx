'use client'

import React, { useState } from 'react'
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr'

import styles from './invest.module.css'
const FaqListItem = ({
  question, isLast
}) => {

  console.log(isLast)

  const [showAnswer, setShowAnswer] = useState(false)
  return (
    <li className={`border border-blue-200 py-2   ${!isLast && 'border-b-0'} list-none overflow-hidden `}>
      <div className='font-medium text-xs sm:text-sm md:text-lg flex items-center gap-2'>
        <span className='' onClick={() => setShowAnswer(prev => !prev)}>
    {   !showAnswer ?   <GrFormAdd size={25} /> : <GrFormSubtract size={25} /> }
        </span>
        <div>
          {question}

          {

            <div className={`hidden pt-1 ${showAnswer ? styles.answer : ''}`}>
              This is a sample answer.
            </div>
          }

        </div>
      </div>




    </li>
  )
}

export default FaqListItem
