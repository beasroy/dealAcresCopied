import React from "react";
import Image from "next/image";
import Select from "react-select";
import HeaderLocationIcon from "../../../public/exploreLocality/Header-Location-Icon.png";
import BlueLocationIcon from "../../../public/exploreLocality/blue-location-icon.png";

const Header = () => {
  // Define the options for metropolitan cities related to India
  const indianMetropolitanCities = [
    { value: "delhi", label: "Delhi" },
    { value: "mumbai", label: "Mumbai" },
    { value: "bangalore", label: "Bangalore" },
    // Add more Indian cities as needed
  ];

  return (
    <header className="relative h-[20rem] w-full bg-cover bg-center bg-no-repeat bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/801/642/small/aerial-clean-top-view-of-the-night-time-city-map-with-street-and-river-001-vector.jpg')]">
      <div className="absolute bg-[#b5d5ff] opacity-75 w-full h-full"></div>
      <div className="absolute inset-0 top-10 max-md:top-0 flex flex-col items-center justify-center text-center space-y-2 p-2">
        <Image
          className="w-auto h-16 font-bold text-white max-sm:h-10"
          src={HeaderLocationIcon}
          alt="header map"
        />
        <h1 className="text-4xl text-black max-sm:text-3xl">
          <span className="font-bold">E</span>xplore{" "}
          <span className="font-bold">L</span>ocality{" "}
          <span className="font-bold">I</span>nsights
        </h1>
        <p className="text-xl text-black max-sm:text-lg">
          Overview | Reviews | Lifestyle & more
        </p>

        <div className="absolute top-0 right-32 max-sm:right-2">
          <div className="flex items-center space-x-2">
            <Image
              className="w-auto h-8 font-bold text-white"
              src={BlueLocationIcon}
              alt="header map"
            />
            <Select
              options={indianMetropolitanCities}
              placeholder="Select a city"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
