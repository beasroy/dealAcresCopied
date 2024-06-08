import React from 'react'
import Link from 'next/link';
import { SiFacebook,SiInstagram,SiTwitter,SiLinkedin } from 'react-icons/si';
import Image from 'next/image';
const Socialicons = () => {

  const containerStyle = {
    display: 'flex',
    padding: '0 2rem 0 2rem',
    justifyContent: 'center',
    gap: '1rem',
    alignItems: 'center',
  };

  const logostyle ={
    cursor:'pointer'
  }

  return (
    <div style={containerStyle}>
   
      <Link href='https://www.instagram.com/dealacres/' style={logostyle}><Image src='/single-website/instagram.png' width={25} height={25} /></Link>
      <Link href='#facebook' style={logostyle}>  <Image src='/single-website/facebook.png' width={25} height={25} /></Link>
      <Link href='https://twitter.com/DealAcres' style={logostyle}> <Image src='/single-website/twitter.png' width={25} height={25} /></Link>
      <Link href='https://in.linkedin.com/company/deal-acres' style={logostyle}><Image src='/single-website/linkedin.png' width={25} height={25} /></Link>
      <Link href='#pinterest' style={logostyle}> <Image src='/single-website/pinterest.png' width={25} height={25} /></Link>
      <Link href='#youtube' style={logostyle}> <Image src='/single-website/youtube.png' width={25} height={25} /></Link>

    </div>
  )
}

export default Socialicons
