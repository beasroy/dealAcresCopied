'use client';

import { useState } from 'react';
import NavigationBroker from '@/components/propertyListing/Navigation/NavigationBroker';
import Image from 'next/image';
import Link from 'next/link';
import { FaRupeeSign } from "react-icons/fa";
import PageWrapper from '@/components/propertyListing/PageWrapper';
import OuterWrapper from '@/components/propertyListing/OuterWrapper';
import InnerWrapper from '@/components/propertyListing/InnerWrapper';
import BannerLayout from '@/components/propertyListing/BannerLayout';
import HelpDetails from '@/components/propertyListing/HelpDetails';

const PricingSection = () => {


  const [brokenCharge, setBrokenCharge] = useState('');


  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [expectedPrice, setExpectedPrice] = useState('');
  const [pricePerSqYd, setPricePerSqYd] = useState('');




  const handleExpectedPriceChange = (e) => {
    setExpectedPrice(e.target.value);
  };

  const handlePricePerSqYdChange = (e) => {
    setPricePerSqYd(e.target.value);
  };

  const openPostModal = () => {
    setIsPostModalOpen(true);
  };

  const closePostModal = () => {
    setIsPostModalOpen(false);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    openFeedbackModal();
    closePostModal();
  };

  const openFeedbackModal = () => {
    setIsFeedbackModalOpen(true);
  };

  const closeFeedbackModal = () => {
    setIsFeedbackModalOpen(false);
  };





  const isContinueButtonDisabled =
    expectedPrice.trim() === '' ||
    pricePerSqYd.trim() === '' ||
    brokenCharge.trim() === '';

  return (
    <PageWrapper>
      <div className='hidden md:block'>
        <NavigationBroker />

      </div>
      <OuterWrapper>

        <InnerWrapper>
         <div className="space-y-4"> 
         <h1 className="">
            Price Details
          </h1>
          <div className='space-y-2'>
          <input
            type="text"
            className='py-1 xs:py-2 sm:py-4 px-2 rounded-lg w-[80%]  custom-border-2'
            placeholder="Expected Price"
            value={expectedPrice}
            onChange={handleExpectedPriceChange}
          />

          <input
            type="text"
            className='py-1 xs:py-2 sm:py-4 px-2 rounded-lg w-[50%]  custom-border-2'
            placeholder="Price per Sq.Yd"
            value={pricePerSqYd}
            onChange={handlePricePerSqYdChange}
          />
          </div>

          <div className='flex flex-wrap gap-2 md:gap-4   text-sm xs:text-base'>
            <div className='flex flex-row items-center gap-2'>
              <input
                type="checkbox"
                width={"unset"}
                height={"unset"}
                className=''
              />
              <p>All Inclusive Price</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <input
                type="checkbox"
                width={"unset"}
                height={"unset"}
                className=''
              />
              <p>Price Negoiable</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <input
                type="checkbox"
                width={"unset"}
                height={"unset"}
                className=''
              />
              <p>Tax and Govt. Charges Excluded</p>
            </div>
          </div>
          <div className='space-y-2'>
          <h1 className=''>Do You Charge Brokerage</h1>
          <div className='flex flex-wrap gap-2 md:gap-4   text-sm xs:text-base whitespace-nowrap'>
            <div className='flex flex-row gap-8'>
              <div className='flex flex-row items-center gap-2'>
                <input
                  type="checkbox"
                  width={"unset"}
                  height={"unset"}
                  className=''
                />
                <p>Yes</p>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <input
                  type="checkbox"
                  width={"unset"}
                  height={"unset"}
                  className=''
                />
                <p>No</p>
              </div>
            </div>
            <div className='flex flex-row gap-4'>
              <div className='flex flex-row items-center gap-2'>
                <input
                  type="checkbox"
                  width={"unset"}
                  height={"unset"}
                  className=''
                />
                <p>Fixed Charges</p>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <input
                  type="checkbox"
                  width={"unset"}
                  height={"unset"}
                  className=''
                />
                <p>Percentage of Price</p>
              </div>
            </div>


          </div>
          </div>

          <div className="relative ">
            <input
              type="text"
              className='py-[14px] sm:py-4 pl-4 px-2 rounded-lg w-[80%]  custom-border-2'
              value={brokenCharge}
              onChange={(e) => setBrokenCharge(e.target.value)} />
            <label className='absolute text-xs top-[20%] left-2 transform -translate-y-1/2'>Enter Brokrage Charges</label>
            <FaRupeeSign className='absolute top-[60%] left-1 transform -translate-y-1/2 text-lg ' />
          </div>

          <div className='py-4'>
            <div className='flex flex-wrap gap-2 md:gap-4   text-sm xs:text-base'>
              <input
                type="checkbox"
                width={"unset"}
                height={"unset"}
                className=''
              />
              <p>Brokerage Negotiable</p>
            </div>
            <Link href={'amenities'}>
            <button
              className={`w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white   hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 ${false ? 'cursor-not-allowed bg-gray-400' : ''
                }`}
              disabled={false}
            >
              Continue
            </button>
          </Link>
          </div>
         
         </div>

          <HelpDetails showOnMobile />
        </InnerWrapper>

        <BannerLayout bannerText={"Mention the Expected price of your property with your Brokerage Charges."} imgSrc={'/propertyListing/assets/home_coin.webp'} showContact startWithPic />

      </OuterWrapper>
    </PageWrapper>
  )
}

export default PricingSection;