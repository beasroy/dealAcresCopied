import Explore from '@/components/Homepage/explore/Explore'
import Comparison from '@/components/PropertyComparison/Comparison'
import ReadMore from '@/components/propertyListing/ReadMore/ReadMore'
import style from './page.module.css'
import React from 'react'
import Hotspot from '@/components/PropertyComparison/Hotspot'

const page = () => {
  return (
    <div className='m-0'>
        <div className={style.Layout}>
        <Comparison />
          <Hotspot />
          <Explore />
        
        </div>
    <div className='max-w-[1320px] mx-auto'>
        <ReadMore />
        </div>
    </div>
  )
}

export default page
