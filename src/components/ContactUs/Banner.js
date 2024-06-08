import React from 'react'
import styles from "./contactBg.module.css"

const Banner = () => {
  return (
    <div>
        <div className={styles.ContactBg}>
            <div className={styles.ContactBoxPad}>
                <div className={styles.ContactBox}>
                <h1>Contact Us</h1>
                <p>We're always eager to hear from you!</p>
                <p>Our Team is available 09:00 AM – 09:00 PM , seven days a week.</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Banner
