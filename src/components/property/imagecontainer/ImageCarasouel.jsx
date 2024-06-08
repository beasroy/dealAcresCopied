import React, { useState } from 'react';
import Image from 'next/image';
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import styles from './imagecarasouel.module.css';

function ImageCarasouel({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={data[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <AiOutlineLeft size={30} color='#fff' className={styles.prevButton} onClick={handlePrevious}/>
      <AiOutlineRight size={30} color='#fff' className={styles.nextButton} onClick={handleNext}/>
    </div>
  );
}

export default ImageCarasouel;
