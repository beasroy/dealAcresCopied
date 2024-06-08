"use client";

import React, { useState } from "react";
import { GoLocation } from "react-icons/go";
import RateLocation from "@/components/location-review/RateLocation";
import RoleTag from "@/components/location-review/RoleTag";
import './locationOverview.css'
const roles = ["Owner", "Tenant", "Real Estate Agent", "Formal Residence"];

const LocationReview = () => {
  const [serviceRatings, setServiceRatings] = useState([
    { facility: "Commuting", rating: 0 },
    { facility: "Public Transport", rating: 0 },
    { facility: "Parking", rating: 0 },
    { facility: "Connectivity", rating: 0 },
    { facility: "Traffic", rating: 0 },
    { facility: "Places of Interest", rating: 0 },
    { facility: "Schools", rating: 0 },
    { facility: "Restaurants", rating: 0 },
    { facility: "Hospital", rating: 0 },
    { facility: "Market", rating: 0 },
  ]);
  

  const [currentRole, setCurrentRole] = useState("");

  const handleRate = ({ facility, rating }) => {
    const updatedServiceRatings = [...serviceRatings];
    const facilityIndex = updatedServiceRatings.findIndex(
      (item) => item.facility === facility
    );

    if (facilityIndex !== -1) {
      updatedServiceRatings[facilityIndex].rating = rating;
      setServiceRatings(updatedServiceRatings);
    }
  };

  const [locationInput, setLocationInput] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);

  const fakeLocationSuggestions = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Ahmedabad",
  ];

  const handleLocationInputChange = (event) => {
    const inputValue = event.target.value;
    setLocationInput(inputValue);

    const filteredSuggestions = fakeLocationSuggestions.filter((location) =>
      location.toLowerCase().includes(inputValue.toLowerCase())
    );

    setLocationSuggestions(filteredSuggestions);
  };

  const handleLocationSelect = (selectedLocation) => {
    setLocationInput(selectedLocation);
    setLocationSuggestions([]);
  };

  return (
    <div className="w-full py-5 px-4 md:px-8 lg:px-[15rem] xl:px-[23rem] my-3">
      <div className="flex flex-col items-start border-2 border-blue-300 px-4 sm:px-6 py-4">
        <h2 className="block text-left md:text-center text-2xl sm:text-3xl md:text-4xl font-bold w-full py-2">
          Write Your Reviews <span className="penIcon"></span>
        </h2>

        <div className="w-full md:w-auto">
          <div className="space-y-4 md:space-y-2 md:mt-8">
            <p className="text-base ext-sm xs:text-base sm:text-lg md:text-xl font-semibold hidden md:block">
         
              What describes you the best?
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
              {roles.map((role, index) => (
                <RoleTag
                  key={index}
                  role={role}
                  isSelected={role === currentRole}
                  onRoleClick={(role) => setCurrentRole(role)}
                />
              ))}
            </div>
          </div>

          <div className=" md:space-y-2 mt-4 md:mt-8 w-full">
            <p className="py-2 text-sm xs:text-base sm:text-lg md:text-base font-semibold">
              Select your locality / society to Review
            </p>
            <div className="relative">
              <input
                className="py-1 border-2 border-blue-300 w-full rounded-[12px] pl-10 md:pl-7 focus:outline-none focus:border-blue-400"
                value={locationInput}
                onChange={handleLocationInputChange}
              />
              <GoLocation className="absolute left-3 top-3 md:left-2 md:top-2" />
              <ul className="w-full rounded-md max-h-[200px] overflow-y-auto">
                {locationSuggestions.map((location, index) => (
                  <li
                    key={index}
                    onClick={() => handleLocationSelect(location)}
                    className="cursor-pointer py-1 px-3 hover:bg-blue-200"
                  >
                    {location}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button className="bg-[#0061DF] font-bold text-sm sm:text-base py-1  px-4 md:px-4 rounded-[10px] text-center text-white mt-4 md:mt-8">
            Write Review
          </button>

          <div className=" md:space-y-2 mt-4 md:mt-8 w-full">
            <p className="py-2 text-sm xs:text-base sm:text-lg md:text-base font-semibold">
              What do you like about the locality?
            </p>
            <textarea
              type="text"
              className="pl-5 md:pl-2 pt-2 pb-12 md:pb-18 border-2 border-blue-300 w-full rounded-md"
            ></textarea>
          </div>

          <div className=" md:space-y-2 mt-4 md:mt-8 w-full">
            <p className="py-2 text-sm xs:text-base sm:text-lg md:text-base font-semibold">
              What do you Dislike about the locality?
            </p>
            <textarea
              type="text"
              className="pl-5 md:pl-2 pt-2 pb-12 md:pb-18 border-2 border-blue-300 w-full rounded-md"
            ></textarea>
          </div>

          <div className="space-y-4 mt-8 w-[70%] xs:w-[60%]  sm:w-full">
            <p className="py-2 md:py-0 text-sm  sm:text-lg md:text-xl font-semibold">
              Rate This - What you Thought
            </p>
            <div className="flex flex-col gap-1">
            {serviceRatings.map((service, index) => (
              <RateLocation
                key={index}
                facility={service.facility}
                onRate={handleRate}
              />
            ))}
            </div>
          </div>

          <button className="bg-[#0061DF] font-bold text-sm sm:text-base py-1 px-4 md:px-4 rounded-[10px] text-center text-white mt-4 md:mt-8">
            Post Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationReview;
