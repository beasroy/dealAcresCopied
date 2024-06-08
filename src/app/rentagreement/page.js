'use client';

import FAQ from '@/components/areaCalculator/FAQ'
import ReadMore from '@/components/propertyListing/ReadMore/ReadMore'
import AboutRentAgreement from '@/components/rentagreement/AboutRentAgreement'
import DownloadMaterial from '@/components/rentagreement/DownloadMaterial'
import EstateService from '@/components/rentagreement/EstateService'
import Experts from '@/components/rentagreement/Experts'
import ServiceBanner from '@/components/rentagreement/ServiceBanner'
import { useState } from 'react'
import girlQuestion from "../../../public/areaCalculator/girl_with_question.webp";
import Image from 'next/image';
import ArticleSlider from '@/components/faq/ArticleSlider';
import RentalManual from '@/components/rentagreement/RentalManual';
import InsightReview from '@/components/locationOverview/content2/InsightReview';

const Page = () => {
  const faqData = [
    {
      question: "How do I successfully close a deal?",
      answer:
        "Closing a deal successfully involves understanding your customer's needs, building trust, and presenting a compelling offer.",
    },
    {
      question: "What are common challenges in deal closures?",
      answer:
        "Common challenges include objections from prospects, negotiation issues, and lengthy decision-making processes.",
    },
    {
      question: "Is it important to follow up after a deal is closed?",
      answer:
        "Yes, following up after a deal closure helps ensure customer satisfaction and may lead to repeat business or referrals.",
    },
    {
      question: "What should I do if a deal is stuck in the negotiation phase?",
      answer:
        "Try to understand the prospect's concerns, address objections, and be flexible in finding a mutually beneficial solution.",
    },
    {
      question: "How can I improve my closing ratio?",
      answer:
        "Improving your closing ratio involves refining your sales techniques, understanding your target audience, and providing exceptional customer service.",
    },
    {
      question: "What are some effective closing techniques?",
      answer:
        "Effective closing techniques include the assumptive close, the summary close, and the trial close.",
    },
    {
      question: "How can I handle objections during the closing process?",
      answer:
        "Handle objections by actively listening to the prospect, acknowledging their concerns, and offering solutions or counterarguments.",
    },
    {
      question: "What role does communication play in deal closures?",
      answer:
        "Clear and effective communication is essential in understanding the prospect's needs and conveying the value of your offer.",
    },
    {
      question: "What are the best practices for managing a sales pipeline?",
      answer:
        "Best practices include qualifying leads, maintaining accurate records, and nurturing relationships with potential customers.",
    },
    {
      question: "How do I handle deal closures in a competitive market?",
      answer:
        "In a competitive market, focus on differentiation, building strong customer relationships, and providing exceptional service to stand out.",
    },
  ];
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const toggleFaq = (index) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };


  return (
    <div>
      <ServiceBanner />
      <div className='max-w-screen-xl mx-auto'>
      <Experts />
      <AboutRentAgreement />
      <div className="bg-[#EDE4FF] mt-4 md:mt-10 mb-3 px-[12rem] py-[3rem] max-md:px-[1rem] max-md:py-[2rem]">
        <div className="grid grid-cols-2 items-center max-lg:grid-cols-1">
          <div>
            <h2 className="text-3xl font-bold max-sm:text-xl">
              Frequently Asked Question
            </h2>

            <div className="mt-5 w-full">
              {faqData.map((faq, index) => {
                return (
                  <FAQ
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={index === openFaqIndex}
                    toggleFaq={() => toggleFaq(index)}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-end justify-end max-lg:hidden">
            <p className="text-2xl font-bold text-[#40128B]">Any inquiry ?</p>
            <p className="text-2xl text-[#40128B]">we are here to help you</p>
            <Image src={girlQuestion} alt="girl question" className="mt-5 w-80 h-180 max-sm:w-16 max-sm:h-16" />
          </div>
        </div>
      </div>
      <DownloadMaterial />

      <div className='max-w-screen-lg mx-auto md:pt-[1rem] max-md:px-[1rem] max-md:py-[2rem]'>
        <RentalManual />

      </div>


      <div className='max-w-screen-lg mx-auto md:pt-[2rem] max-md:px-[1rem] max-md:py-[2rem]'>
      <InsightReview />
      </div>
      <div className="max-w-screen-lg mx-auto max-md:px-[1rem] max-md:py-[2rem]">
    
        <EstateService />
      </div>

              <div className='px-4 pb-4'>
              <ReadMore isFullScreen={true}/>
              </div>
      {/* <ArticleSlider /> */}

   </div>
   </div>
  );
}

export default Page;
