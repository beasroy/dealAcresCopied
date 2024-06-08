import Image from 'next/image'
import React from 'react'

import { MdOutlineBedroomParent } from 'react-icons/md'
import { MdOutlineBathroom } from 'react-icons/md'
import { PiGarageDuotone } from 'react-icons/pi'

const ProjectCard = ({
    img,
    title,
    address,
    bedroomCount,
    bathroomCount,
    area,
    hasGarage
}) => {
    return (
        <div className='flex flex-col col-span-1 shadow-lg bg-white '>
            <div className='min-h-1/2 w-full relative  ' >
                <Image src={img}
                    className='w-full max-h-full min-h-full   '
                    alt={title} width={400} height={800} />
            </div>

            <div className='max-h-1/4 px-1 md:px-4
        border-b border-b-black py-1 md:py-4'>
                <h3 className='font-bold text-base sm:text-lg md:text-xl'>
                    {title}
                </h3>
                <p className='text-[10px] xs:text-xs sm:text-sm md:text-base'>
                    {address}
                </p>
            </div>

            <div className='max-h-1/4 grid grid-cols-2 w-full sm:w-[70%] md:w-full  md:flex py-1 xs:py-2 md:py-4 gap-2 items-start  text-xs xs:text-sm px-1 xs:px-2  overflow-x-auto '>
                <div className='flex flex-col gap-2  '>
                    <span className='self-start font-bold'>
                        Bedrooms
                    </span>
                    <span className='grid grid-cols-2 '>
                        {
                            [...Array(bedroomCount)].map((_, index) => {
                                if (index < 3) {
                                    return (<span
                                        key={index}
                                        className='col-span-1'>
                                        <MdOutlineBedroomParent size={20} />
                                    </span>)
                                }
                                if (index === 3) {
                                    return (<span
                                        key={index}
                                        className='col-span-1 text-blue-400 flex justify-center items-center text-base font-bold'>
                                        +
                                        {bedroomCount - index}
                                    </span>)
                                }
                            }
                            )
                        }
                    </span>
                </div>
                <div className='flex flex-col gap-2  '>
                    <span className='self-start font-bold'>
                        Bathrooms
                    </span>
                    <span className='grid grid-cols-2 '>
                        {
                            [...Array(bathroomCount)].map((_, index) => (<span key={index} className='col-span-1'>
                                <MdOutlineBathroom size={20} />
                            </span>))
                        }
                    </span>
                </div>

                {hasGarage && <div className='flex flex-col gap-2  '>
                    <span className='self-start font-bold'>
                        Garage
                    </span>
                    <span>
                        {
                            [...Array(bathroomCount)].map((_, index) => (<span key={index}>
                                <PiGarageDuotone size={20} />
                            </span>))
                        }
                    </span>
                </div>}
                <div className='flex flex-col gap-2  '>
                    <span className='self-start font-bold'>
                        Area
                    </span>
                    <span>
                        {area} Sq Ft
                    </span>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard
