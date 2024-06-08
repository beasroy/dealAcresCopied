import React from 'react'
import styles from './privacy.module.css';

const PrivacyBanner = () => {
  return (
    <div className={`bg-gradient-to-r from-teal-400 to-blue-700
    hover:from-teal-600 hover:to-indigo-500 font-bold text-3xl md:text-7xl text-white h-36 md:min-h-[280px] w-full flex flex-col items-center justify-center text-center`}>
          Privacy Policy
    </div>
  )
}

export default PrivacyBanner
