'use client'

import {useState, useEffect} from 'react'
import styles from './safety.module.css'
import Image from 'next/image'
const SafetySection = ({
    title,
    content,
    hasList,
    listHeader,
    lists,
    img,
    order
}) => {

    // const [showFull, setShowFull] = useState(false);
    return (
        <div>
            <div className='py-1 md:py-2 font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl'>
                {title}
            </div>
           

            
            <div className={`flex flex-col  
            min-[968px]:flex-row  gap-6 py-2 md:py-8 items-start`}>
                {(hasList || content) && (
                    <div className={`${!img ? 'min-[968px]:w-full' : 'min-[968px]:w-1/2'}`}>
                        <div className='text-justify text-sm xs:text-base'>
                            {content}
                        </div>

                        {hasList && (
                            <div>
                                {listHeader && <p className='font-bold text-base xs:text-lg sm:text-xl md:text-2xl py-1 md:py-2'>{listHeader}</p>}

                                <ul className='transition-all
                                px-8 text-sm xs:text-base flex flex-col'>
                                    {
                                    lists.map((list, index) => {

                                        return (<li className="transition-all duration-700 ease-in-out  list-disc" key={index}>{list}</li>)

                                        
                                    })
                                    
                                    }
                                </ul>
                                {/* <button 
                                onClick={() => setShowFull((prev) => !prev)}
                                className='
                                transition-all
                                text-blue-600
                                hover:text-blue-400 font-medium text-base md:text-lg px-8 '>
                                    {showFull ? 'Read Less' : 'Read More'}
                                </button> */}
                            </div>
                        )}
                    </div>
                )}

                
                {img && (
                    <div className={`relative mx-auto  w-full min-h-[400px]  min-[968px]:w-1/2 min-[968px]:max-h-[600px] ${order === 'reverse' ? '-order-1' : 'order-1'} hidden md:block`}>
                        <Image
                            src={`/safety/${img}`}
                            fill
                            className='object-cover w-full h-full'
                            alt={title}
                        />
                    </div>
                )}
            </div>

        </div>
    )
}

export default SafetySection
