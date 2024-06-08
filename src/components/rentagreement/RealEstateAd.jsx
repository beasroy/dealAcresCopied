import Image from 'next/image'
import React from 'react'
import Estate from "../../../public/rentagreement/estate.webp"
import styles from "./sidebar.module.css"

const RealEstateAd = () => {
  return (
    <div>
        <div className={styles.ExpertSidebar}>
      <div>
        <Image
        src={Estate}
        className={styles.AdImg}
        />
      </div>

      <h2 className={styles.Tagline}> List Your Real Estate Business </h2>
      </div>
    </div>
  )
}

export default RealEstateAd
