import Image from 'next/image'
import React from 'react'
import styles from "./hotspot.module.css"

const Location = {
    Gurgaon: [
        {
            id: 1,
            img: "/propertyComparison/hotspot.jpg",
            label: "Dwarka Expressway",
        },
        {
            id: 2,
            img: "/propertyComparison/hotspot.jpg",
            label: "Dwarka Expressway",
        },
        {
            id: 3,
            img: "/propertyComparison/hotspot.jpg",
            label: "Dwarka Expressway",
        },
        {
            id: 4,
            img: "/propertyComparison/hotspot.jpg",
            label: "Dwarka Expressway",
        },
        {
            id: 5,
            img: "/propertyComparison/hotspot.jpg",
            label: "Dwarka Expressway",
        },
    ]
}

const Hotspot = () => {
  return (
    <div>
      <div>
        <h2 className={styles.Title}> 
            Hotspot of Gurgaon 
        </h2>
        <div className={styles.Hotspot}>
        {Location["Gurgaon"].map((dt, index) => (
        <div key={index}>
            <Image 
            src={dt.img}
            alt={dt.img}
            width={80}
            height={80}
            />
            <p>{dt.label}</p>
        </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Hotspot;