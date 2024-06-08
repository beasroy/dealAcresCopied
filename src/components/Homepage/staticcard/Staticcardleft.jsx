import React from 'react'
import styles from './staticcardleft.module.css'
import Image from 'next/image'
import src from '../../../../public/staticcard left img.jpg'

const Staticcardleft = () => {
  return (
    <div className={styles.staticCardContainer}>
        <div className={styles.imgContainer}>
            <Image
                src = {src}
                alt = 'HOUSE'
                className={styles.img}
            />
        </div>
        <div className={styles.sidecontent}>
            <p>BUY FOR COMMERCIAL USE</p>
            <h3>Buy a Commercial property</h3>
            <h6>Explore from Office Spaces, Co-working spaces, Retail Shops, Land, Factories and more</h6>
            <button>Explore buying Commercial</button>
            <div className={styles.decorativeBackground}> </div>
        </div>
    </div>
  )
}

export default Staticcardleft