'use client'
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const faqData = [
    {
      question: "Is Gurgaon a good place to live?",
      answer:
        "Gurgaon is often considered a good place to live due to its modern infrastructure, job opportunities, and proximity to Delhi. However, the experience may vary depending on individual preferences and needs.",
    },
    {
      question: "Are there good hospitals in Gurgaon?",
      answer:
        "Yes, Gurgaon is home to several well-equipped hospitals and healthcare facilities, including Medanta - The Medicity, Fortis Memorial Research Institute, and Artemis Hospital, among others.",
    },
    {
      question: "What are some popular local attractions in Gurgaon?",
      answer:
        "Gurgaon offers a variety of attractions, including Cyber Hub, Kingdom of Dreams, Damdama Lake, and Ambience Mall, where residents and visitors can enjoy entertainment, dining, and shopping.",
    },
    {
      question: "Is Gurgaon safe for families?",
      answer:
        "Gurgaon is generally considered safe for families. It has a relatively low crime rate compared to some other Indian cities. However, it's always advisable to take necessary precautions and stay informed about the local safety situation.",
    },
    {
      question: "What is the cost of living in Gurgaon?",
      answer:
        "The cost of living in Gurgaon can vary widely depending on your lifestyle and housing choices. It is generally considered to be higher than many other Indian cities, especially in terms of housing and dining out.",
    },
    {
      question: "How is the public transportation system in Gurgaon?",
      answer:
        "Gurgaon has a developing public transportation system, including a metro network, public buses, and auto-rickshaws. The availability and convenience of public transport may depend on your location within the city.",
    },
    {
      question: "What is the climate like in Gurgaon?",
      answer:
        "Gurgaon experiences a hot and humid subtropical climate. Summers can be extremely hot, with temperatures often exceeding 40°C (104°F), while winters are relatively mild and pleasant.",
    },
    {
      question: "Are there good schools in Gurgaon?",
      answer:
        "Yes, Gurgaon has a number of reputed schools, both international and national, offering quality education. Some well-known schools include The Shri Ram School, DPS International, and GD Goenka World School.",
    },
    {
      question: "What is the nightlife like in Gurgaon?",
      answer:
        "Gurgaon has a vibrant nightlife scene with numerous bars, pubs, and clubs. Areas like Cyber Hub and Sector 29 are known for their nightlife options where people can enjoy music, drinks, and food.",
    },
    {
      question: "What industries are prominent in Gurgaon for employment?",
      answer:
        "Gurgaon is known as a major hub for the IT and corporate sectors. It hosts numerous IT companies, multinational corporations, and startups, making it a significant employment center in the Delhi-NCR region.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="px-20">
      <h1 className="text-2xl sm:text-3xl font-semibold">
        Frequently Asked Questions
      </h1>
      <div className="mt-6  sm:px-4 py-2 sm:py-4 border-1 border-gray-300 rounded-lg">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-3 sm:mb-4 border-b-1 border-gray-300">
            <div
              className="flex justify-between items-center cursor-pointer "
              onClick={() => toggleAccordion(index)}
            >
              <div className="text-base sm:text-lg font-medium">
                Q. {faq.question}
              </div>
              <div className="text-gray-500">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </div>
            </div>
            {openIndex === index && (
              <div className="mt-2 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
