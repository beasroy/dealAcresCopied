"use client";

import React, { useState, useEffect } from "react";

import BusinessWizardFormPage1 from "./BusinessWizardFormPage1";
import BusinessWizardFormPage2 from "./BusinessWizardFormPage2";
import BusinessWizardFormPage3 from "./BusinessWizardFormPage3";
import BusinessWizardFormPage4 from "./BusinessWizardFormPage4";
import BusinessWizardFormPart3Mobile from "./BusinessWizardFormPart3Mobile";

const BusinessInformationWizardForm = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    if(typeof window === 'undefined') return;
    window.scrollTo(0, 0);
  }, [step]);

  return (
    <div>
      <h2 className="text-2xl font-bold">Business Information</h2>
      <div className="flex items-center justify-start w-full border-b-[1px] border-gray-600 mt-5">
        <ul className="flex items-center space-x-14 text-lg text-gray-600 max-md:hidden">
          <li
            className={`${
              step >= 1
                ? "font-semibold border-b-[3px] border-blue-600 text-blue-600"
                : ""
            }`}
          >
            Location Information
          </li>
          <li
            className={`${
              step >= 2
                ? "font-semibold border-b-[3px] border-blue-600 text-blue-600"
                : ""
            }`}
          >
            Contact Information
          </li>
          <li
            className={`${
              step >= 3
                ? "font-semibold border-b-[3px] border-blue-600 text-blue-600"
                : ""
            }`}
          >
            Other Information
          </li>
          <li
            className={`${
              step >= 4
                ? "font-semibold border-b-[3px] border-blue-600 text-blue-600"
                : ""
            }`}
          >
            Upload Logo/ Image/Video
          </li>
        </ul>
      </div>

      {step == 1 && (
        <BusinessWizardFormPage1 onSaveAndContinue={() => setStep(step + 1)} />
      )}

      {step == 2 && (
        <BusinessWizardFormPage2
          onPreviousClick={() => setStep(step - 1)}
          onSaveAndContinue={() => setStep(step + 1)}
        />
      )}

      {step == 3 && (
        <div>
          <BusinessWizardFormPage3
            onPreviousClick={() => setStep(step - 1)}
            onSaveAndContinue={() => setStep(step + 1)}
          />
          {/* <BusinessWizardFormPart3Mobile
            onPreviousClick={() => setStep(step - 1)}
            onSaveAndContinue={() => setStep(step + 1)}
          /> */}
        </div>
      )}

      {step == 4 && (
        <BusinessWizardFormPage4 onPreviousClick={() => setStep(step - 1)} />
      )}
    </div>
  );
};

export default BusinessInformationWizardForm;
