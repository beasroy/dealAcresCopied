import Image from 'next/image'
import React from 'react'
import Explore from "../../../public/rentagreement/Explore.png"
import Manual from './Manual'
import styles from "./rentalManual.module.css"

const RentalManual = () => {
  return (
    <div className='p-4 bg-[#FAF7F3]'>
      <div className={styles.RentalManual}>
        <div className={styles.ManualImg}>
            <h3>Explore <br /> Rental Manual</h3>
            <Image
            src={Explore}
            />
        </div>
        
        <div className={styles.Articles}>
        <Manual />
        </div>
      </div>
    </div>
  )
}

export default RentalManual
