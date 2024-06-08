import AboutEthics from '@/components/about/AboutEthics'
import AboutGoal from '@/components/about/AboutGoal'
import AboutIntro from '@/components/about/AboutIntro'
import Leaders from '@/components/about/LeaderTabs'
import MemberCard from '@/components/about/MemberCard'
import React from 'react'

import member1 from '../../../public/about-us/team-member-1.webp'
import member2 from '../../../public/about-us/team-member-2.webp'
import member3 from '../../../public/about-us/team-member-3.webp'
import TeamSlider from '@/components/about/TeamSlider'

const About = () => {
  return (
    <>
      <div className='max-w-screen-xl mx-auto py-4 md:py-8'>
        <div className='px-4 sm:px-8 py-4'>
          <AboutIntro />
        </div>

        {/* Ethics Tabs */}
        <div className='px-4  sm:px-8 py-4'>
          <AboutEthics />
        </div>

        {/* Leaders Tabs */}
        <div className='px-4 sm:px-8 py-4'>
          <Leaders />
        </div>




      </div>
      {/* <div className='flex justify-around'>
        <MemberCard img={member1}/>
        <MemberCard img={member2}/>
        <MemberCard img={member3}/>
      </div> */}

      <div className='py-4 md:py-8'>
        <TeamSlider/>
      </div>
      <div className=''>
        <AboutGoal />
      </div>
    </>
  )
}

export default About