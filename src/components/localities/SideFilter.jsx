import React from "react";

const SideFilter = () => {
  return (
    <div className="w-1/3 mx-auto border-4 border-blue-300 rounded-2xl p-3 bg-slate-100 sticky max-xl:w-1/3 max-lg:w-1/2 max-lg:hidden">
      <div className="flex flex-col items-start p-2">
        <p className="text-lg font-bold text-gray-500">Choose Segment</p>
        <div className="flex flex-wrap gap-4 mt-3 items-start">
          <label className="flex items-center gap-2 py-2 px-4 rounded-lg bg-white">
            All
            <input type="checkbox" className="rounded-full bg-white" />
          </label>
          <label className="flex items-center gap-2 py-2 px-4 rounded-lg bg-white">
            Residental
            <input type="checkbox" className="rounded-full bg-white" />
          </label>
          <label className="flex items-center gap-2 py-2 px-4 rounded-lg bg-white">
            Commercial
            <input type="checkbox" className="rounded-full bg-white" />
          </label>
        </div>
      </div>

      <div className="flex flex-col items-start p-2">
        <p className="text-lg font-bold text-gray-500">Choose Zone in Delhi</p>
        <div className="flex flex-wrap gap-4 mt-3 items-start">
          <label className="flex items-center gap-2 py-2 px-4 rounded-lg bg-white">
            All Zone
            <input type="checkbox" className="rounded-full bg-white" />
          </label>
          <label className="flex items-center gap-2 py-2 px-4 rounded-lg bg-white">
            East Delhi
            <input type="checkbox" className="rounded-full bg-white" />
          </label>
          <label className="flex items-center gap-2 py-2 px-4 rounded-lg bg-white">
            North Delhi
            <input type="checkbox" className="rounded-full bg-white" />
          </label>
          <label className="flex items-center gap-2 py-2 px-4 rounded-lg bg-white">
            West Delhi
            <input type="checkbox" className="rounded-full bg-white" />
          </label>
          <label className="flex items-center gap-2 py-2 px-4 rounded-lg bg-white">
            Central Delhi
            <input type="checkbox" className="rounded-full bg-white" />
          </label>
        </div>
      </div>

      <div className="flex flex-col items-start p-2">
        <p className="text-lg font-bold text-gray-500">Price Range</p>
        <div className="flex flex-wrap gap-4 mt-3 items-start">
          <label className="flex items-center gap-2 py-2 px-4 rounded-lg bg-white">
            All
            <input type="checkbox" className="rounded-full bg-white" />
          </label>
          <label className="flex items-center gap-2 py-2 px-4 rounded-lg bg-white">
            Affordable
            <input type="checkbox" className="rounded-full bg-white" />
          </label>
          <label className="flex items-center gap-2 py-2 px-4 rounded-lg bg-white">
            Medium
            <input type="checkbox" className="rounded-full bg-white" />
          </label>
          <label className="flex items-center gap-2 py-2 px-4 rounded-lg bg-white">
            Luxury
            <input type="checkbox" className="rounded-full bg-white" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default SideFilter;
