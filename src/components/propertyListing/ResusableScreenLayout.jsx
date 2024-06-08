import React from 'react'
import BannerLayout from './BannerLayout'
import HelpDetails from './HelpDetails'

const ResusableScreenLayout = ({
    NavigationComponent,
    startWithPic,
    showContact,
    bannerText,
    showSmiley,
    imgSrc,
    showThumps,
    lists,
    bgColor,
    PageFormComponent
}) => {
    return (
        <section className='md:mt-12 container mx-auto lg:w-4/5'>
            <NavigationComponent/>
            <div className='flex flex-col md:flex-row px-4 items-start justify-center gap-10 lg:gap-20 container mx-auto md:my-10 overflow-auto'>

                <div className='h-full w-[90%] max-md:mx-auto md:w-[50%] rounded-xl p-5 custom-border max-md:border-none'>
                    <PageFormComponent/>
                </div>

                <BannerLayout 
                startWithPic={startWithPic} 
                showContact={showContact} 
                bannerText={bannerText} 
                imgSrc={imgSrc} 
                showSmile={showSmiley}
                lists={lists}
                showThumps={showThumps}
                bgColor={bgColor}
                  />

                {showContact && <HelpDetails showOnMobile />}
            </div>
        </section>
    )
}

export default ResusableScreenLayout
