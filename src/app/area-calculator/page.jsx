"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Select from "react-select";
import { useDeviceType } from "@/hooks/useDeviceType";

import { FaExchangeAlt } from "react-icons/fa";
import calculatorImg from "../../../public/areaCalculator/bg.png";
import headerImage from "../../../public/areaCalculator/header.png";
import girlQuestion from "../../../public/areaCalculator/girl_with_question.webp";
import ReadMore from "@/components/propertyListing/ReadMore/ReadMore";
import BlogCard from "@/components/areaCalculator/BlogCard";
import FAQ from "@/components/areaCalculator/FAQ";
import { faqdata } from "@/components/areaCalculator/faqData";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";



const indianStates = [
  { value: "Andhra Pradesh", label: "Andhra Pradesh" },
  { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
  { value: "Assam", label: "Assam" },
  { value: "Bihar", label: "Bihar" },
  { value: "Chhattisgarh", label: "Chhattisgarh" },
  { value: "Goa", label: "Goa" },
  { value: "Gujarat", label: "Gujarat" },
  { value: "Haryana", label: "Haryana" },
  { value: "Himachal Pradesh", label: "Himachal Pradesh" },
  { value: "Jharkhand", label: "Jharkhand" },
  { value: "Karnataka", label: "Karnataka" },
  { value: "Kerala", label: "Kerala" },
  { value: "Madhya Pradesh", label: "Madhya Pradesh" },
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "Manipur", label: "Manipur" },
  { value: "Meghalaya", label: "Meghalaya" },
  { value: "Mizoram", label: "Mizoram" },
  { value: "Nagaland", label: "Nagaland" },
  { value: "Odisha", label: "Odisha" },
  { value: "Punjab", label: "Punjab" },
  { value: "Rajasthan", label: "Rajasthan" },
  { value: "Sikkim", label: "Sikkim" },
  { value: "Tamil Nadu", label: "Tamil Nadu" },
  { value: "Telangana", label: "Telangana" },
  { value: "Tripura", label: "Tripura" },
  { value: "Uttar Pradesh", label: "Uttar Pradesh" },
  { value: "Uttarakhand", label: "Uttarakhand" },
  { value: "West Bengal", label: "West Bengal" },
  {
    value: "Andaman and Nicobar Islands",
    label: "Andaman and Nicobar Islands",
  },
  { value: "Chandigarh", label: "Chandigarh" },
  {
    value: "Dadra and Nagar Haveli and Daman and Diu",
    label: "Dadra and Nagar Haveli and Daman and Diu",
  },
  { value: "Lakshadweep", label: "Lakshadweep" },
  { value: "Delhi", label: "Delhi" },
  { value: "Puducherry", label: "Puducherry" },
];

const conversionData = {
  gaj: {
    gaj: 1,
    squareyard: 0.9,
    acres: 0.0002,
    squarefeet: 9,
    hectare: 0.00008,
  },
  squareyard: {
    gaj: 1,
    squareyard: 1,
    acres: 0.0002,
    squarefeet: 9,
    hectare: 0.00008,
  },
  acres: {
    gaj: 4840.04,
    squareyard: 4840,
    acres: 1,
    squarefeet: 43560,
    hectare: 0.4,
  },
  squarefeet: {
    gaj: 0.1,
    squareyard: 0.1,
    acres: 0.00002,
    squarefeet: 1,
    hectare: 0.000009,
  },
  hectare: {
    gaj: 11959.99,
    squareyard: 11959.89,
    acres: 2.47,
    squarefeet: 107639,
    hectare: 1,
  },
};

const options = [
  { value: "gaj", label: "Gaj" },
  { value: "squareyard", label: "Square Yard" },
  { value: "acres", label: "Acres" },
  { value: "squarefeet", label: "Square Feet" },
  { value: "hectare", label: "Hectare" },
];

const fakeBlog = [
  {
    imageUrl: "https://via.placeholder.com/400x300",
    date: "October 10, 2023",
    title: "The Art of Digital Painting",
  },
  {
    imageUrl: "https://via.placeholder.com/400x300",
    date: "September 25, 2023",
    title: "Exploring the Hidden Treasures of the Amazon Rainforest",
  },
  {
    imageUrl: "https://via.placeholder.com/400x300",
    date: "September 15, 2023",
    title: "A Beginner's Guide to Astrophotography",
  },
  {
    imageUrl: "https://via.placeholder.com/400x300",
    date: "August 28, 2023",
    title: "Cooking with Exotic Spices: A Culinary Adventure",
  },
];


const AreaCalculator = () => {
  const [selectedState, setSelectedState] = useState("");
  const [totalUnits, setTotalUnits] = useState("");
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [result, setResult] = useState("");
  const [isLastInputDisabled, setIsLastInputDisabled] = useState(true);
  const [inputError, setInputError] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [selectedConversion, setSelectedConversion] = useState(null);
  const [dType, setDType] = useState('desktop')
  const { deviceType } = useDeviceType()

  useEffect(() => {
    setDType(deviceType);
  }, [])
  console.log(dType)

  useEffect(() => {
    if (selectedState && totalUnits && fromValue && toValue) {
      if (!isNaN(totalUnits) && parseFloat(totalUnits) >= 0) {
        setIsLastInputDisabled(false);
        const conversionFactor = conversionData[fromValue][toValue];
        const convertedValue = totalUnits * conversionFactor;
        setResult(convertedValue);
        setInputError("");
      } else {
        setIsLastInputDisabled(true);
        setResult("");
        setInputError("Please enter a valid non-negative number.");
      }
    } else {
      setIsLastInputDisabled(true);
      setResult("");
      setInputError("");
    }
  }, [selectedState, totalUnits, fromValue, toValue]);

  const toggleFaq = (index) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };
  const handleConversionClick = (conversion) => {
    setSelectedConversion(conversion);
  };

  const currentFaqData = faqdata.find((data) => data.button === selectedConversion)?.FAQs || [
    {
      Q: "How do I successfully close a deal?",
      A:
        "Closing a deal successfully involves understanding your customer's needs, building trust, and presenting a compelling offer.",
    },
    {
      Q: "What are common challenges in deal closures?",
      A:
        "Common challenges include objections from prospects, negotiation issues, and lengthy decision-making processes.",
    },
    {
      Q: "Is it important to follow up after a deal is closed?",
      A:
        "Yes, following up after a deal closure helps ensure customer satisfaction and may lead to repeat business or referrals.",
    },
    {
      Q: "What should I do if a deal is stuck in the negotiation phase?",
      A:
        "Try to understand the prospect's concerns, address objections, and be flexible in finding a mutually beneficial solution.",
    },
    {
      Q: "How can I improve my closing ratio?",
      A:
        "Improving your closing ratio involves refining your sales techniques, understanding your target audience, and providing exceptional customer service.",
    },
    {
      Q: "What are some effective closing techniques?",
      A:
        "Effective closing techniques include the assumptive close, the summary close, and the trial close.",
    },
    {
      Q: "How can I handle objections during the closing process?",
      A:
        "Handle objections by actively listening to the prospect, acknowledging their concerns, and offering solutions or counterarguments.",
    },
    {
      Q: "What role does communication play in deal closures?",
      A:
        "Clear and effective communication is essential in understanding the prospect's needs and conveying the value of your offer.",
    },
    {
      Q: "What are the best practices for managing a sales pipeline?",
      A:
        "Best practices include qualifying leads, maintaining accurate records, and nurturing relationships with potential customers.",
    },
    {
      Q: "How do I handle deal closures in a competitive market?",
      A:
        "In a competitive market, focus on differentiation, building strong customer relationships, and providing exceptional service to stand out.",
    },
  ];
  const styles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      minHeight: `${dType === 'smallphone' || dType === 'phone' ? 'unset' : '38px'}`,
      alingItems: "start"
    }),
    valueContainer: (baseStyles, state) => ({
      ...baseStyles,
      paddingTop: `${dType === 'smallphone' || dType === 'phone' ? '0px' : '2px'}`,
      paddingBottom: `${dType === 'smallphone' || dType === 'phone' ? '0px' : '2px'}`,
      height: `${dType === 'smallphone' || dType === 'phone' ? '20px' : '100%'}`,

    }),
    dropdownIndicator: (baseStyles, state) => ({
      ...baseStyles,
      paddingTop: `${dType === 'smallphone' || dType === 'phone' ? '0px' : '2px'}`,
      paddingBottom: `${dType === 'smallphone' || dType === 'phone' ? '0px' : '2px'}`,
      alignSelf: `${dType === 'smallphone' || dType === 'phone' ? 'start' : 'centre'}`
    }),
    IndicatorContainer: (baseStyles, state) => ({
      ...baseStyles,
      alignSelf: 'start',
    }),
    singleValue: (baseStyles, state) => ({
      ...baseStyles,
      height: `${dType === 'smallphone' || dType === 'phone' ? '20px' : '100%'}`,
      display: 'flex',
      alignItems: "center",
      position: "absolute",
      top: "0px"
    }),
    placeholder: (baseStyles, state) => ({
      ...baseStyles,
      height: `${dType === 'smallphone' || dType === 'phone' ? '20px' : '100%'}`,
      alignSelf: 'start',
      display: "flex",
      alignItems: "center",
      color: "#a4aab5"
    })
  }

  return (
    <div>
      <div className="relative px-5 pt-5 hidden md:block ">
        <Image
          src={headerImage}
          className="h-full w-full"
          alt="area calculator"
        />

        <div className="hidden md:block p-4 absolute top-[25%] max-xl:top-[12%] max-lg:top-[5%] left-20 w-1/4 bg-white border-4 rounded-lg border-blue-400 h-fit">
          <h2 className="text-2xl font-bold">Area Converter</h2>
          <div className="space-y-3 mt-3">
            <Select
              options={indianStates}
              placeholder="State"
              onChange={(value) => setSelectedState(value.value)}
              
              styles={styles}
            />

            <input
              placeholder="Total Units"
              type="number"
              step="any"
              min="0"
              value={totalUnits}
              onChange={(e) => setTotalUnits(e.target.value)}
              className="w-full lg:py-1  xl:py-1.5 border-2 border-blue-300 pl-2 focus:outline-blue-600 rounded-md text-gray-500"
            />

            {inputError && <p className="text-red-600">{inputError}</p>}

            <div className="flex flex-row items-center justify-center space-x-2">
              <Select
                placeholder="From"
                options={options}
                className="w-full focus:outline-blue-600 rounded-md text-gray-500"
                onChange={(value) => setFromValue(value.value)}
                styles={styles}
              />
              <FaExchangeAlt className="h-10 w-10" />
              <Select
                placeholder="To"
                options={options}
                className="w-full focus:outline-blue-600 rounded-md text-gray-500"
                onChange={(value) => setToValue(value.value)}
                styles={styles}
              />
            </div>

            <input
              disabled={isLastInputDisabled}
              value={result}
              className="w-full lg:py-1  xl:py-1.5 border-2 border-blue-300 pl-2 focus:outline-blue-600 rounded-md text-gray-500"
            />
          </div>
        </div>
      </div>
      <div className="relative rounded-xl mb-[130px]  min-h-[225px] md:hidden ">
        <Image
          src={calculatorImg}
          className=" relative  w-full z-[9] h-[180px]  md:h-[300px] xl:h-[450px] "
          alt="area calculator"
          width={800} height={800}
        />
        <div className="p-4  absolute 
        top-[70%]
        md:top-[20%] 
        xl:top-[40%]
        left-[10%] 
      bg-white border-4 rounded-lg border-blue-400 
        max-md:w-[80%] 
        mx-auto 
        max-md:left-[10%] 
        max-md:border-none 
        max-md:rounded-[2rem] 
        max-md:shadow-[0px_0px_5px_rgba(13,99,141,0.5)] z-10 md:hidden">
          <h2 className="text-base md:text-2xl font-bold">Area Converter</h2>
          <div className="space-y-2 md:space-y-4 mt-2  md:mt-5">
            <Select
              options={indianStates}
              placeholder="State"
              onChange={(value) => setSelectedState(value.value)}
              className="react-select-container"
              classNamePrefix="react-select"
              classNames={{
                control: () => `
                 border-2  text-xs `,
                input: () => 'text-sm ',
                option: () => 'text-xs  p-0'
              }}

              styles={styles}
            />

            <input
              placeholder="Total Units"
              type="number"
              step="any"
              min="0"
              value={totalUnits}
              onChange={(e) => setTotalUnits(e.target.value)}
              className="w-full pt-[2px]  pb-[2px]  border-2 md:border-blue-300 pl-2 focus:outline-blue-600 rounded-md text-xs placeholder:text-xs text-gray-500"
            />

            {inputError && <p className="text-red-600">{inputError}</p>}

            <div className="flex flex-row items-center justify-center space-x-2">
              <Select
                placeholder="From"
                options={options}
                className="w-full focus:outline-blue-600 rounded-md text-gray-500"
                onChange={(value) => setFromValue(value.value)}
                classNames={{
                  control: () => `
                   border-2  text-xs `,
                  input: () => 'text-sm ',
                  option: () => 'text-xs  p-0'
                }}
                styles={styles}
              />
              <FaExchangeAlt size={20} />
              <Select
                placeholder="To"
                options={options}
                className="w-full focus:outline-blue-600 rounded-md text-gray-500"
                onChange={(value) => setToValue(value.value)}
                classNames={{
                  control: () => `
                   border-2  text-xs `,
                  input: () => 'text-sm ',
                  option: () => 'text-xs  p-0',
                }}
                styles={styles}
              />
            </div>

            <input
              disabled={isLastInputDisabled}
              value={result}
              className="w-full pt-[2px] md:pt-2 pb-[2px] md:pb-2 border-2 md:border-blue-300 pl-2 focus:outline-blue-600 rounded-md text-gray-500 text-xs md:text-lg placeholder:text-xs"
            />
          </div>
        </div>
      </div>

      <div className="px-[5rem] mb-3 max-md:px-[1rem]">
        <p className="text-lg md:text-2xl font-semibold">Popular Area Conversions</p>
        <div className="flex flex-wrap gap-2 md:gap-4 mt-3">

          {faqdata.map((item, index) => (
            <div
              key={index}
              className="bg-blue-200 text-black py-1 px-2 rounded-md inline-block text-xs  md:text-base"
              onClick={() => handleConversionClick(item.button)}
            >
              {item.button}
            </div>
          ))}
        </div>
      </div>

      <div className="px-[5rem] mb-3 mt-4 md:mt-10 max-md:px-[1rem]">
        <h2 className="text-2xl sm:text-3xl font-bold max-md:text-xl;">
          All About Land Measurment
        </h2>

        <div className="max-md:flex max-md:flex-col-reverse max-md grid grid-cols-2 w-full mt-10 gap-8 text-justify text-lg max-md:text-sm max-md:mt-5">
          <div className="space-y-3">
            <p>
              Land measurement in India has always been done using various local
              and native measurement units such as Bigha, Ground, Kanal, etc,
              depending upon the state. These are locally set benchmarks, which
              have been in usage for a long time. These unit measurements vary
              greatly across regions, which is why converting them to
              international standard units, or globally accepted units, also
              known as SI units is of paramount importance. In addition, to
              understand the exact area of land as well as to calculate the
              value of land, converting local units into SI units, using a land
              area calculator, is advisable.
            </p>
            <p>
              Some of the common land measurement units across India are
              hectares, acres, square meters, square yards. Other than this,
              Bigha, Marla, Cent, Guntha, and Ground are regional units and
              their size varies from state to state.
            </p>
          </div>
          <div className="max-md:h-[15rem] bg-center bg-no-repeat bg-cover bg-[url('https://res.cloudinary.com/dmkpqiqea/image/upload/v1696473790/engineer_camera_ijgzj5.jpg')]"></div>
        </div>

        <div className="max-md:flex max-md:flex-col grid grid-cols-2 w-full mt-10 gap-8 text-justify text-lg max-md:text-base">
          <div className="max-md:h-[15rem] bg-center bg-no-repeat bg-cover bg-[url('https://res.cloudinary.com/dmkpqiqea/image/upload/v1696473980/man_on_land_ijehan.jpg')]"></div>
          <div>
            <h2 className="font-semibold">
              Land area measurement units used in North India
            </h2>
            <p>
              Bigha, Biswa, Biswansi, Killa, Ghumaon, Kanal are popular land
              area measurement units used in Haryana, Uttar Pradesh,
              Uttarakhand, Punjab, etc. To convert these local units into SI
              units, use the area conversion calculator.
            </p>
            <h2 className="mt-5 font-semibold">
              Land area measurement units used in South India
            </h2>
            <p>
              Ankanam, Cent, Ground, Guntha, Kuncham are popular land
              measurement units used in states such as Tamil Nadu, Andhra
              Pradesh, Kerala, Karnataka, etc. Convert these local units into
              globally accepted measurement units using the area calculator.
            </p>
          </div>
        </div>

        <div className="max-md:flex max-md:flex-col-reverse grid grid-cols-2 w-full mt-10 gap-8 text-justify text-lg max-md:text-base">
          <div>
            <h2 className="font-semibold">
              Land area measurement units used in East India
            </h2>
            <p>
              Chatak, Decimal, Dhur, Kattha, Lecha are popular land measurement
              units mostly used in West Bengal, Assam, Bihar, Tripura,
              Jharkhand, etc. For area conversion to other internationally
              recognized units, use the land area calculator.
            </p>
            <h2 className="mt-5 font-semibold">
              Land area measurement units used in West India
            </h2>
            <p>
              Bigha, Biswa and Biswansi are popular land area measurement units
              used in lower parts of Rajasthan and Gujarat. Convert these local
              units into globally used measurement units using an area
              calculator.
            </p>
          </div>

          <div className="max-md:h-[15rem] bg-center bg-no-repeat bg-cover bg-[url('https://res.cloudinary.com/dmkpqiqea/image/upload/v1696474042/camera_on_land_mmlizy.jpg')]"></div>
        </div>
      </div>

      <div className="bg-[#EDE4FF] mt-10 mb-3 px-[5rem] py-[3rem] max-md:px-[1rem] max-md:py-[2rem]">
        <div className="grid grid-cols-2 items-center max-lg:grid-cols-1">
          <div>
            <h2 className="text-3xl font-bold max-sm:text-xl">
              Frequently Asked Question
            </h2>
            <div className="mt-5 w-full">
              {currentFaqData.map((item, index) => (
                <FAQ
                  key={index}
                  question={item.Q}
                  answer={item.A}
                  isOpen={openFaqIndex === index}
                  toggleFaq={() => toggleFaq(index)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-end justify-end max-lg:hidden">
            <p className="text-2xl font-bold text-[#40128B]">Any inquiry ?</p>
            <p className="text-2xl text-[#40128B]">we are here to help you</p>
            <Image src={girlQuestion} alt="girl question" className="mt-5 w-80 h-180 max-sm:w-16 max-sm:h-16" />
          </div>
        </div>
          </div>
          <div className="px-[1rem] sm:px-[2rem] pb-4 md:hidden">
     <ReadMore isFullScreen={true} subheader={"Read realty news guides and articles"}/>
     </div>
    </div>
        
    
    );
}


export default AreaCalculator;
