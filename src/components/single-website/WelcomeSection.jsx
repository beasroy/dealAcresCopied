
'use client'
import Image from 'next/image'
import houseInHand from '../../../public/single-website/houseInHand.webp'
import { useState } from 'react'
const WelcomeSection = ({
    title,
    img
}) => {


    const [showFull, setShowFull] = useState(false);
    return (
        <div>
            <h1 className='py-4 text-2xl font-medium'>
               Welcome to
               <div className='text-rose-800 font-bold text-4xl md:text-6xl  '>
                Deal Acres
               </div>
            </h1>
           

            
            <div className={`flex flex-col  
            md:flex-row  gap-8  `}>
              
                    <div className={`md:w-1/2`}>
                        <div className='text-justify text-sm md:text-base'>
                            <p>
                            Deal Acres is a Real Estate Consulting and Solutions supplier that offers differentiated administrations that truly aims in providing the best services. Deal Acres holds 10 years of experience in real estate business and investment advisory focusing in all regions of India, especially in the Delhi NCR region. Deal Acres is centered majorly around Real Estate Consulting in Delhi NCR. Through our fair practice and proficiency in giving way to put or in organizing accounts for investors to make the efficient use of their capitals. We likewise encourage booking in bulk and pre-leased properties and furthermore make conceivable joint endeavor recommendations, where speculators security and benefits perspective is constantly kept up.


                            </p>
                            <br/>
                          
                           { showFull && <p className="">
                            We are considered to be the Top Real Estate consultant in Delhi NCR. Geetanjali Homestate is not just a name but a pure brand in Gurgaon Region. We have successfully upgraded our position as one of the top Real Estate Consultants in Gurgaon. We strive to offer the best possible deals because we care for investor’s hard-earned capital. For the best people, the best services are to be given and Geetanjali Hometate is where your search for “best real estate broker in Gurgaon” ends.
                            </p>}

                            {!showFull && <button className='md:hidden text-blue-500 font-bold text-lg pb-4' onClick={() => setShowFull(true)}>
                                Read More
                            </button>}
                        </div>

                       
                    </div>
               

                
          
                    <div className={` mx-auto  w-full h-[20rem]   md:w-1/2 -order-1 hidden md:block  `}>
                        <Image
                            src={houseInHand}
                            className='object-cover w-full h-full'
                            alt={'house image'}
                        />
                    </div>
            
            </div>

        </div>
    )
}

export default WelcomeSection
