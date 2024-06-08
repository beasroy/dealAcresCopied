import styles from './hotspots.module.css'
import Image from 'next/image';

function Hotspots() {
  return (
    <div className={`${styles.hotspotsContainer}`}>
      <div className={styles.hotspotsItemContainer}>
        <div className={styles.hotspotsImageContainer}>
            <Image
              src='/locationOverview/locationPic.jpg'
              alt="Big Image"
              layout="fill"
              style={{objectFit:"cover"}}
            />
        </div>
        <h6>Dwarka Expressway</h6>
      </div>
      <div className={styles.hotspotsItemContainer}>
        <div className={styles.hotspotsImageContainer}>
            <Image
              src='/locationOverview/locationPic.jpg'
              alt="Big Image"
              layout="fill"
              style={{objectFit:"cover"}}
            />
        </div>
        <h6>Dwarka Expressway</h6>
      </div>
      <div className={styles.hotspotsItemContainer}>
        <div className={styles.hotspotsImageContainer}>
            <Image
              src='/locationOverview/locationPic.jpg'
              alt="Big Image"
              layout="fill"
              style={{objectFit:"cover"}}
            />
        </div>
        <h6>Dwarka Expressway</h6>
      </div>
      <div className={styles.hotspotsItemContainer}>
        <div className={styles.hotspotsImageContainer}>
            <Image
              src='/locationOverview/locationPic.jpg'
              alt="Big Image"
              layout="fill"
              style={{objectFit:"cover"}}
            />
        </div>
        <h6>Dwarka Expressway</h6>
      </div>
      <div className={styles.hotspotsItemContainer}>
        <div className={styles.hotspotsImageContainer}>
            <Image
              src='/locationOverview/locationPic.jpg'
              alt="Big Image"
              layout="fill"
              style={{objectFit:"cover"}}
            />
        </div>
        <h6>Dwarka Expressway</h6>
      </div>
    </div>
  )
}

export default Hotspots