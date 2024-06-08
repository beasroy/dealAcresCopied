"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is a property dealer?",
      answer:
        "A property dealer, also known as a real estate agent or realtor, is a professional who helps clients buy, sell, or rent real estate properties, including land, houses, and commercial spaces.",
    },
    {
      question: "How do I choose the right property dealer?",
      answer:
        "Choosing the right property dealer is important. You should consider their experience, reputation, client reviews, and their knowledge of the local real estate market. It's a good idea to interview multiple agents before making a decision.",
    },
    {
      question: "What services do property dealers provide?",
      answer:
        "Property dealers offer a range of services, including property listing, property valuation, negotiating deals, handling legal paperwork, and guiding clients through the entire real estate transaction process.",
    },
    {
      question: "What should I know when buying acres of land?",
      answer:
        "When buying acres of land, consider factors such as location, zoning regulations, land size, soil quality, access to utilities, and any potential development restrictions. It's advisable to work with a knowledgeable property dealer to help you make an informed decision.",
    },
    {
      question: "How can I sell land through a property dealer?",
      answer:
        "To sell land through a property dealer, you can contact a reputable real estate agent, list your land with them, and let them handle the marketing, negotiations, and legal aspects of the sale.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full mb-8">
      <div className="w-fit mb-6">
        <h1 className="text-3xl font-semibold max-lg:text-2xl">
          Frequently Asked Questions
        </h1>
        <div className="w-[40%] mt-2 h-1 bg-yellow-500"></div>
      </div>

      {faqData.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex items-center justify-between bg-white p-3 rounded-md shadow-md cursor-pointer"
            onClick={() => toggleFaq(index)}
          >
            <div className="text-lg">{faq.question}</div>
            <div>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          {openIndex === index && (
            <div className="p-4 border border-gray-300 bg-gray-100 rounded-md">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
