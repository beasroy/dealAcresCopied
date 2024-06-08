import Image from 'next/image'
import React from 'react'
import TandCBanner from "../../../public/TandC/T&Cbanner.png"
import styles from "./page.module.css"
import Content from './Content'
const page = () => {
  return (
    <div>
      <Image
      src={TandCBanner}
      alt='Terms and Conditions'
      width={400}
      height={200}
      className={styles.banner}
      />
      <Content />
    </div>
  )
}

export default page
