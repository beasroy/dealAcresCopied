import React from "react";
import Select from "react-select";
import BusinessWizardFormInput2 from "./BusinessWizardFormInput2";

const labelArray = [
  "Landline No:",
  "Mobile No:",
  "Toll Free No:",
  "Email ID:",
  "Website:",
  "Facebook:",
  "Twitter:",
  "Instagram:",
  "Youtube:",
  "Others:",
];

const BusinessWizardFormPage2 = ({ onSaveAndContinue, onPreviousClick }) => {
  return (
    <div className="py-5 md:p-5 flex flex-col md:flex-row items-center justify-center md:mt-2">
      <div className="w-full space-y-5 md:pl-[8rem] md:px-8">
        <div className="flex flex-row items-center justify-between w-full space-y-2 md:space-x-4">
          <p className="whitespace-nowrap text-[14px] w-[28%] md:w-1/3 md:text-xl">Contact Person:</p>
          <div className=" flex items-baseline md:items-center justify-between max-md:flex-row max-md:space-y-1 max-md:space-x-2 w-[64%]  md:w-4/5">
            <Select
              options={[
                { value: "Mr", label: "Mr" },
                { value: "Mrs", label: "Mrs" },
                { value: "Ms", label: "Ms" },
              ]}
              className="max-md:w-3/5"
              placeholder="Mr"
            />
            <input
              className="w-[80%] md:w-1/3 border-2 border-blue-200 text-gray-600 rounded-md focus:outline-blue-500 py-1 md:py-2 pl-3"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-full max-md:hidden md:w-1/3 border-2 border-blue-200 text-gray-600 rounded-md focus:outline-blue-500 py-2 pl-3"
              type="text"
              placeholder="Designation"
            />
          </div>
        </div>

        {labelArray.map((label, index) => (
          <BusinessWizardFormInput2 key={index} label={label} />
        ))}

        <div className="w-full flex flex-col md:flex-row justify-between pr-2 md:pr-0 mt-5">
          <button
            className="mb-2 md:mb-0 font-semibold text-sm md:text-lg bg-blue-600 px-4 py-2 text-white rounded-md text-center"
            onClick={onPreviousClick}
          >
            Previous
          </button>

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

export default BusinessWizardFormPage2;
