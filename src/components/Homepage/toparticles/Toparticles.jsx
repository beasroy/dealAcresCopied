'use client'
import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import styles from './toparticles.module.css'
import Image from 'next/image'
import {GoLinkExternal} from 'react-icons/go'
import {data} from './data'

const Toparticles = () => {

  const [category,setCategory] = useState('Flats')
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    setScreenWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const filteredData =  data[category];

  return (
    <div className={styles.toparticlesContainer}>
        <h3>Explore All Residential Projects</h3>
        <p className={styles.subtitle}>

Discover various residential projects catering to diverse preferences and needs.</p>
        <div className={styles.subtopics}>
            <p
            onClick={()=>setCategory('Flats')} 
            className={category==='Flats'?styles.selected:''}>
               Flats
            </p>
            <p
            onClick={()=>setCategory('Independent Floors')} 
            className={category==='Independent Floors'?styles.selected:''}>
                Independent Floors
            </p>
            <p
            onClick={()=>setCategory('Villas')} 
            className={category==='Villas'?styles.selected:''}>
               Villas
            </p>
            <p
            onClick={()=>setCategory('Plot/Land')} 
            className={category==='Plot/Land'?styles.selected:''}>
                Plot/Land
            </p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.content}>
            {filteredData.map((dt,index)=>(
                <div key={dt.id} className={styles.contentBlock}>
                    <div className={styles.imgContainer}>
                        <Image
                            src={dt.src}
                            alt='image'
                            className={styles.img}
                        />
                    </div>
                    <div className={`${styles.texts} ${index < 3 ? styles.withLine : ''}`}>
                        <h6>{dt.title}</h6>
                        <p>{dt.desc}</p>
                        <h2>{dt.price}</h2>
                    </div>
                </div>
            ))}
        </div>
        {/* <Link href='#articles'>Know more about reality news, guides and articles <GoLinkExternal style={{display:'inline'}}/> </Link> */}
    </div>
  )
}

export default Toparticles