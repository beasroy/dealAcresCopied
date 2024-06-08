'use client';
import React, { useState } from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const paymentModes = [
  "GPay",
  "Paytm",
  "Credit Card",
  "Debit Card",
  "NEFT",
  "UPI",
  "Cash",
  "Cheque",
  "PayPal",
  "Apple Pay",
  "Amazon Pay",
  "Venmo",
  "Samsung Pay",
  "Square Cash",
  "Stripe",
  "Zelle",
  "Western Union",
  "Alipay",
  "WeChat Pay",
  "MasterCard",
  "VisaCard",
];

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const BusinessWizardFormPart3Mobile = ({ onSaveAndContinue, onPreviousClick }) => {
  const [hours, setHours] = useState(
    daysOfWeek.reduce((acc, day) => {
      acc[day] = { from: "", to: "", closed: false, dual: false, dualFrom: "", dualTo: "" };
      return acc;
    }, {})
  );

  const [activeDay, setActiveDay] = useState("");

  const handleTimeChange = (day, key, value) => {
    setHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [key]: value,
      },
    }));
    setActiveDay(day); 
  };

  const handleClosedChange = (day) => {
    setHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        closed: !prev[day].closed,
      },
    }));
  };

  const handleDualChange = () => {
    if (activeDay) {
      setHours((prev) => ({
        ...prev,
        [activeDay]: {
          ...prev[activeDay],
          dual: !prev[activeDay].dual,
        },
      }));
    }
  };

  const copyMondayToSunday = () => {
    const mondayHours = hours["Monday"];
    setHours((prev) => {
      const updatedHours = { ...prev };
      ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].forEach(
        (day) => {
          updatedHours[day] = { ...mondayHours, dual: false, dualFrom: "", dualTo: "" };
        }
      );
      return updatedHours;
    });
  };

  return (
    <div className="flex flex-col items-start justify-start mt-2">

      <h2 className="text-base font-bold my-3">Hours of Operation</h2>

      <div className="flex flex-row space-x-2 text-[0.77rem] items-center md:mt-5">
        <div className="flex flex-row items-start justify-between">
          <p className="flex items-start space-x-1">
            <input type="checkbox" className="rounded-full mr-2 mt-1" />
            Display hours of operation
          </p>
        </div>

        <div className="flex flex-row items-center justify-between">
          <p className="flex items-start space-x-1">
            <input type="checkbox" className="rounded-full mr-2 mt-1" />
            Do not Display hours of operation
          </p>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <div className="mt-5 space-y-5 flex flex-col items-start justify-start min-w-[500px]">
          {daysOfWeek.map((day, index) => (
            <div className="flex flex-col items-start" key={index}>
              <div className="flex flex-row items-center justify-start">
                <p className="w-[80px] text-[14px]">{day}:</p>
                <div className="flex flex-row items-center">
                  <TimePicker
                    className="ml-2"
                    openClockOnFocus={false}
                    value={hours[day].from}
                    onChange={(value) => handleTimeChange(day, "from", value)}
                    disabled={hours[day].closed}
                  />
                  <p className="ml-[2rem]">To</p>
                  <TimePicker
                    className="ml-2"
                    openClockOnFocus={false}
                    value={hours[day].to}
                    onChange={(value) => handleTimeChange(day, "to", value)}
                    disabled={hours[day].closed}
                  />
                  <div className="flex items-center ml-[2rem]">
                    <p className="flex items-center space-x-1">
                      <input
                        type="checkbox"
                        className="rounded-full mr-2 -mt-1"
                        checked={hours[day].closed}
                        onChange={() => handleClosedChange(day)}
                      />
                      Closed
                    </p>
                  </div>
                </div>
              </div>
              {hours[day].dual && (
                <div className="flex flex-row items-center justify-start mt-2 ml-[2rem]">
                  <TimePicker
                    className="ml-2"
                    openClockOnFocus={false}
                    value={hours[day].dualFrom}
                    onChange={(value) => handleTimeChange(day, "dualFrom", value)}
                    disabled={hours[day].closed}
                  />
                  <p className="ml-[2rem]">To</p>
                  <TimePicker
                    className="ml-2"
                    openClockOnFocus={false}
                    value={hours[day].dualTo}
                    onChange={(value) => handleTimeChange(day, "dualTo", value)}
                    disabled={hours[day].closed}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <p
        className="text-[14px] text-blue-600 mt-5 cursor-pointer"
        onClick={copyMondayToSunday}
      >
        Copy time from Monday to Saturday
      </p>
      <p
        className="text-[14px] text-blue-600 mt-3 cursor-pointer"
        onClick={handleDualChange}
      >
        Click Here For Dual Timings
      </p>

      <h2 className="text-base font-bold mt-3 mb-5">
        Payment Modes Accepted By You
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {paymentModes.map((mode, index) => (
          <div key={index} className="flex flex-row items-center justify-between">
            <p className="flex items-center space-x-2 text-[14px]">
              <input type="checkbox" className="rounded-full mr-1 -mt-1" />
              {mode}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col justify-between gap-3 my-4">
        <button
          className="font-semibold text-sm bg-blue-600 px-4 py-2 text-white rounded-md text-center"
          onClick={onPreviousClick}
        >
          Previous
        </button>

        <button
          className="font-semibold text-sm bg-blue-600 px-4 py-2 text-white rounded-md text-center"
          onClick={onSaveAndContinue}
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default BusinessWizardFormPart3Mobile;
