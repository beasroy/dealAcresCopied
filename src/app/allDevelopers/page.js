import React from 'react'
import styles from "./page.module.css"
import ExploreBuilder from '@/components/AllDevelopers/ExploreBuilder'
import SideContentContainer from '@/components/property/sidecontentcontainer/SideContentContainer'
import Sidebar from '@/components/AllDevelopers/Sidebar'
import Explore from '@/components/Homepage/explore/Explore'
import Link from 'next/link'
import ReadMoree from '@/components/developer/ReadMoree'
import ReadMore from '@/components/propertyListing/ReadMore/ReadMore'
import Insights from '@/components/AllDevelopers/Insights'

const page = () => {
  return (
    <div>
      <p className={styles.heading}>
        <Link href="/">Home</Link> {' > '}
        <Link href="/allDevelopers">Top Builder in Gurgaon</Link>
      </p>
      <h2 className={styles.title}>Explore Top Builders in Gurgaon</h2>
      <div className={styles.Layout}>
        <div className={styles.mainContainer}>
          <ExploreBuilder />
        </div>
        <div className={styles.Sidebar}>
          <SideContentContainer Addbox={true} />
          <Sidebar />
        </div>
      </div>

      <div className='hidden md:block'>
        <div className='mx-[8rem] mt-5 ' >
          <ReadMoree />


        </div>
        <div className='mx-[10rem] mb-[2rem]' >
          <Explore />
        </div>
      </div>
      <div className='pb-4 md:max-lg:max-w-screen-md md:mx-auto lg:mx-[8rem] px-4 sm:px-8 md:px-0 md:hidden ' >
        <ReadMore isFullScreen={true} />

        <Explore />

      </div>


    </div>

  )
}

export default page
