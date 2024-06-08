"use client";

import React, { useState } from "react";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import OtpVerifier from "../../../components/businessListing/registration/OtpVerifier";

const Registration = () => {
  const [showOtpVerifier, setShowOtpVerifier] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    city: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    landlineNumber: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = () => {
    const errors = {};

    if (!formData.companyName) {
      errors.companyName = "Company is Required";
    }
    if (!formData.city) {
      errors.city = "City is Required";
    }

    if (!formData.firstName) {
      errors.firstName = "First Name is Required";
    }
    if (!formData.lastName) {
      errors.lastName = "Last Name is Required";
    }
    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone Number is Required";
    }
    if (!formData.landlineNumber) {
      errors.landlineNumber = "Landline Number is Required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setShowOtpVerifier(true);

    toast.success("OTP has been sent successfully!", {
      position: "top-right",
      autoClose: 6000,
    });
  };

  return (
    <div className="flex items-center justify-center my-4 md:my-16 px-4 sm:px-6 md:px-8 lg:px-[10rem]">
      {!showOtpVerifier && (
        <div className="bg-[#e7effe] p-6 sm:p-8 md:p-10 lg:p-12 w-full rounded-lg">
          <h1 className="text-lg lg:text-4xl mb-2 md:mb-5">
            List your business with{" "}
            <span className="font-bold">Deal Acres</span>
          </h1>
          <p className="text-base sm:text-xs md:text-xl lg:text-2xl text-gray-600 mb-5">
            Enter Your Details Below
          </p>

          <div className="flex flex-col sm:flex-row items-start mb-4 sm:space-x-5">
            <div className="w-full sm:w-1/2">
              <input
                className={`w-full pl-3 py-2 border-2 border-blue-200 text-gray-600 rounded-md focus:outline-blue-500 ${
                  formErrors.companyName ? "border-red-500" : ""
                }`}
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Company Name"
              />
              {formErrors.companyName && (
                <p className="text-red-400 text-sm pl-2">
                  {formErrors.companyName}
                </p>
              )}
            </div>
            <div className="w-full sm:w-1/2">
              <input
                className={`w-full max-sm:mt-4 pl-3 py-2 border-2 border-blue-200 text-gray-600 rounded-md focus:outline-blue-500 ${
                  formErrors.city ? "border-red-500" : ""
                }`}
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City"
              />
              {formErrors.city && (
                <p className="text-red-400 text-sm pl-2">{formErrors.city}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start mb-4 sm:space-x-5">
            <Select
              options={[
                { value: "Mr", label: "Mr" },
                { value: "Mrs", label: "Mrs" },
                { value: "Ms", label: "Ms" },
              ]}
              className="w-full sm:w-1/3"
              placeholder="Title"
            />
            <div className="w-full sm:w-1/2 max-sm:mt-4">
              <input
                className={`w-full pl-3 py-2 border-2 border-blue-200 text-gray-600 rounded-md focus:outline-blue-500 ${
                  formErrors.firstName ? "border-red-500" : ""
                }`}
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
              />
              {formErrors.firstName && (
                <p className="text-red-400 text-sm pl-2">
                  {formErrors.firstName}
                </p>
              )}
            </div>
            <div className="w-full sm:w-1/2 max-sm:mt-4">
              <input
                className={`w-full pl-3 py-2 border-2 border-blue-200 text-gray-600 rounded-md focus:outline-blue-500 ${
                  formErrors.lastName ? "border-red-500" : ""
                }`}
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
              />
              {formErrors.lastName && (
                <p className="text-red-400 text-sm pl-2">
                  {formErrors.lastName}
                </p>
              )}
            </div>
          </div>

          <div className="max-sm:relative flex flex-col sm:flex-row items-start mb-4 sm:space-x-5">
            <span className="max-sm:absolute max-sm:bg-white left-0 text-center py-2 px-2 w-auto h-auto border-2 border-blue-200 rounded-md">
              +91
            </span>
            <div className="w-full sm:w-1/2">
              <input
                className={`w-full max-sm:pl-14 pl-3 py-2 border-2 border-blue-200 text-gray-600 rounded-md focus:outline-blue-500 ${
                  formErrors.phoneNumber ? "border-red-500" : ""
                }`}
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number"
              />
              {formErrors.phoneNumber && (
                <p className="text-red-400 text-sm pl-2">
                  {formErrors.phoneNumber}
                </p>
              )}
            </div>
            <div className="w-full sm:w-1/2 max-sm:mt-4">
              <input
                className={`w-full pl-3 py-2 border-2 border-blue-200 text-gray-600 rounded-md focus:outline-blue-500 ${
                  formErrors.landlineNumber ? "border-red-500" : ""
                }`}
                type="text"
                name="landlineNumber"
                value={formData.landlineNumber}
                onChange={handleInputChange}
                placeholder="Landline Number"
              />
              {formErrors.landlineNumber && (
                <p className="text-red-400 text-sm pl-2">
                  {formErrors.landlineNumber}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="py-2 px-4 sm:px-6 md:px-8 lg:px-10 bg-blue-600 text-lg rounded-lg text-white"
              onClick={handleFormSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {showOtpVerifier && <OtpVerifier />}
      <ToastContainer />
    </div>
  );
};

export default Registration;
