import React from "react";

const BusinessWizardFormInput = ({ label, onChange }) => {
  return (
    <div className="flex flex-row items-center justify-between w-full">
      <p className="whitespace-nowrap  text-[14px] md:text-xl w-[40%] md:w-[30%]">{label}:</p>
      <input
        className=" ml-3 md:ml-10 w-[48%] md:w-[70%]  md:pl-3 md:py-2 border-2 border-blue-200 text-gray-600 rounded-md md:mr-8 focus:outline-blue-500"
        type="text"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default BusinessWizardFormInput;
