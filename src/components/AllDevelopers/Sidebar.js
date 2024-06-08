import Image from 'next/image'
import React from 'react'
import source from "../../../public/allDevelopers/sidebarImg.jpg"
import styles from "./explorebuilder.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sideBlock}>
        <div>
      <Image 
      src={source}
      alt="Godrej Tropical"
      />
      </div>
      <div>
        <p>New Launch Project</p>
        <h4>Godrej Tropical</h4>
        <p>2BHK/3BHK Utra Luxury Flats</p>
        <p>Starting Price <span>Rs. 2.5 Cr*</span></p>
      </div>
    </div>
  )
}

export default Sidebar
