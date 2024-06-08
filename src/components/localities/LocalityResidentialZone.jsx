import React, { Fragment } from "react";

const delhiCities = [
  {
    name: "Explore Central Delhi Locality",
    imageUrl:
      "/india_gate.webp",
  },
  {
    name: "Explore East Delhi Locality",
    imageUrl:
      "/akshardham.jpg",
  },
  {
    name: "Explore North Delhi Locality",
    imageUrl:
      "/redfort.webp",
  },
  {
    name: "Explore West Delhi Locality",
    imageUrl:
      "/lotus_temple.jpg",
  },
];

const LocalityResidentialZone = () => {
  return (
    <Fragment>
      <div className="mt-6 px-[6rem] max-lg:hidden">
        <h2 className="text-4xl">Leading Residential Zones</h2>
        <p className="text-gray-500">In Delhi</p>

        <div className="grid grid-cols-3 gap-6 mt-3">
          <div className="col-span-1 rounded-lg overflow-hidden flex-1 items-center flex flex-col justify-between">
            <img
              src="/Qutub_minar.jpg"
              alt="Qutub Minar"
              className="rounded-lg h-full"
            />
            <div className="p-2 text-center">
              <h3 className="text-md font-semibold underline">
                Explore Delhi south Delhi localities
              </h3>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-4 h-[35rem]">
            {delhiCities.map((town, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden flex-1 items-center flex flex-col justify-between h-[17rem]"
              >
                <img
                  src={town.imageUrl}
                  alt="Qutub Minar"
                  className="rounded-lg object-cover h-[80%] w-[90%]"
                />
                <div className="p-2 text-center">
                  <h3 className="text-md font-semibold underline">
                    {town.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex items-center justify-end py-3">
          <button class="font-bold text-lg rounded-md bg-blue-600 px-3 py-1 text-white">
            View All
          </button>
        </div>
      </div>

      <div className="mt-10 mb-5 px-4 sm:px-6 md:px-8 lg:px-12 lg:hidden">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl">
          Leading Residential Zones
        </h2>
        <p className="text-gray-500">In Delhi</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-3">
          <div className="col-span-1 rounded-lg overflow-hidden flex flex-col justify-between">
            <img
              src="https://media.canva.com/1/image-resize/1/800_530_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9vQk9NNC9NQUZzNTRvQk9NNC8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAL5L9Wv9W9J3bAAnkrChPZ88Q3UAooC3I7dLN4_bp-iA&exp=1711447753&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAAK7Qz1S22jFgf99PB6bvhVI4sF9mUOedM1tMu8mljx-s"
              alt="Qutub Minar"
              className="rounded-lg h-auto sm:h-full"
            />
            <div className="p-2 text-center">
              <h3 className="text-md font-semibold underline">
                Explore Delhi South Delhi localities
              </h3>
            </div>
          </div>
          {delhiCities.map((town, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden flex flex-col justify-between h-[18rem]"
            >
              <img
                src={town.imageUrl}
                alt="Qutub Minar"
                className="rounded-lg object-cover w-full h-auto sm:h-full"
              />
              <div className="p-2 text-center">
                <h3 className="text-md font-semibold underline">{town.name}</h3>
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

export default LocalityResidentialZone;
