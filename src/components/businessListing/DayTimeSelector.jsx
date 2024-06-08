import React, { useState } from "react";
import TimePicker from "react-time-picker";
import { FaTimes } from "react-icons/fa";

const DayTimeSelector = ({ day }) => {
  const [dayData, setDayData] = useState({ day, close: true, timings: [] });
  const [selected, setSelected] = useState(false);

  const handleAddTiming = () => {
    const updatedTimings = [...dayData.timings, { open: "", close: "" }];
    setDayData({ ...dayData, timings: updatedTimings, close: false });
  };

  const handleDeleteTiming = (index) => {
    const updatedTimings = [...dayData.timings];
    updatedTimings.splice(index, 1);
    const close = updatedTimings.length === 0;
    setDayData({ ...dayData, timings: updatedTimings, close });
  };

  const handleToggleSelected = () => {
    setSelected(!selected);
    if (!selected) {
      setDayData({ day, close: false, timings: [{ open: "", close: "" }] });
    } else {
      setDayData({ ...dayData, timings: [] });
    }
  };

  const handleTimeChange = (index, field, newValue) => {
    const updatedTimings = [...dayData.timings];
    updatedTimings[index][field] = newValue;
    const close = updatedTimings.every(
      (timing) => !timing.open && !timing.close
    );
    setDayData({ ...dayData, timings: updatedTimings, close });
  };

  return (
    <div className="w-full py-4 border-t-[1px] border-gray-300 border-b-[1px]">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row items-center space-x-2">
          <div
            className={`h-6 w-6 ${
              !selected ? "border-[1px] border-gray-600" : ""
            }  rounded-full flex items-center justify-center`}
            onClick={handleToggleSelected}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`${
                selected ? "" : "hidden"
              } text-blue-600 w-full h-full`}
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-black">{dayData.day}</p>
        </div>

        <label
          className={`${
            !selected ? "hidden" : ""
          } relative inline-flex cursor-pointer`}
        >
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Apply to all
          </span>
        </label>

        <p
          className={`text-blue-600 text-xs font-semibold ${
            selected ? "hidden" : ""
          }`}
        >
          Closed
        </p>
      </div>

      {selected &&
        dayData.timings.map((timing, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-center space-x-5 mt-4 mb-6 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-3"
          >
            <TimePicker
              value={timing.open}
              openClockOnFocus={false}
              onChange={(newTime) => handleTimeChange(index, "open", newTime)}
            />
            <TimePicker
              value={timing.close}
              openClockOnFocus={false}
              onChange={(newTime) => handleTimeChange(index, "close", newTime)}
            />
            <FaTimes
              className="text-gray-600"
              onClick={() => handleDeleteTiming(index)}
            />
          </div>
        ))}

      <p
        className={`${
          !selected ? "hidden" : ""
        } text-blue-600 text-xs font-semibold mt-2`}
        onClick={handleAddTiming}
      >
        + Add More Timings
      </p>
    </div>
  );
};

export default DayTimeSelector;
