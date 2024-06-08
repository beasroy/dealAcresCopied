'use client'
import { useState } from 'react'
import styles from './developerinfo.module.css'
import Image from 'next/image'

function Developerinfo(props) {

  const [showFull, setShowFull] = useState(false)

  return (
    <div className={styles.developerInfoContainer}>
      <div className={styles.developerInfoLogoContainer}>
        <Image
          src={props.devData.logoSrc}
          alt="Developer Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.developerInfoContentContainer}>
        <p>
          {showFull ? props.devData.developerInfo : `${props.devData.developerInfo.substring(0, 350)}`}
          {/* <span onClick={() => setShowFull(!showFull)}>{showFull ? ' ....less' : ' ....more'}</span> */}
        </p>
      </div>
    </div>
  )
}

export default Developerinfo