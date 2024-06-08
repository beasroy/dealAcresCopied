import React, { useEffect } from "react";

const PopUpSideFilter = ({ onApply, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed z-50 top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="w-full bg-white p-4">
        <div className="p-4">
          <p className="text-lg font-bold text-gray-700 mb-4">Filter Options</p>

          <div className="mb-4">
            <p className="text-gray-600 font-semibold">Choose Segment</p>
            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" className="rounded-full bg-gray-300" />
              All
            </label>
            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" className="rounded-full bg-gray-300" />
              Residential
            </label>
            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" className="rounded-full bg-gray-300" />
              Commercial
            </label>
          </div>

          <div className="mb-4">
            <p className="text-gray-600 font-semibold">Choose Zone in Delhi</p>
            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" className="rounded-full bg-gray-300" />
              All Zone
            </label>
            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" className="rounded-full bg-gray-300" />
              East Delhi
            </label>
            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" className="rounded-full bg-gray-300" />
              North Delhi
            </label>
            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" className="rounded-full bg-gray-300" />
              West Delhi
            </label>
            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" className="rounded-full bg-gray-300" />
              Central Delhi
            </label>
          </div>

          <div>
            <p className="text-gray-600 font-semibold">Price Range</p>
            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" className="rounded-full bg-gray-300" />
              All
            </label>
            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" className="rounded-full bg-gray-300" />
              Affordable
            </label>
            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" className="rounded-full bg-gray-300" />
              Medium
            </label>
            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" className="rounded-full bg-gray-300" />
              Luxury
            </label>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-500 text-white py-2 px-4 w-full rounded-lg hover:bg-blue-600"
            onClick={() => {
              onApply();
              onClose();
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpSideFilter;
