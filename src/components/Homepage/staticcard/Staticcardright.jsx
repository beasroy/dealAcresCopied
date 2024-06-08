import React from 'react'
import Image from 'next/image'
import styles from './staticcardright.module.css'
import src from '../../../../public/staticcard right img.jpg'

const Staticcardright = () => {
    return (
      <div className={styles.staticCardContainer}>
          <div className={styles.sidecontent}>
              <p>BUY FOR RESIDENTIAL USE</p>
              <h3>Buy a Residential property</h3>
              <h6>Explore from Office Spaces, Co-working spaces, Retail Shops, Land, Factories and more</h6>
              <button>Explore buying Residential</button>
              <div className={styles.decorativeBackground}> </div>
          </div>
          <div className={styles.imgContainer}>
              <Image
                  src = {src}
                  alt = 'HOUSE'
                  className={styles.img}
              />
          </div>
      </div>
    )
  }
  

export default Staticcardright