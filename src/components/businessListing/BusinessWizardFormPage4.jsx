import React, { useState } from "react";
import Image from "next/image";
import uploadImage from "../../../public/businessListing/upload-logo.png";
import { LuCheckCircle } from "react-icons/lu";

const BusinessWizardFormPage4 = ({ onPreviousClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleListYourBusinessClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 sm:p-6 md:p-10">
      <div>
        <h1 className="text-lg md:text-2xl font-semibold mb-2 sm:text-lg">
          Add Media
        </h1>
        <div className="flex flex-row items-center justify-start space-x-4 sm:space-x-6 text-blue-600 mb-2">
          <p>Logo</p>
          <p>Image</p>
          <p>Video</p>
        </div>
        <div className="h-[2px] w-[40%] bg-gray-700 mb-2"></div>
        <div className="flex flex-col items-center justify-center bg-blue-100 w-auto h-auto p-4 sm:p-8 rounded-lg shadow-lg">
          <Image
            src={uploadImage}
            className="h-10 w-auto mb-4"
            alt="upload image"
          />
          <h2 className="text-base md:text-lg font-semibold text-center mb-1 sm:text-md">
            Drag & Drop Upload Image Here
          </h2>
          <p className="text-gray-600 text-xs md:text-md text-center">
            Uploaded photo size should not exceed 2MB.
          </p>
          <div className="mt-5">
            <input type="file" id="fileInput" className="hidden" />
            <label
              htmlFor="fileInput"
              className="bg-blue-600 hover:bg-blue-700 text-sm md:text-base text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Upload Media
            </label>
          </div>
        </div>
        <p className="text-gray-600 text-sm md:text-lg md:text-center mt-3">
          At least add 4 images of your property for good visibility and high response.
        </p>

        <div className="w-full mt-5 flex items-center justify-center">
          <button
            className="px-10 sm:px-16 py-2 font-semibold text-white bg-blue-600 rounded-lg text-sm md:text-lg w-full"
            onClick={handleListYourBusinessClick}
          >
            List Your Business
          </button>
        </div>
      </div>

      <div className="w-full mt-5 justify-center sm:justify-start pr-[1rem] sm:pr-[2rem] hidden md:block">
        <button
          className="font-semibold text-lg bg-blue-600 px-4 py-2 text-white rounded-md text-center "
          onClick={onPreviousClick}
        >
          Previous
        </button>
      </div>

      
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white py-4 px-6 rounded-lg shadow-lg w-4/5 max-w-md relative">
            
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={closeModal}
            >
              X
            </button>
            <p className="text-lg text-center font-semibold mb-4">Your Business is listed on Deal Acres.</p>
            <div className="flex flex-row items-start justify-center space-x-2">
              <div>
            <LuCheckCircle className="text-green-600 h-6 w-6 m-1" /></div>
              <p className=" text-center text-lg text-green-600">Listed</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessWizardFormPage4;
