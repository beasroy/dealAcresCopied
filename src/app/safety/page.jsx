import SafetyBanner from '@/components/safety/SafetyBanner'
import React from 'react'
import safetyData from './safetyData.json'
import bannerBg from '../../../public/safety/banner.webp'
import SafetyInro from '@/components/safety/SafetyIntro'
import SafetySection from '@/components/safety/SafetySection'
import ContactStrip from '@/components/safety/ContactStrip'
import Guides from '@/components/blog/guides/Guides'
import MobileSafetyBanner from '@/components/safety/MobileSafetyBanner'

const guidesData = [
  {
    "title": "Buyer's Manual",
    "img": "buyers-guide.png",
    "bgColor": "#FADDC6",
    "borderColor": "#F6C094",
    "textColor": "#F6A05A",
    "content": "Are you looking to buy your first home? Our Buyer's Guide will help you make informed decisions. Whether you prefer a luxurious apartment or a cozy villa, this guide covers it all. Explore financing options, understand the home buying process, and gain valuable insights into property inspections and negotiations."
  },
  {
    "title": "Seller's Manual",
    "img": "sellers-guide.png",
    "bgColor": "#FFF5D8",
    "borderColor": "#FFEBB0",
    "textColor": "#FDBD00",
    "content": "Ready to sell your property? Our Seller's Guide provides valuable insights and tips to maximize your property's value. Get started with confidence. Learn about pricing strategies, home staging, and marketing techniques to attract potential buyers. Navigate the selling process with ease."
  },
  {
    "title": "Rental Manual",
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
  },
  {
    "title": "Rera Manual",
    "img": "rera.png",
    "textColor": "#EC104D",
    "bgColor": "#FFE6E6",
    "borderColor": "#FF6969",
    "content": "Stay informed about real estate regulations with our Rera Manual. Navigate the legal landscape confidently with this comprehensive guide. Understand the Real Estate Regulatory Authority (RERA) laws, registration process, and compliance requirements. Ensure transparency and trust in your real estate transactions.",
  
  }

]

const SafetyGuide = () => {


  return (
    <div className='overflow-x-hidden'>



      <div className="md:hidden block">
        <MobileSafetyBanner />
      </div>

      <div className='max-w-screen-xl mx-auto px-4'>
        <div className="hidden md:block">
          <SafetyBanner img={bannerBg} heading="Safety Guide" />
        </div>


        <div className='py-4 md:py-8'>

          <SafetyInro title={safetyData.intro.title} content={safetyData.intro.content} />
        </div>

        <div>
          {
            safetyData.sections.map((section, index) => (
              <SafetySection key={index} title={section.title}
                content={section.content}
                hasList={section.has_list}
                listHeader={section.list_header}
                lists={section.lists}
                img={section.img}
                order={index === 2 ? 'reverse' : 'normal'}
              />
            ))
          }
        </div>

      <div className='flex flex-col gap-3 md:hidden font-bold  py-2'>
        <h3 className=' font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl'>Need to Get in Touch?</h3>
        <div className="text-sm xs:text-base sm:text-lg md:text-xl ">
          <p>CONTACT US</p>
          <p>7015963201, 8307757571</p>
        </div>
        <div className="text-sm xs:text-base sm:text-lg md:text-xl ">
          <p>WRITE TO US AT,</p>
          <p>contactus@dealacres.com</p>
        </div>
      </div>
      </div>

      <div className='hidden md:block my-4'>
        <ContactStrip />
      </div>


      <div className='max-w-screen-xl mx-auto py-4  hidden md:block'>
        {/* <div className='px-4 md:pl-12 '>
        <p className='font-bold text-3xl'></p>
        <p className='font-light text-xl'></p>
      </div> */}
        <Guides showHeading guides={guidesData} heading="Explore Our More Manuals" subheading="Know all that you need to know before you start." />
      </div>
    </div>
  )
}

export default SafetyGuide
