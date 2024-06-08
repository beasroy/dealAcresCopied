import React from 'react'
import styles from '@/components/footer/footer.module.css'
import Itemscontainer from './Itemscontainer'
import Link from 'next/link'
import Socialicons from './Socialicons'
import Itemcontainer from './Itemcontainer'
const Footer = () => {
  return (
    <footer className=' bg-gray-900 text-white'>
      <div className={styles.fdiv}>
        <h2 className={styles.fdiv_text}>
          <span className='text-cyan-400'>Free</span> consultation: Unlock your real estate dreams today!
        </h2>
         <div>
            <input type="text" placeholder='Drop Your Phone Number' className={styles.input}/>
            <button className={styles.button}>Request a Call</button>
        </div>
      </div>
      <div className='bg-gray-800'><Itemcontainer/></div>
      <div><Itemscontainer/></div>
      <div
        className={styles.lastdiv}
      >
        <Link href='#' className=''>DealAcres © 2023 . All rights reserved.</Link>
        <span>Terms · Privacy Policy</span>
        <Socialicons/>
      </div>
    </footer>
  )
}

export default Footer
