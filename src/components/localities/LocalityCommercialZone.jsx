import React, { Fragment } from "react";

const delhiCities = [
  {
    name: "Mohan Corporative Area, Delhi",
    imageUrl:
      "/mohan.webp",
  },
  {
    name: "Connaught Place, Delhi",
    imageUrl:
      "/connaught.webp",
  },
  {
    name: "Khan Market",
    imageUrl:
      "/khanmarket.jpg",
  },
  {
    name: "Nehru Place, Delhi",
    imageUrl:
      "/nehruplace.webp",
  },
  {
    name: "Sarojini Nagar, Delhi",
    imageUrl:
      "/sarojini.jpg",
  },
  {
    name: "Karol Bhag, Delhi",
    imageUrl:
      "/karolbagh.jpg",
  },
];

const LocalityCommercialZone = () => {
  return (
    <Fragment>
      {/* Large Screen Layout */}
      <div className=" mb-5 px-[6rem] max-lg:hidden">
        <h2 className="text-4xl">Leading Commercial Zones</h2>
        <p className="text-gray-500">In Delhi</p>

        <div className="grid grid-cols-3 gap-4 mt-3 h-[35rem]">
          {delhiCities.map((town, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden flex-1 items-center flex flex-col justify-between ${
                index === 1 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={town.imageUrl}
                alt={town.name}
                className="rounded-lg object-cover h-[85%] w-[95%]"
              />
              <div className="p-2 text-center">
                <h3 className="text-md font-semibold underline">{town.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-end py-3">
          <button className="font-bold text-lg rounded-md bg-blue-600 px-3 py-1 text-white">
            View All
          </button>
        </div>
      </div>

      {/* Small Screen Layout */}
      <div className="p-4 sm:p-6 lg:p-8 lg:hidden mt-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl">
          Leading Residential Zones
        </h2>
        <p className="text-gray-500">In Delhi</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {delhiCities.map((town, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden">
              <img
                src={town.imageUrl}
                alt={town.name}
                className="w-full h-48 sm:h-60 lg:h-72 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-2 underline">
                  {town.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center sm:justify-end py-3">
          <button className="font-bold text-lg rounded-md bg-blue-600 px-3 py-1 text-white">
            View All
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default LocalityCommercialZone;
