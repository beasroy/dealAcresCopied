'use client'
import { useState } from 'react';
import Image from 'next/image';
import { BsMap } from 'react-icons/bs'
import { RiCloseLine } from "react-icons/ri";
import { IoCameraOutline, IoLocationOutline } from 'react-icons/io5';
import ImageCarasouel from './ImageCarasouel';
import styles from './imagecontainer.module.css';
import LocationModal from './LocationModal';
import { useParams, usePathname } from 'next/navigation';

function ImageContainer(props) {

  const [Carasouel, setCarasouel] = useState(false);
  const [locationModal,setLocationModal] = useState(false);

  const path = usePathname();
  // console.log(path.split('/')[1])

  return (
    <div className={styles.container}>
      <div className={styles.mainImgContainer}>
        <Image
          src={props.imageData.mainPic}
          alt="Big Image"
          layout="fill"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.sideImgContainer}>
        <div className={styles.sideImage}>
          <Image
            src={props.imageData.sidePic1}
            alt="Side Image 1"
            layout="fill"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.sideImage}>
          <Image
            src={props.imageData.sidePic2}
            alt="Side Image 2"
            layout="fill"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      {props.floorPlan && <button className={`${styles.floorPlanButton} hidden`}><BsMap style={{ display: 'inline' }} /> Floor Plan</button>}
      <button className={`${styles.viewImagesButton} ${styles[props.imageButtonPosition]} hidden md:block`} onClick={() => { setCarasouel(true) }}><IoCameraOutline style={{ display: 'inline' }} /> View Images</button>

      <div className="absolute bottom-4 right-4 flex md:hidden  gap-1">
        <button className={`${styles.viewImagesButton} ${styles[props.imageButtonPosition]} !static`} onClick={() => { setCarasouel(true) }}><IoCameraOutline style={{ display: 'inline' }} /> View Images</button>
        {path.split('/')[1] === 'location' && <button className={`${styles.viewImagesButton} ${styles[props.imageButtonPosition]} !static`} onClick={() => { setLocationModal(true) }}> <IoLocationOutline size={20} /></button>}
      </div>
      {Carasouel &&
        <div className={styles.imageCarasouelContainer}>
          <RiCloseLine
            color="#fff"
            size={40}
            className={styles.close}
            onClick={() => {
              setCarasouel(false);
            }}
          />
          <ImageCarasouel data={props.imageData.imageCarasouel} />
        </div>
      }
      {locationModal &&
        <LocationModal closeModal={() => setLocationModal(false)}/>
      }
    </div>
  );
}

export default ImageContainer;
