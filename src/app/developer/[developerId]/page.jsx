import styles from './page.module.css'
import {Lato} from 'next/font/google'
import Header from '@/components/singleDeveloper/Header'
import Maincontent from '@/components/singleDeveloper/mainContent/Maincontent'
import SideContentContainer from '@/components/property/sidecontentcontainer/SideContentContainer'
import Topdev from '@/components/locationOverview/content2/Topdev'
import IntrestingReading from '@/components/locationOverview/content2/IntrestingReads'
import FAQ from '@/components/property/maincontentcontainer/FAQ'
import NewHeader from '@/components/singleDeveloper/NewHeader'
import ReadMore from '@/components/propertyListing/ReadMore/ReadMore'
import './singledevpage.css'
import Link from 'next/link'
import { GoLinkExternal } from "react-icons/go";

const lato = Lato({
    subsets: ['latin'],
    weight: ['300','400','700','900']
})

const FaqData = [
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
]

function page() {
    return(
        <>
            <div className='hidden md:block'><Header/></div> 
            <div className='md:hidden'><NewHeader/></div>
            <div style={lato.style} className={styles.singleDevPageContainer}>
                <div className={styles.singleDevPageContentContainer}>  
                    <Maincontent/>
                    <SideContentContainer title='M3M India Pvt. Ltd'/>
                </div>
                <div className="mt-4">
                    <h5>Other Developers</h5>
                    <Topdev/>
                    <Link className='inline-flex flex-row gap-1 items-center text-sm sm:text-base md:text-lg lg:text-xl text-blue-500 underline font-bold pt-4' href={'#'}>Top Builders in Gurgaon <GoLinkExternal size={20}/> </Link>
                </div>

                <div>
                    
                    {/* <IntrestingReading/> */}
                    <ReadMore isFullScreen={true}/>
                </div>
                <div className='my-4'>
                    <h5>Frequently Asked Questions</h5>
                    <FAQ  faqdata = {FaqData} />
                </div>
            </div>
        </>
    )
}

export default page