import React from "react";
import BusinessWizardFormInput from "./BusinessWizardFormInput";

const firstPageInputLabel = [
  "Business Name",
  "Legal Business Name",
  "Building",
  "Street",
  "Landmark",
  "Area",
  "City",
  "PinCode",
  "State",
];

const BusinessWizardFormPage1 = ({ onSaveAndContinue }) => {
  return (
    <div className="py-5 md:flex md:items-center md:justify-center md:mt-2">
      <div className="w-full space-y-5 md:pl-8 md:pr-3">
        {firstPageInputLabel.map((label, index) => (
          <BusinessWizardFormInput key={index} label={label} />
        ))}

        <div className="w-full flex justify-end max-md:pr-0 max-md:justify-center pr-2 md:pr-0 mt-3">
          <button
            className="font-semibold text-sm md:text-lg bg-blue-600 px-4 py-2 text-white rounded-md text-center"
            onClick={onSaveAndContinue}
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessWizardFormPage1;
