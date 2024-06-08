import React, { useState } from "react";
import Select from "react-select";
import { State, City } from "country-state-city";

const CityStateSelector = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const states = State.getStatesOfCountry("IN");
  const cities = City.getCitiesOfState("IN", selectedState);

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption.value);
  };

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption.value);
  };

  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-center justify-start space-y-3 sm:space-y-0 sm:space-x-3 mb-6 w-full">
      <Select
        options={states.map((state) => ({
          value: state.isoCode,
          label: state.name,
        }))}
        placeholder="State"
        className="w-full sm:w-1/4"
        onChange={handleStateChange}
      />
      <Select
        options={cities.map((city) => ({ value: city.name, label: city.name }))}
        placeholder="City"
        className="w-full sm:w-1/4"
        onChange={handleCityChange}
      />
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full sm:w-auto">
        Search
      </button>
    </div>
  );
};

export default CityStateSelector;
