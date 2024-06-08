import React from "react";
import { BiSolidRightArrow, BiSolidDownArrow } from "react-icons/bi";

const FAQ = ({ question, answer, isOpen, toggleFaq }) => {
  return (
    <div className="bg-white py-3 border-b-2 border-gray-300 rounded-sm transition duration-300 ease-in-out hover:bg-gray-300">
      <div
        className={`flex items-center justify-start cursor-pointer pl-3 space-x-2`}
        onClick={toggleFaq}
      >
        {isOpen ? (
          <BiSolidDownArrow size={14} className="min-w-[14px] min-h-[14px] " />
        ) : (
          <BiSolidRightArrow  size={14} className="min-w-[14px] min-h-[14px] " />
        )}
        <p className="text-base xs:text-lg font-bold max-md:text-sm">{question}</p>
      </div>
      {isOpen && (
        <div className="p-3">
          <p className="text-sm xs:text-base text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQ;
