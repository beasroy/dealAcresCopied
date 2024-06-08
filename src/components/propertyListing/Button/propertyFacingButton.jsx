

import React from "react";

const PropertyFacingButton = ({ heading, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`py-1 px-6 mr-2 mb-2 rounded-xl border-solid custom-border shadow-sm shadow-violet-100 text-base ${
        isActive ? "custom-border-select" : " "
      } `}
    >
      {heading}
    </button>
  );
};

export default PropertyFacingButton; // Export using the correct name










