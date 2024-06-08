import React from "react";
import PropertyCard from "./PropertyCard";
import NewLaunchedProjects from "./NewLaunchedProjects";
import NewCommercialProjects from "./NewCommercialProjects";
import HotProperties from "./HotProperties";
import PropertyAd from "./PropertyAd";
import ServiceExplore from "./ServiceExplore";
import Pagination from "./Pagination";
import Services from "../Homepage/services/Services";

import { useCompareProperty } from "@/context/ComparePropertyContext";

const properties = [
  {
    id: 1,
    imageUrl:
      "https://media.istockphoto.com/id/1194529868/photo/gurugram-cyber-hub.jpg?s=612x612&w=0&k=20&c=5wt2JdYpRVBhebHxd0EssmnaK8eLWwuKabUqlDwpvAA=",
    price: "Rs 70.6 L to 2.36 Cr",
    name: "Signature Global City 93",
    location: "Sector 93 Gurgaon",
    size: "730 - 1530",
    details: "3BHK, FLATS, RESIDENTIAL PROPERTIES",
  },
  {
    id: 2,
    imageUrl:
      "https://media.istockphoto.com/id/1194529868/photo/gurugram-cyber-hub.jpg?s=612x612&w=0&k=20&c=5wt2JdYpRVBhebHxd0EssmnaK8eLWwuKabUqlDwpvAA=",
    price: "Rs 70.6 L to 2.36 Cr",
    name: "Signature Global City 93",
    location: "Sector 93 Gurgaon",
    size: "730 - 1530",
    details: "3BHK, FLATS, RESIDENTIAL PROPERTIES",
  },
  {
    id: 3,
    imageUrl:
      "https://media.istockphoto.com/id/1194529868/photo/gurugram-cyber-hub.jpg?s=612x612&w=0&k=20&c=5wt2JdYpRVBhebHxd0EssmnaK8eLWwuKabUqlDwpvAA=",
    price: "Rs 70.6 L to 2.36 Cr",
    name: "Signature Global City 93",
    location: "Sector 93 Gurgaon",
    size: "730 - 1530",
    details: "3BHK, FLATS, RESIDENTIAL PROPERTIES",
  },
];

const PropertyFlatList = () => {
  const { compareProperties } = useCompareProperty();

  return (
    <div className="px-[2rem] max-xl:w-full max-md:px-0">
      <div className="flex items-center justify-between space-x-4">
        <h2 className="text-3xl font-bold max-md:text-xl">
          All Properties in Gurgaon
        </h2>

        <div class="flex justify-end items-center space-x-3 xl:hidden">
          <button class="flex items-center space-x-2 bg-blue-500 text-white p-2 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
            <p>Filter</p>
          </button>

          <button class="relative flex items-center space-x-2 bg-blue-500 text-white p-2 rounded ml-2">
            Compare
            <span class="absolute right-0 -top-3 border-[1px] border-blue-500 bg-white text-blue-500 font-semibold text-xs w-6 h-6 rounded-full flex items-center justify-center">
              {compareProperties.length}
            </span>
          </button>
        </div>
      </div>

      <div className="py-[2rem] flex flex-col space-y-3">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            id={property.id}
            imageUrl={property.imageUrl}
            price={property.price}
            name={property.name}
            location={property.location}
            size={property.size}
            details={property.details}
          />
        ))}

        <NewLaunchedProjects />
        <HotProperties />
        <NewCommercialProjects />
        <PropertyAd />
        <ServiceExplore />
        <Pagination />
      </div>
    </div>
  );
};

export default PropertyFlatList;
