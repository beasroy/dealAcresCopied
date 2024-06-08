'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {useEffect} from 'react'


const BrandBanner = ({
    img,
    url,
    hasCta
}) => {

  let hostname = ''

  useEffect(() => {
    if(typeof window === 'undefined') return;
    if(window){
      hostname = window.location.hostname;
    }
  }, [])

  const router = useRouter();
  return (
    <div className='w-5/6 mx-auto p-4 relative ' onClick={() => {
      !hasCta && router.push(`/${url}`)
    }}>

    
      <Image src={img} alt="multipurpose banner" 
      className="w-full object-cover"/>

    {hasCta && 
    
    <Link className='bg-blue-500 hover:bg-blue-400 text-white rounded-xl shadow-2xl py-2 text-center px-4 absolute  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'
    href={`https://${hostname}/${url}`}
    >
      Get Started
    </Link>
    }
    </div>
  )
}

export default BrandBanner
