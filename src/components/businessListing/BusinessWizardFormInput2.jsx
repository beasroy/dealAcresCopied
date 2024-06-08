import React from "react";

const BusinessWizardFormInput2 = ({ label }) => {
  return (
    <div className="flex flex-row items-center justify-between w-full space-y-1 md:space-y-0 md:space-x-4">
      <p className="whitespace-nowrap text-[14px] md:text-xl w-[30%]">{label}</p>
      <input
        className="w-[70%] md:w-3/4 border-2 border-blue-200 text-gray-600 rounded-md focus:outline-blue-500 py-0.5 md:py-2 pl-3"
        type="text"
      />
    </div>
  );
};

export default BusinessWizardFormInput2;
