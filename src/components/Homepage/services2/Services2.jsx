import React from 'react'
import Link from 'next/link'
import styles from './services2.module.css'
import Image from 'next/image'
import {GoLinkExternal} from 'react-icons/go'
import exp from '../../../../public/caricatures/explore.webp'
import acc from '../../../../public/caricatures/Accountant.webp'
import home from '../../../../public/caricatures/home loan.webp'
import legal from '../../../../public/caricatures/legal.webp'
import property from '../../../../public/caricatures/property valuer.webp'
import vastu from '../../../../public/caricatures/vastu.png'
import rent from '../../../../public/caricatures/rent agreement.webp'

const Services2 = () => {
  return (
    <div className={styles.services2Container}>
        <div className={styles.explore}>
            <h3>Explore &thinsp;<p>Our services</p></h3>
            <p>Make your life easier with our services</p>
            <div className={styles.imgContainer}>
                <Image
                    src={exp}
                    className={styles.exploreimage}
                    alt='explore art'
                />
            </div>
            <h6>Get assistance in selling faster</h6>
            <p>Dedicated Relationship manager to help you sell your property faster</p>
            <h4 style={{textAlign:'right'}}>
                <a href='#explore'>Explore now ➜</a>
            </h4>
        </div>
        <div className={styles.sideContent}>
            <div className={styles.sideSubContent}>
                <div className={styles.blockSection} style={{backgroundColor: 'rgba(182, 234, 250,0.8)'}}>
                    <Image
                        src={rent}
                        className={styles.sideimage}
                        alt='rent agreement'
                    />
                    <h3>Rent Agreement</h3>
                </div>
                <div className={styles.blockSection} style={{backgroundColor: 'rgba(229, 249, 219,0.8)'}}>
                    <Image
                        src={legal}
                        className={styles.sideimage}
                        alt='Legal Services'
                    />
                    <h3>Legal Services</h3>
                </div>
            </div>
            <div className={styles.sideSubContent}>
                <div className={styles.blockSection} style={{backgroundColor: 'rgba(184, 231, 225,0.8)'}}>
                    <Image
                        src={vastu}
                        className={styles.sideimage}
                        alt='vastu shastra'
                    />
                    <h3>Vastu Shastra</h3>
                </div>
                <div className={styles.blockSection} style={{backgroundColor: 'rgba(249, 155, 125,0.8)'}}>
                    <Image
                        src={home}
                        className={styles.sideimage}
                        alt='Home loan'
                    />
                    <h3>Home Loan</h3>
                </div>
            </div>
            <div className={styles.sideSubContent}>
                <div className={styles.blockSection} style={{backgroundColor: 'rgba(192, 219, 234,0.8)'}}>
                    <Image
                        src={property}
                        className={styles.sideimage}
                        alt='Property valuer'
                    />
                    <h3>Property Valuer</h3>
                </div>
                <div className={styles.blockSection} style={{backgroundColor: 'rgba(227, 172, 249,0.8)'}}>
                    <Image
                        src={acc}
                        className={styles.sideimage}
                        alt='Accountant'
                    />
                    <h3>Accountant</h3>
                </div>
            </div>
            <Link href='#allservices'> View all services <GoLinkExternal style={{display:'inline'}}/></Link>
        </div>
    </div>
  )
}

export default Services2