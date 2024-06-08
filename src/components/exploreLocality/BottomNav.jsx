import React, { useState } from "react";

const BottomNav = ({ onActiveChange }) => {
  const [activeItem, setActiveItem] = useState("Insights");

  const handleItemClick = (item) => {
    setActiveItem(item);
    if (onActiveChange) {
      onActiveChange(item);
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="border-t-0 border-2 border-[#004AAD] rounded-b-lg">
        <ul className="flex items-center justify-center">
          <li
            className={`py-2 px-6 text-xl max-md:py-1 max-md:px-2 max-md:text-sm ${
              activeItem === "Insights"
                ? "bg-blue-200 font-bold rounded-bl-lg"
                : "hover:bg-blue-200 hover:font-bold hover:rounded-bl-lg"
            } transition ease-in-out delay-250`}
            onClick={() => handleItemClick("Insights")}
          >
            Insights
          </li>
          <li
            className={`py-2 px-6 text-xl max-md:py-1 max-md:px-2 max-md:text-sm ${
              activeItem === "Locality Insights"
                ? "bg-blue-200 font-bold"
                : "hover:bg-blue-200 hover:font-bold"
            } transition ease-in-out delay-250`}
            onClick={() => handleItemClick("Locality Insights")}
          >
            Locality Insights
          </li>
          <li
            className={`py-2 px-6 text-xl max-md:py-1 max-md:px-2 max-md:text-sm ${
              activeItem === "Articles"
                ? "bg-blue-200 font-bold"
                : "hover:bg-blue-200 hover:font-bold"
            } transition ease-in-out delay-250`}
            onClick={() => handleItemClick("Articles")}
          >
            Articles
          </li>
          <li
            className={`py-2 px-6 text-xl max-md:py-1 max-md:px-2 max-md:text-sm ${
              activeItem === "View All"
                ? "bg-blue-200 font-bold"
                : "hover:bg-blue-200 hover:font-bold"
            } transition ease-in-out delay-250`}
            onClick={() => handleItemClick("View All")}
          >
            View All
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomNav;
