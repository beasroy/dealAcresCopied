import React from 'react'
import styles from './invest.module.css'
import cloud from '../../../public/invest/clouds.png'
import Image from 'next/image'
const Clouds = () => {
  return (
    <div className={`absolute inset-0`}>

    <div className={`${styles.cloudsContainer}`}>
      <span className={`${styles.cloud}`}><Image src={cloud} alt="clouds png"/></span>
      <span className={`${styles.cloud}`}><Image src={cloud} alt="clouds png"/></span>
      <span className={`${styles.cloud}`}><Image src={cloud} alt="clouds png"/></span>
      <span className={`${styles.cloud}`}><Image src={cloud} alt="clouds png"/></span>
      <span className={`${styles.cloud} hidden md:block`}><Image src={cloud} alt="clouds png"/></span>
      <span className={`${styles.cloud} hidden md:block`}><Image src={cloud} alt="clouds png"/></span>
     
    </div>
    </div>
  )
}

export default Clouds
