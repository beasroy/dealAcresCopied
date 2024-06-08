import Image from 'next/image'
import React from 'react'
import Tailored from "../../../public/allService/Tailored.png"
import Strong from "../../../public/allService/Strong.webp"
import Transparent from "../../../public/allService/Transparent.png"
import styles from "./chooseus.module.css"

const ChooseUs = () => {
  return (
    <div  className={styles.ChooseUs}>
        <h2>Why Choose us?</h2>
      <div className={styles.ChooseUsOpt}>
        <div>
            <Image
                src={Tailored}
                alt='Tailored Solution'
            />
            <h3>Tailored Solution</h3>
            <p>Enjoy quality services that are customized to meet your expectations.</p>
        </div>
        <div>
            <Image
                src={Strong}
                alt='Strong Expertise'
            />
            <h3>Strong Expertise</h3>
            <p>Connect with highly specialized experts’ adept in their business</p>
        </div>
        <div>
            <Image
                src={Transparent}
                alt='Transparent Executionn'
            />
            <h3>Transparent Execution</h3>
            <p>Enjoy quality services that are customized to meet your expectations.</p>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs
