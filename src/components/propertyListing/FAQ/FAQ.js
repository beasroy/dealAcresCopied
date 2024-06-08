import React, { useState } from "react";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is Deal Acres?",
      answer:
        "Deal Acres is a real estate portal where builders, owners, and agents can list their properties for free. It provides a platform for buying and selling real estate properties.",
      isOpen: false,
    },
    {
      question: "How can I list my property on Deal Acres?",
      answer:
        "To list your property on Deal Acres, you can create an account, log in, and follow the simple listing process. It's completely free!",
      isOpen: false,
    },
    {
      question: "What are the advantages of using Deal Acres?",
      answer:
        "Deal Acres offers free online exposure to a wide audience of potential buyers. It allows you to interact with customers in your area, negotiate deals, and save money on real estate agent fees.",
      isOpen: false,
    },
    {
      question: "Is it safe to use Deal Acres for property transactions?",
      answer:
        "Yes, Deal Acres takes security seriously. We have security measures in place to protect your personal and property information. However, always exercise caution when sharing sensitive details online.",
      isOpen: false,
    },
    {
      question: "Can I search for properties on Deal Acres without an account?",
      answer:
        "Yes, you can browse and search for properties on Deal Acres without creating an account. However, you'll need an account if you want to list a property or save your favorite listings.",
      isOpen: false,
    },
    {
      question: "How do I contact a property owner or agent on Deal Acres?",
      answer:
        "You can usually find the contact information for the property owner or agent in the property listing. Feel free to reach out to them via phone or email to inquire about the property.",
      isOpen: false,
    },
    {
      question: "What types of properties can I find on Deal Acres?",
      answer:
        "Deal Acres features a wide range of properties, including residential homes, apartments, commercial properties, land, and more. You can search for properties that match your specific needs.",
      isOpen: false,
    },
    {
      question: "Can I list multiple properties on Deal Acres?",
      answer:
        "Yes, you can list multiple properties on Deal Acres. Each property will have its own listing, allowing you to manage and promote multiple listings at once.",
      isOpen: false,
    },
    {
      question: "Are there any fees for using Deal Acres?",
      answer:
        "No, Deal Acres is completely free to use for both property buyers and sellers. You can list and search for properties without any charges.",
      isOpen: false,
    },
    {
      question: "How can I edit or update my property listing on Deal Acres?",
      answer:
        "You can log in to your Deal Acres account, go to your property listing, and use the edit or update options to make changes to your listing details as needed.",
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    const updatedFaqs = faqs.map((faq, i) => {
      if (i === index) {
        return { ...faq, isOpen: !faq.isOpen };
      } else {
        return { ...faq, isOpen: false };
      }
    });
    setFaqs(updatedFaqs);
  };

  return (
    <div className="mt-[11rem]  md:mt-[20rem] px-4 sm:px-8 md:px-16 lg:px-32 space-y-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
        Everything you need to know about Deal Acres FREE Property Listing...
      </h2>
      <div className="space-y-3">
        <p className="font-semibold text-xl">What is Free Property Listing?</p>
        <p>
          It is a process where a builder, as an owner or agent, can list their
          property for free on this real estate portal. Through this, you can
          sell or rent your property effectively and efficiently. It is the
          perfect way to reach the audience who want to rent their home or buy
          their dream home. By doing property listing you save your time for
          selling or renting it.
        </p>

        <p className="font-semibold text-xl">Advantages of Free Listing</p>
        <ul className="list-disc list-inside pl-5">
          <li>Provide free online exposure to more buyers.</li>
          <li>A platform for selling and buying real estate.</li>
          <li>Interact with and engage potential customers in your area.</li>
          <li>Negotiate and expedite the purchase.</li>
          <li>You can save money by working as your own real estate agent.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
          Frequently Asked Questions
        </h2>
        <div className="mt-6">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-3">
              <button
                className={`flex justify-between w-full py-2 px-4 bg-white border-b-2 border-gray-200 ${
                  faq.isOpen ? "transition bg-gray-200" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-bold">{faq.question}</span>
                <span className="text-gray-600">{faq.isOpen ? "-" : "+"}</span>
              </button>
              {faq.isOpen && (
                <div className="p-4 bg-white">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
