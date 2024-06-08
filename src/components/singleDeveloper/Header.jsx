import styles from './Header.module.css'
import Image from 'next/image'
import background from '../../../public/background header.jpg'

function Header() {
  return (
    <div className={styles.headerContainer}>
        <div className={styles.headerBannerContainer}>
            <div className={styles.blueOverlay}></div>
            <Image
                src={background}
                alt='background'
                className={styles.headerBannerImage}
            />
        </div>
        <div className={styles.headerContentContainer}>
            <div className={styles.devCredentials}>
                <div className={styles.headerImgContainer}>
                    <Image
                        src='/singleDeveloper/m3m logo.png'
                        alt='developer Logo'
                        width={280}
                        height={200}
                        objectFit='cover'
                    />
                </div>
                <div className={styles.devInfo}>
                    <h1>M3M India Pvt. Ltd</h1>
                    <p>Experience - <span> 35+ years</span></p>
                    <p>Operating Cities - <span> Gurgaon, Panipat, Noida</span></p>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Header