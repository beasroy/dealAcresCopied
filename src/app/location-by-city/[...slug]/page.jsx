'use client'

import React, { useState, useEffect } from 'react';
import { allGuidesData } from '@/app/all-guides/allGuidesData';
import GuidesSlider from '@/components/all-guides/GuidesSlider';
import CityStateSelector from '@/components/locationCityWise/CityStateSelector';
import CityInformation from '@/components/locationCityWise/CityInformation';
import AboutCity from '@/components/locationCityWise/AboutCity';
import ExploreLocalitiesOfCities from '@/components/locationCityWise/ExploreLocalitiesOfCities';
import HotspotOfCities from '@/components/locationCityWise/HotspotOfCity';
import TopPropertyOfCity from '@/components/locationCityWise/TopPropertyOfCity';
import Faq from '@/components/locationCityWise/Fnqs';
import InterestingReads from '@/components/exploreLocality/ViewAllComponents/InterestingReads';
import Popup from '@/components/locationCityWise/Popup';

const LocationByCity = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupClosed, setPopupClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!popupClosed) {
        setShowPopup(true);
        
        setTimeout(() => {
          setPopupClosed(true);
          setShowPopup(false);
        }, 5000);
      }
    }, 10000); 

    return () => {
      clearTimeout(timer);
    };
  }, [popupClosed]);

  const handleClosePopup = () => {
    console.log('Closing popup...');
    setPopupClosed(true);
    setShowPopup(false);
  };


  return (
    <div className="px-[15%] py-[1.5rem] max-lg:px-[5%] relative">
      <CityStateSelector />
      <CityInformation />
      <AboutCity />
      <ExploreLocalitiesOfCities />
      <HotspotOfCities />
      <TopPropertyOfCity />
      <Faq />

      <div className='mt-10'>
        <h2 className="text-3xl font-bold  max-lg:text-2xl">Start with these manuals </h2>
        <p className="mt-2 text-gray-600">Know all that you need to know before you start</p>
        <div className="max-w-screen-xl mx-auto my-3">
          <GuidesSlider allGuides={allGuidesData} />
        </div>
      </div>

      <InterestingReads />

      {showPopup && (
        <div key={Math.random()} className='popup-container'>
          <Popup onClose={handleClosePopup} />
        </div>
      )}
    </div>
  );
};

export default LocationByCity;
