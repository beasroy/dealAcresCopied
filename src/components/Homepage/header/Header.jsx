"use client"
import React,{useState,useEffect} from 'react'
import HeaderInput from './HeaderInput'
import styles from './header.module.css'
import Image from 'next/image'
import background from '../../../../public/background header.jpg'
import {FiChevronDown} from 'react-icons/fi'

const Header = () => {
  
  const [category,setCategory] = useState('Buy')
  const headerTitles = {
                        'Buy':'Making your dream home a reality',
                        'Rent':'Rent Properties in your Area',
                        'Residential':'Explore Residential Properties in your Area',
                        'Commercial':'Explore Commercial Properties in your Area'
                      }

  const handleCTAClick = () => {
    const targetPosition = window.innerHeight - 160; 
    const scrollDuration = 1500; 
    const startTime = performance.now();
    const startScrollOffset = window.scrollY;

    const scrollStep = (timestamp) => {
      const currentTime = timestamp - startTime;
      const scrollProgress = Math.min(currentTime / scrollDuration, 1);
      const easeScrollProgress = 0.5 - Math.cos(scrollProgress * Math.PI) / 2; 
      const scrollOffset = startScrollOffset + easeScrollProgress * (targetPosition - startScrollOffset);

      window.scrollTo(0, scrollOffset);

      if (currentTime < scrollDuration) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };


    
  return (
    <div className={styles.headerContainer}>
        <Image 
            alt='background-img'
            src={background}
            className='IMG'
        />
        <div className={styles.headerContent}>
          <h1>{headerTitles[category]}</h1>
          <div className={styles.TextWrap}>
              <p 
                onClick={()=>setCategory('Buy')}
                className={category==='Buy'?styles.selected:''}>
                  Buy
              </p>
              <p 
                onClick={()=>setCategory('Rent')}
                className={category==='Rent'?styles.selected:''}>
                  Rent
              </p>
              <p 
                onClick={()=>setCategory('Residential')}
                className={category==='Residential'?styles.selected:''}>
                  Residential
              </p>

              <p 
                onClick={()=>setCategory('Commercial')}
                className={category==='Commercial'?styles.selected:''}>
                 Commercial
              </p>
          </div>
          <HeaderInput type = {category}/>
        </div>
        <div className={styles.cta} onClick={handleCTAClick}><FiChevronDown color='#fff' size={40}/></div>
      </div>
  )
}

export default Header