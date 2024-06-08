import Image from 'next/image'
import React from 'react'
import styles from './safety.module.css'

const SafetyBanner = ({
    img,
    heading
}) => {
  return (
    <div className={`${styles.imgContainer} relative`}>
      
      <Image className={`${styles.img}`} src={img.src} alt='Safety Banner'
      fill/>
    
      <p className={`${styles.heading}`}>{heading}</p>

    </div>
  )
}

export default SafetyBanner
