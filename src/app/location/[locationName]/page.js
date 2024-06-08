import styles from './page.module.css'
import {data} from './dummyLocationData'
import ImageContainer from '@/components/property/imagecontainer/ImageContainer'
import Navbar03 from "@/components/property/navbar2/Navbar03"
import MainContent1 from '@/components/locationOverview/content1/MainContent1'
import SideContent1 from '@/components/locationOverview/content1/SideContent1'
import MainContent2 from '@/components/locationOverview/content2/MainContent2'

const page = () => {
  return (
    <>

        <Navbar03 />
     
        <div className={styles.locationOverviewContainer}>
            <div className={styles.locationOverviewTopContainer}>
                <ImageContainer imageData = {data.imageContainer} floorPlan = {false} imageButtonPosition = "imageButtonClass2"/>
                <div className = {`${styles.mapContainer} !hidden md:!block`}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224568.15030524903!2d76.9897491!3d28.42295755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1695029524180!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className={styles.locationOverviewContent1Container}>
                <MainContent1/>
                <SideContent1/>
            </div>
            <div className={styles.locationOverviewContent2Container}>
                <MainContent2/>
            </div>
            {/*
            content1 container
            (maincontent1,sidecontent)
            content2container
             */}
        </div>
    </>
  )
}

export default page