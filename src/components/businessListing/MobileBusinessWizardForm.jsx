"use client";

import React, { useState, useEffect } from "react";

import BusinessWizardFormPage1 from "./BusinessWizardFormPage1";
import BusinessWizardFormPage2 from "./BusinessWizardFormPage2";
import BusinessWizardFormPage3 from "./BusinessWizardFormPage3";
import BusinessWizardFormPage4 from "./BusinessWizardFormPage4";
import BusinessWizardFormPart3Mobile from "./BusinessWizardFormPart3Mobile";

const MobileBusinessWizardForm = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);


  const getHeadings = () => {
    switch (step) {
      case 1:
        return ["Location Information"];
      case 2:
        return ["Location Information", "Contact Information"];
      case 3:
        return ["Contact Information", "Other Information"];
      case 4:
        return ["Other Information", "Upload Logo/Image/Video"];
      default:
        return [];
    }
  };

  const [currentHeading, nextHeading] = getHeadings();

  return (
    <div>
      <h2 className="text-[20px] font-bold md:mt-0 mt-2">Business Information</h2>
      <div className="flex items-center justify-start w-full border-b-[1px] border-gray-600 mt-5">
        <ul className="flex items-center space-x-4  text-[14px] text-gray-600 ">
          <li
            className={`${
              step >= 1 ? "font-semibold border-b-[3px] border-blue-600 text-blue-600" : ""
            }`}
          >
            {currentHeading}
          </li>
          <li
            className={`${
              step >= 2 ? "font-semibold border-b-[3px] border-blue-600 text-blue-600" : ""
            }`}
          >
            {nextHeading}
          </li>
        </ul>
      </div>

       {step === 1 && (
        <BusinessWizardFormPage1 onSaveAndContinue={() => setStep(step + 1)} />
      )} 

      {step === 2 && (
        <BusinessWizardFormPage2
          onPreviousClick={() => setStep(step - 1)}
          onSaveAndContinue={() => setStep(step + 1)}
        />
      )}

      {step === 3 && (
        <div>
          <BusinessWizardFormPage3
            onPreviousClick={() => setStep(step - 1)}
            onSaveAndContinue={() => setStep(step + 1)}
          />
            <BusinessWizardFormPart3Mobile
            onPreviousClick={() => setStep(step - 1)}
            onSaveAndContinue={() => setStep(step + 1)}
          />  
        </div>
      )}

      {step === 4 && (
        <BusinessWizardFormPage4 onPreviousClick={() => setStep(step - 1)} />
      )}
    </div>
  );
};

export default MobileBusinessWizardForm;
