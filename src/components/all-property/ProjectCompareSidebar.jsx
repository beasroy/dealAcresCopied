import React from "react";
import CompareSideProjectCard from "./CompareSideProjectCard";
import { useCompareProperty } from "@/context/ComparePropertyContext";

const ProjectCompareSidebar = () => {
  const { compareProperties } = useCompareProperty();

  return (
    <div className="w-[25%] h-fit border-2 border-blue-600 mt-[4rem] max-xl:hidden">
      <p className="font-semibold text-white bg-blue-600 py-1 px-3 w-full">
        Project ({compareProperties.length})
      </p>

      {compareProperties.map((property) => (
        <CompareSideProjectCard
          key={property.id}
          id={property.id}
          imageUrl={property.imageUrl}
          name={property.name}
          price={property.price}
          location={property.location}
          size={property.size}
          details={property.details}
        />
      ))}

      <div className="w-full flex items-center justify-center mt-3 mb-3">
        <button className="bg-blue-700 hover:bg-blue-800 text-white py-1 px-4 rounded-full">
          Compare Properties
        </button>
      </div>
    </div>
  );
};

export default ProjectCompareSidebar;
