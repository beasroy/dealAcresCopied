'use client'
import {useState} from 'react';
import styles from './photos.module.css'
import Image from 'next/image'
import { RiCloseLine} from "react-icons/ri";
import {IoCameraOutline} from 'react-icons/io5';
import ImageCarasouel from '@/components/property/imagecontainer/ImageCarasouel';

function Photos() {

  const [Carasouel,setCarasouel] = useState(false);
  const imageCarasouel = [
    "/property/mainpic.jpg",
    "/property/sidepic1.jpg",
    "/property/sidepic2.jpg",
  ]

  return (
    <div className={`${styles.content2PhotosContainer} !grid !grid-cols-1 sm:!grid-cols-2 md:!grid-cols-[repeat(4,1fr)]`}>
      <div className={styles.content2PhotosItem}>
      <Image
        src='/locationOverview/locationPic.jpg'
        alt="Big Image"
        layout="fill"
        style={{objectFit:"cover"}}
      />
      </div>
      <div className={styles.content2PhotosItem}>
        <Image
          src='/locationOverview/locationPic.jpg'
          alt="Big Image"
          layout="fill"
          style={{objectFit:"cover"}}
        />
      </div>
      <div className={styles.content2PhotosItem}>
        <Image
          src='/locationOverview/locationPic.jpg'
          alt="Big Image"
          layout="fill"
          style={{objectFit:"cover"}}
        />
      </div>
      <div className={styles.content2PhotosItem}>
        <Image
          src='/locationOverview/locationPic.jpg'
          alt="Big Image"
          layout="fill"
          style={{objectFit:"cover"}}
        />
        <button className={styles.viewImagesButton} onClick={() => {setCarasouel(true)}}><IoCameraOutline style={{display:'inline'}}/> View Images</button>
      </div>
      {Carasouel &&
          <div className= {styles.imageCarasouelContainer}>
              <RiCloseLine
                  color="#fff"
                  size={40}
                  className={styles.close}
                  onClick={() => {
                    setCarasouel(false);
                  }}
              />
              <ImageCarasouel data = {imageCarasouel}/>
          </div> 
      }
    </div>
  )
}

export default Photos