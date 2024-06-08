import Image from 'next/image'
import React from 'react'
import styles from "./service.module.css"

const ServiceLayout = (props) => {
  return (
    <div className={styles.ServiceBlock}>
      {/* <div className={}> */}
        <Image
        src={props.source}
        alt={props.source}
        width={150}
        height={50}
        />
        <p>{props.service}</p>
      {/* </div> */}
    </div>
  )
}

export default ServiceLayout
