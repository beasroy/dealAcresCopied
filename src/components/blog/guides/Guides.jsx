import React from 'react'
import GuideCard from './GuideCard'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'
import styles from './styles.module.css'

const Guides = ({
    guides,
    showHeading,
    heading,
    align,
    subheading
}) => {
    return (
        <div className='font-bold text-2xl p-4 my-4 '>
            

            <div className={`${subheading ? 'mx-0' : 'mx-auto'}`}>

            {showHeading && <div className={`py-2 text-center ${align === 'center' ? 'md:text-center' : 'md:text-left'} `}>
                <div className='font-bold'>
                    {heading}
                </div>
                <div className='text-lg font-light'>
                    {subheading}
                </div>
            </div>}

            <div className={`${styles.guidesContainer} flex  flex-row  md:grid  md:grid-cols-6 gap-8 justify-center items-center place-content-center mt-2`}>

                {
                    guides.map((guide, index) => {
                        return (
                            <GuideCard title={guide.title} img={guide.img} bgColor={guide.bgColor} textColor={guide.textColor} borderColor={guide.borderColor} key={index} />
                        )
                    })
                }

            </div>
            <div className='flex flex-col py-4 justify-self-end'>

                <span className='md:self-end text-blue-500 font-normal text-xl flex items-center justify-center gap-2'>
                    <Link href='/guides' className=''>View More</Link>
                    <FaExternalLinkAlt size={20} />
                </span>

            </div>



            </div>
            {/* <div className={`${subheading ? 'mx-0' : 'mx-auto'}`}>

            {showHeading && <div className={`py-2 ${align === 'center' ? 'text-center' : 'text-left'} `}>
                <div className='font-bold'>
                    {heading}
                </div>
                <div className='text-lg font-light'>
                    {subheading}
                </div>
            </div>}

            <div className={`${styles.guidesContainer} flex flex-wrap  justify-center items-center gap-8 `}>

                {
                    guides.map((guide, index) => {
                        return (
                            <GuideCard title={guide.title} img={guide.img} theme={guide.theme} key={index} />
                        )
                    })
                }

            </div>


            </div> */}

            

        </div>
    )
}

export default Guides
