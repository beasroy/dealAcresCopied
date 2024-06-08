'use client';
import LocationInput from '@/app/propertylisting/commercial/user/agent/location-details/LocationInput';
import BannerLayout from '@/components/propertyListing/BannerLayout';
import HelpDetails from '@/components/propertyListing/HelpDetails';
import InnerWrapper from '@/components/propertyListing/InnerWrapper';
import Navigation from '@/components/propertyListing/Navigation/Navigation';
import OuterWrapper from '@/components/propertyListing/OuterWrapper';

import Link from 'next/link';

import { useState } from 'react';

const LocationDetails = () => {
  const [formData, setFormData] = useState({
    state: '',
    city: '',
    projectName: '',
    area: '',
    houseNo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isFormValid = () => {
    const { state, city, projectName, area } = formData;
    return state && city && projectName && area;
  };

  return (
    <section className='md:mt-12 md:container mx-auto lg:w-4/5'>
      <Navigation />
      <OuterWrapper>
    
        <BannerLayout showContact bannerText={"An Accurate Location is the most essential as it helps you to connect the perfect buyer or tenant"} imgSrc={'/propertyListing/assets/location.png'}/>

        <InnerWrapper>
          <h1 className="font-medium md:font-bold md:text-2xl text-xl  my-2">Your Property Location?</h1>
          {['state', 'city', 'projectName', 'area', 'houseNo'].map((fieldName) => (
             <LocationInput
             key={fieldName}
             inputName={fieldName}
             inputPlaceholder={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
             onInputChange={handleInputChange}
           />
          ))}
          <Link href={isFormValid() ? 'property-profile' : '#'}>
            <button
              disabled={!isFormValid()}
              className={`w-full rounded-md px-8 py-3 font-bold text-white max-md:mb-2 md:my-3 hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600 
              text-sm xs:text-base
      ${!isFormValid() ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600'}`}
            >
              Continue
            </button>
          </Link>
        </InnerWrapper>

        <HelpDetails showOnMobile/>
      </OuterWrapper>
    </section>
  );
};

export default LocationDetails;
