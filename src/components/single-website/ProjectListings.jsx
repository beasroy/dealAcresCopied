import React from 'react'
import ProjectCard from './ProjectCard'
import imgSrc from '../../../public/single-website/bunglow.webp'
import src2 from '../../../public/single-website/living-area.jpg'
const ProjectListings = () => {
    return (
        <div className='bg-[##F6F6F6] mb-12'>

            <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
                {[...Array(6)].map(
                    (_, index) => {
                        return (
                            <div className='col-span-1' key={index}>
                                <ProjectCard 
                                img={index % 2 === 0 ? imgSrc : src2}
                                title={"Off the Arbour"}
                                address="Sector 63, Gurgaon, Haryana, India"
                                bathroomCount={1}
                                bedroomCount={1}
                                hasGarage={true}
                                area={700}
                                />
                            </div>
                        )
                    }
                )}
            </div>


        </div>
    )
}

export default ProjectListings
