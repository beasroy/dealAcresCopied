'use client'
import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import styles from './toparticles.module.css'
import Image from 'next/image'
import {GoLinkExternal} from 'react-icons/go'
import {data} from './data'

const MobileToparticles = () => {

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


  const filteredData = screenWidth < 900 ? data[category].slice(0, 2) : data[category];

  return (
    <div className={styles.toparticlesContainer}>
        <h3>Explore All Residential Projects</h3>
        <p className={styles.subtitle}>

Discover various residential projects catering to diverse preferences and needs.</p>
<div className=' max-w-full overflow-x-auto'>
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
        </div>
        <div className={styles.line}></div>
        <div className='flex flex-row overflow-x-auto max-w-full gap-4'>
            {filteredData.map((dt,index)=>(
                <div key={dt.id} className={styles.contentBlock}>
                    <div className={styles.imgContainer}>
                        <Image
                            src={dt.src}
                            alt='image'
                            className={styles.img}
                        />
                    </div>
                    <div  className='text-[0.8rem] ml-2' >
                        <h6 className='font-bold'>{dt.title}</h6>
                        <p>{dt.desc}</p>
                        <h2 className='font-bold'>{dt.price}</h2>
                    </div>
                </div>
            ))}
        </div>
        {/* <Link href='#articles'>Know more about reality news, guides and articles <GoLinkExternal style={{display:'inline'}}/> </Link> */}
    </div>
  )
}

export default MobileToparticles