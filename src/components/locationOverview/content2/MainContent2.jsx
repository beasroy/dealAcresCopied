"use client"
import styles from './maincontent2.module.css'
import {Lato} from 'next/font/google'
import Cities from '@/components/Homepage/Cities/Cities'
import InsightReview from './InsightReview'
import Hotspots from './Hotspots'
import Photos from './Photos'
import Topdev from './Topdev'
import Guides from '@/components/blog/guides/Guides'
import IntrestingReading from './IntrestingReads'
import FAQ from '@/components/property/maincontentcontainer/FAQ'
import {data} from './dummydata';
import GuideCard from '@/components/blog/guides/GuideCard'
import LocationGuides from './LocationGuides'
import PopularProjects from '../content1/PopularProjects'
import ArticleSlider from '@/components/faq/ArticleSlider'
import GuidesSlider from '@/components/all-guides/GuidesSlider'
import { allGuidesData } from '@/app/all-guides/allGuidesData'
import AgentLinks from './AgentLinks/AgentLinks'
import ReadMore from '@/components/propertyListing/ReadMore/ReadMore'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300','400','700','900']
})

const guidesData = [
    {
      "title": "Buyer's Guide",
      "img": "buyers-guide.png",
      "bgColor": "#FADDC6",
      "borderColor": "#F6C094",
      "textColor": "#F6A05A",
      "content": "Are you looking to buy your first home? Our Buyer's Guide will help you make informed decisions. Whether you prefer a luxurious apartment or a cozy villa, this guide covers it all. Explore financing options, understand the home buying process, and gain valuable insights into property inspections and negotiations."
    },
    {
      "title": "Seller's Guide",
      "img": "sellers-guide.png",
      "bgColor": "#FFF5D8",
      "borderColor": "#FFEBB0",
      "textColor": "#FDBD00",
      "content": "Ready to sell your property? Our Seller's Guide provides valuable insights and tips to maximize your property's value. Get started with confidence. Learn about pricing strategies, home staging, and marketing techniques to attract potential buyers. Navigate the selling process with ease."
    },
    {
      "title": "Rental Guide",
      "img": "rental-guide.png",
      "bgColor": "#F1F8D7",
      "borderColor": "#D3E1A0",
      "textColor": "#95BD00",
      "content": "Looking for a rental property? Our Rental Guide simplifies the process, helping you find the perfect place. Explore your options with ease. Learn about rental agreements, tenant rights, and tips for a smooth move-in process. Make informed decisions when renting your next home."
    },
    {
      "title": "Home Interior",
      "img": "home-interior-guide.png",
      "bgColor": "#F6E6FA",
      "borderColor": "#CB6CE6",
      "textColor": "#CB6CE6",
      "content": "Transform your home's interior with our Home Interior Guide. Discover trendy decor ideas and create a space you'll love. Explore the latest interior design trends, color schemes, and furniture selection tips. Turn your house into a stylish and comfortable haven."
    },
    {
      "title": "Home Vastu",
      "textColor": "#38B6FF",
      "img": "home-vastu-guide.png",
      "bgColor": "#E4FAFA",
      "borderColor": "#38B6FF",
      "content": "Enhance the harmony of your home with Vastu principles. Our Home Vastu Guide offers insights for a balanced and positive living environment. Learn about the significance of directions, Vastu dos and don'ts, and practical tips for a Vastu-compliant home."
    }
  ]
function MainContent2() {
  const dynamicSlidesToShow = 3;
  return (
    <div className={styles.mainContainer2} style={lato.style}>
        {/* <div className='md:max-w-[68%]'>  
        <h5>Popular Projects in Sector 37D</h5>
        <PopularProjects/>
      </div> */}
       <div id='SimilarLocalities' className='w-[83%]'>
            <h5 className='pb-2'>Explore nearby localities</h5>
            <Cities slidesToShow={dynamicSlidesToShow} />
            </div>
    <div className='w-[83%]'>
    <InsightReview/>
    </div>
 
     
      <div className='w-[83%]'>
      <h5>Hotspots in Gurgaon</h5>
            <Hotspots/>
      </div>
           
       
        {/* <div className='w-[80%]'>
            <h5>Photos</h5>
            <Photos/>
        </div> */}
      <div id='Developer'>
            <h5 className='pb-2'>Top Developers in Sector 37D</h5>
            <Topdev numberOfCards={5} gap='10px'/>
            </div>
        <div id='Guides' className='w-[83%]'>
            <h5 className='!mb-0'>Start with these manuals</h5>
            <p className='text-gray-400 text-lg py-2'>Know all that you need to know before you start.</p>
            {/* <LocationGuides guides={guidesData}/> */}

            <GuidesSlider allGuides={allGuidesData} handleTabChange={(value) => value} isAllGuides={false}/>
           
        </div>
        <div >
            <h5>Interesting Readings</h5>
            {/* <IntrestingReading /> */}
            <ArticleSlider/>
        </div>
        <div>
            <h5>Frequently Asked Questions</h5>
            <FAQ  faqdata = {data.mainContent.FaqData} />
        </div>
        <div className="hidden md:block">
          <AgentLinks />
        </div>
    </div>
  )
}

export default MainContent2