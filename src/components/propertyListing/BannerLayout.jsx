import Image from 'next/image'
import React from 'react'
import HelpDetails from './HelpDetails'

const BannerLayout = ({
    startWithPic,
    bannerText,
    imgSrc,
    bgColor,
    showContact,
    showThumps,
    showSmiley,
    lists
}) => {

    // relative max-md:after:content-[""] after:absolute after:bg-[#c9e0ee] after:w-screen after:-left-4 after:h-full after:-z-10 after:top-0 after:rounded-b-[2rem] rounded-b-[2rem] md:rounded-xl md:after:hidden after:max-w-screen-sm
    return (
       <div className={`w-full md:w-[400px] md:sticky md:top-20 md:h-fit ${startWithPic && '-order-1 md:order-2' } `}>
         <div className={`w-full md:w-full     bg-[#f1f6fd] rounded-b-[2rem] md:rounded-xl overflow-hidden  `}>
            <div className={`h-full  w-full   p-4 flex flex-row gap-2  md:flex-col items-center  ${bgColor && bgColor}
 max-md:pb-0 pt-8 sm:pt-16 md:pt-0 `}>
                {showThumps && <Image src={'/propertyListing/assets/thumbsup.svg'} alt='authentication' height={40} width={40} className='mt-3 mb-10' />}

                {bannerText && <h1 className="bannerHeading  md:mb-4 text-center md:mt-20 pt-8 pb-16 ">
                    {/* This information creates a transparency and build trust with buyers/tenants */}
                    {bannerText}

                </h1>}

                {lists && <ul className="list-disc pl-3 sm:pl-12  pb-16 text-base xs:text-xl  md:mt-16">
                    {
                        lists.map((list, i) => <li className='mb-2 leading-[normal]' key={i}>{list}</li>)
                    }
                </ul>}

     
                {/* '/propertyListing/assets/agent.png' */}
                <Image src={imgSrc} alt='authentication' height={280} width={280} className='md:mt-3 md:mb-10 max-w-[200px] max-h-[200px] min-w-[120px] min-h-[120px] w-1/2 max-md:self-end' />
                {showContact && <HelpDetails showOnDesktop />}

            </div>

        </div>
            {showSmiley &&
                <div className='hidden h-full  mt-10 w-full max-w-full rounded-xl bg-[#f1f6fd] p-4 md:flex flex-col items-center'>
                    <Image src={'/propertyListing/assets/smiley.webp'} alt='smiley' height={100} width={100} className='mt-3 mb-2' />
                    <h1 className='text-2xl'>You are Almost There</h1>
                </div>}

       </div>

    )
}

export default BannerLayout
