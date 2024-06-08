'use client';
import { useState,useEffect } from "react";

import BusinessInformationWizardForm from "@/components/businessListing/BusinessInformationWizardForm";
import MobileBusinessWizardForm from "@/components/businessListing/MobileBusinessWizardForm";

const BusinessInformation = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {

    if (typeof window !== 'undefined') {
      const setInitialScreenState = () => {
        setIsLargeScreen(window.innerWidth > 767);
      };


      setInitialScreenState();


      const handleResize = () => {
        setIsLargeScreen(window.innerWidth > 767);
      };


      window.addEventListener('resize', handleResize);


      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    isLargeScreen ? (
      <div className="max-w-screen-xl mx-auto p-10">
        <BusinessInformationWizardForm />
      </div>
    ) : (
      <div className="max-w-screen-md mx-auto p-5">
        <MobileBusinessWizardForm />
      </div>
    )
  );
};

export default BusinessInformation;