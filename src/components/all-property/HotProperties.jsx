import React from "react";

import PropertyCard from "./PropertyCard";
import { AiOutlineEye } from "react-icons/ai";

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
];

const HotProperties = () => {
  return (
    <div className="p-4 bg-blue-600 rounded-lg">
      <div className="flex items-center justify-start space-x-2">
        <AiOutlineEye className="text-white font-bold h-6 w-6" />
        <p className="font-semibold text-white text-lg">Hot Properties</p>
      </div>
      <div className="mt-4 flex flex-col space-y-2">
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
      </div>
    </div>
  );
};

export default HotProperties;
