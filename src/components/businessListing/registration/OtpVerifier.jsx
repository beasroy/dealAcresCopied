"use client";

import React, { useState, useRef } from "react";
import { GoPencil } from "react-icons/go";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OtpVerifier = ({ phoneNumber }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isEditing, setIsEditing] = useState(false);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }

    if (value === "" && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleConfirmResendClick = () => {
    // Implement OTP resend logic here
    // Display a toast message for demonstration purposes
    toast.success("OTP has been resent successfully!", {
      position: "top-right",
      autoClose: 3000,
    });

    setIsEditing(false);
  };

  return (
    <div className="px-5 py-3 border-4 border-blue-300 w-fit rounded-lg">
      <h2 className="font-bold text-xl">Welcome Back,</h2>
      <p className="text-lg">Your number is registered with us.</p>
      <p className="mb-4 text-lg">Please login to continue</p>

      {isEditing ? (
        // Display input for editing phone number
        <div className="max-sm:relative mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <span className="max-sm:absolute max-sm:hidden max-md:hidden max-sm:bg-white w-fit py-2 px-3 text-black text-center border-2 border-blue-200 rounded-md">
            +91
          </span>
          <input
            className="w-full md:w-auto pl-3 max-sm:pl-12 py-2 border-2 border-blue-200 text-gray-600 rounded-md focus:outline-blue-500"
            type="number"
            placeholder="Enter New Phone Number"
          />
          <button
            className="text-white bg-blue-600 py-2 px-4 rounded-md"
            onClick={handleConfirmResendClick}
          >
            Confirm
          </button>
        </div>
      ) : (
        // Display phone number with pencil icon
        <div className="mb-4 flex flex-row items-center md:flex-row space-x-2">
          <p>+91-XXXXXXXXXX</p>
          <GoPencil
            className="text-blue-600 h-5 w-5 cursor-pointer"
            onClick={handleEditClick}
          />
        </div>
      )}

      {isEditing ? null : (
        <>
          <p className="mb-3 text-2xl">Enter Your OTP</p>

          <div className="flex flex-wrap space-x-2">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                className={`w-12 h-12 text-center border-2 border-blue-300 ${
                  value === "" ? "bg-white" : "bg-blue-100"
                } focus:outline-yellow-300`}
                value={value}
                onChange={(e) => handleInputChange(index, e.target.value)}
                ref={inputRefs[index]}
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && index > 0 && !value) {
                    inputRefs[index - 1].current.focus();
                  }
                }}
              />
            ))}
          </div>

          <p
            className="mb-4 mt-2 text-sm font-semibold text-blue-600 cursor-pointer"
            onClick={handleConfirmResendClick}
          >
            Resend OTP
          </p>

          <div className="w-full mt-10">
            <button
              className="px-16 py-2 font-semibold text-white bg-blue-600 rounded-lg text-lg w-full"
              onClick={() => console.log(otp)}
            >
              Verify & Login
            </button>
          </div>
        </>
      )}

      <ToastContainer />
    </div>
  );
};

export default OtpVerifier;
