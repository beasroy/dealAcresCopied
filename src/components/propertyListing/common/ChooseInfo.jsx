'use client';
import { useState } from 'react';
import Image from 'next/image'
import Button from '@/components/propertyListing/Button/Button';
import Link from 'next/link';
import InnerWrapper from '@/components/propertyListing/InnerWrapper';
import OuterWrapper from '@/components/propertyListing/OuterWrapper';
import HelpDetails from '@/components/propertyListing/HelpDetails';


const ChooseInfo = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const getDynamicLink = () => {

    switch (selectedOption) {
      case 'owner':
        return 'owner/location-details';
      case 'agent':
        return 'agent/agent-details';
      case 'builder':
        return 'builder/location-details';
      default:
        return '#';
    }
  };

  return (
    
    <OuterWrapper>
      <InnerWrapper>
        <h1 className="font-bold bannerHeading md:mt-16 pb-3 sm:pb-4">
          To Continue Please let us Know what you are?
        </h1>
        <div className='flex gap-1 xs:gap-2 sm:gap-4  flex-row items-center justify-between md:my-10 overflow-x-auto pb-3 sm:pb-4'>
          <div className='w-1/3 xs:w-full'>
            <Button heading={'An Owner'} onClick={() => handleOptionSelect('owner')} hashClick={true} size={"extrasmall"}> </Button>

          </div>
          <div className='w-1/3 xs:w-full'>
            <Button heading={'A Builder'} onClick={() => handleOptionSelect('builder')} hashClick={true} size={"extrasmall"}> </Button>

          </div>
          <div className='w-1/3 xs:w-full'>
            <Button heading={'A Agent'} onClick={() => handleOptionSelect('agent')} hashClick={true} size={"extrasmall"}> </Button>

          </div>
        </div>
        <p className='md:w-[85%] text-sm sm:text-base md:text-xl md:mb-10 pb-3 sm:pb-4'>Please choose correctly, if you want to change in the future, it done through profile section</p>
        <Link href={getDynamicLink()} scroll={false}>
          <button className='w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white md:mb-16  hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600' >Continue</button>
        </Link>
      </InnerWrapper>

      <div className='h-full w-full md:w-[400px] rounded-xl bg-[#f1f6fd] p-4 flex flex-row md:flex-col items-center -order-1 md:order-2
      overflow-hidden
       rounded-b-[2rem] md:rounded-xl md:after:hidden after:max-w-screen-sm max-md:pb-0 pt-8 sm:pt-16 md:pt-0 '>
        <h1 className="text-base xs:text-xl  md:mb-4 text-center md:mt-20 pt-8 pb-16 ">
          This information creates a transparency and build trust with buyers/tenants</h1>
        <Image src={'/propertyListing/assets/agent.webp'} alt='authentication' height={280} width={280} className='md:mt-3 md:mb-10 max-w-[200px] max-h-[200px] min-w-[120px] min-h-[120px] w-1/2 max-md:self-end' />
        <HelpDetails showOnDesktop/>
      </div>

      <div className='block md:hidden text-center w-full max-md:py-4'>
        <h1 className='font-bold text-xl'>Need Help?</h1>
        <p className='text-lg'>You Can Email Us</p>
        <p className='text-lg text-blue-600 md:mb-20'>Contact@dealacres.com</p>
      </div>
    </OuterWrapper>
  )
}

export default ChooseInfo