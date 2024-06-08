import React from 'react'
import GuideCard from '@/components/blog/guides/GuideCard'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

const LocationGuides = ({
    guides

}) => {
    return (
        <div className='font-bold text-2xl py-4 my-4 '>


            <div className={``}>



                <div className={`flex gap-4 w-full flex-wrap min-[920px]:flex-nowrap justify-center min-[920px]:justify-normal   `}>

         
                    {
                        guides.map((guide, index) => {
                            return (
                                <div key={index} className='
                            w-[8rem]
                            sm:w-[10rem]
                            md:w-[11rem]
                            min-[920px]:w-[calc(100%/5-16px)]
                            min-[920px]:max-w-[160px]

                            '>


                                    <GuideCard
                                        variableWidth
                                        title={guide.title} img={guide.img} bgColor={guide.bgColor} textColor={guide.textColor} borderColor={guide.borderColor} key={index} />
                                </div>
                            )
                        })
                    }

                </div>
                <div className=' py-4 '>

                    <span className=' text-blue-500 font-normal text-xl flex items-center justify-center min-[920px]:justify-normal gap-2'>
                        <Link href='/guides' className=''>View More</Link>
                        <FaExternalLinkAlt size={20} />
                    </span>

                </div>



            </div>



        </div>
    )
}

export default LocationGuides
