"use client";

import React, { useState } from "react";
import feedbackHeaderImage from "../../../public/feedback/Feedback_header.png";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const Feedback = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm();

  const [rating, setRating] = useState(0);

  const onSubmit = (data, e) => {
    e.preventDefault();

    let hasErrors = false;

    if (!data.name || data.name.length <= 1) {
      setError("name", {
        type: "manual",
        message: "Name should be at least 2 characters",
      });
      hasErrors = true;
    }

    if (!isValidEmail(data.email)) {
      setError("email", { type: "manual", message: "Invalid email format" });
      hasErrors = true;
    }

    if (data.userFeedback.length <= 10) {
      setError("userFeedback", {
        type: "manual",
        message: "Feedback length should be greater than 10",
      });
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    const updatedData = {
      ...data,
      rating: rating,
      feedbackType: data.feedbackType.value,
    };

    console.log(updatedData);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const feedbackTypeOptions = [
    { value: "complaint", label: "Complaint" },
    { value: "suggestion", label: "Suggestion" },
    { value: "question", label: "Question" },
  ];

  return (
    <div>
      <Image
        src={feedbackHeaderImage}
        alt="feedback deal acres"
        className="w-full h-96"
      />

      <div className="px-4 py-6 md:px-8 lg:px-12 xl:px-[25rem] mt-10 mb-14 space-y-5">
        <h2 className="text-4xl font-bold">We are eager to hear you!</h2>
        <form className="w-full space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="w-full">
                <input
                  {...field}
                  type="text"
                  placeholder="Name"
                  className="pl-5 text-gray-400 bg-white border-2 border-gray-300 w-full rounded-md py-2"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="w-full">
                <input
                  {...field}
                  type="text"
                  placeholder="Email"
                  className="pl-5 text-gray-400 bg-white border-2 border-gray-300 w-full rounded-md py-2"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            )}
          />
          <div className="flex flex-col items-start mb-1 w-full">
            <p className="text-2xl font-semibold">Rate Deal Acres</p>
            <div className="flex space-x-3">
              {[1, 2, 3, 4, 5].map((starValue) => (
                <div key={starValue}>
                  {rating >= starValue ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8 text-yellow-500"
                      onClick={() => setRating(starValue)}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-10 h-10"
                      onClick={() => setRating(starValue)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  )}
                </div>
              ))}
            </div>

            {errors.rating && (
              <p className="text-red-500">{errors.rating.message}</p>
            )}
          </div>
          <Controller
            name="feedbackType"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <Select
                {...field}
                options={feedbackTypeOptions}
                placeholder="Select Feedback"
              />
            )}
          />
          <Controller
            name="userFeedback"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="relative w-full">
                <textarea
                  {...field}
                  type="text"
                  placeholder=""
                  className="pl-5 pt-4 pb-16 text-gray-400 bg-white border-2 border-gray-300 w-full rounded-md text-left align-top"
                ></textarea>
                {field.value.trim().length === 0 && (
                  <p className="absolute top-1 left-5 text-gray-400 text-md">
                    Type your message...
                  </p>
                )}

                {errors.userFeedback && (
                  <p className="text-red-500">{errors.userFeedback.message}</p>
                )}
              </div>
            )}
          />
          <button className="bg-[#0061DF] font-bold w-full text-md py-4 text-center text-white">
            Send Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
