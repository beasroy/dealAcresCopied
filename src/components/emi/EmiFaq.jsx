'use client'
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const EmiFaq = () => {
  const faqData = [
    {
      question: "What is an EMI?",
      answer:
        "An EMI, or Equated Monthly Installment, is a fixed monthly payment made by a borrower to a lender on a specified date each month. It comprises both principal and interest components, ensuring the loan is paid off in full over a predetermined period. EMIs provide a structured and predictable repayment schedule for loans.",
    },
    {
      question: "What is a Home-Loan EMI?",
      answer:
        "A home loan EMI is a monthly installment paid by a borrower to repay a home loan. It includes both the principal amount and the interest charged on the loan. The EMI amount remains constant throughout the loan tenure, helping borrowers manage their finances effectively by ensuring a steady repayment plan.",
    },
    {
      question: "What is a Pre-EMI?",
      answer:
        "Pre-EMI refers to the interest paid on a home loan during the construction period of a property. During this period, only the interest component is paid, and the actual EMI payments (including both principal and interest) start after the full loan amount is disbursed and the construction is completed.",
    },
    {
      question: "Should I opt for EMI?",
      answer:
        "Opting for pre-EMI can be beneficial if you expect the construction to be completed soon or if you want lower initial outflows. However, it can lead to a longer overall repayment period and potentially higher total interest costs. Consider your financial stability, loan terms, and construction timeline before deciding.",
    },
    {
      question: "Can I pay EMI after the due date?",
      answer:
        "Paying EMI after the due date is generally possible but may attract late payment fees and negatively impact your credit score. Most lenders offer a grace period, but it's important to communicate with your lender if you anticipate a delay. Consistent late payments can lead to more severe financial repercussions."
    },
    {
      question: "How is home loan EMI calculated?",
      answer:
        'Home loan EMI is calculated using the formula:EMI=𝑃×𝑟×(1+𝑟)𝑛(1+𝑟)𝑛−1EMI=(1+r)n−1P×r×(1+r)n​ where 𝑃P is the principal loan amount, 𝑟r is the monthly interest rate (annual rate divided by 12), and 𝑛n is the total number of EMIs (loan tenure in months). This formula accounts for both principal repayment and interest charges.',
    },
    {
      question: "Which is a better loan or EMI?",
      answer:
        'Choosing between a loan and EMI depends on the individual financial situation. EMIs provide a structured repayment schedule, making large loans more manageable. Opt for a loan with EMIs if you need significant funds upfront and prefer predictable monthly payments. Evaluate the interest rates, loan tenure, and total repayment amount when making a decision.'
    },
    {
      question: "Can I repay my EMI at once?",
      answer:
        'Yes, you can repay your EMI at once through a process called prepayment or foreclosure. This helps in reducing the loan tenure and total interest paid. However, some lenders might charge prepayment penalties. Review your loan agreement for terms and conditions related to prepayment before proceeding.'
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
    <div className="sm:py-8 md:py-2">
      <h1 className="text-2xl sm:text-3xl font-semibold">
      Frequently asked questions about EMI Calculator
      </h1>
      <div className="md:mt-4 sm:mt-10 sm:px-4  border-1 border-gray-300 rounded-lg">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-2 border-b-1 border-gray-300">
            <>
            <div
              className="flex justify-between items-center cursor-pointer p-2"
              onClick={() => toggleAccordion(index)}
            >

              <div className="text-base font-medium">
                 {faq.question}
              </div>
      
              <div className="text-gray-500">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </div>

            </div>
            <hr/>
            </>
            {openIndex === index && (
              <div className="mt-2 text-gray-600 p-2 text-sm">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmiFaq;
