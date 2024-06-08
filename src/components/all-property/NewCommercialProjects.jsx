import React from "react";
import cityImage from "../../../public/locationCityWise/city.jpg";
import Image from "next/image";

const projects = [
  {
    name: "Gulshan Avante",
    location: "Sector 93 Gurgaon",
    price: "₹ 45 - 75 Lac",
  },
  {
    name: "Gulshan Avante",
    location: "Sector 93 Gurgaon",
    price: "₹ 45 - 75 Lac",
  },
  {
    name: "Gulshan Avante",
    location: "Sector 93 Gurgaon",
    price: "₹ 45 - 75 Lac",
  },
  {
    name: "Gulshan Avante",
    location: "Sector 93 Gurgaon",
    price: "₹ 45 - 75 Lac",
  },
  // Add more project data as needed
];

const NewCommercialProjects = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-2">Commercial Projects</h2>
      <p className="font-semibold mb-2">
        Recently added projects and phases in Delhi / NCR (All)
      </p>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center md:w-1/4 p-4"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
              <Image
                src={cityImage}
                alt="Your Image"
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-center font-semibold text-sm md:text-xs mt-2">
              {project.name}
            </p>
            <p className="text-center text-gray-600 text-xs">
              {project.location}
            </p>
            <p className="text-center font-semibold text-sm md:text-xs">
              {project.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCommercialProjects;
