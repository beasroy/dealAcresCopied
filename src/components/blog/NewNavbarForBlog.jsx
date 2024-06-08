import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { RiArrowDropDownLine } from "react-icons/ri";

const NewNavbarForBlog = () => {
  const [openDropdown, setOpenDropdown] = useState(null);


  const handleDropdownOpen = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const dropdownOptions = {
    PropertyTrends: ["NRI", "Infrastructure", "Construction", "Housing Schemes", "Delhi NCR"],
    Lifestyle: ["Home Improvement", "Gardening", "Green Homes", "Home Automation", "Shopping Hubs", "Pet House", "Famous Monuments", "Packers & Movers"],
    MustKnow: ["Home Loan", "Legal", "Taxation", "Personal Finance", "Co-workation", "Retail and Hospitality", "Citizen Services"],
    Resources: ["Buyer Manuals", "Seller Manuals", "Tenant Manuals", "Real Estate News", "RERA", "GST", "Smart Cities"],
  };

  return (
    <nav className="bg-black text-white flex items-center text-base justify-between py-4 px-6 md:px-12">
      <div className="mr-2 md:mr-4 text-xl">
        <span className="text-white font-bold ">Deal Acres</span>
      </div>
      <div>
        <ul className="lg:flex list-none cursor-pointer hidden">
          {Object.keys(dropdownOptions).map((key) => (
            <li key={key} className='flex flex-row items-center mr-6 relative'>
              <p onClick={() => handleDropdownOpen(key)}>{key}</p>
              <RiArrowDropDownLine className='w-6 h-6' />
              {openDropdown === key && (
               <ul onMouseLeave={() => setOpenDropdown(null)} className="absolute bg-black text-white shadow-lg top-[95%] z-10">
               {dropdownOptions[key].map((option, index) => (
                 <li key={index} className="px-4 py-2 hover:bg-gray-200 hover:text-black w-[160px] text-sm">{option}</li>
               ))}
             </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className='flex items-start justify-center gap-6 '>
        <button className="md:mr-2 text-blue-700 bg-white px-3 py-0.5 rounded-xl text-xs md:text-sm font-bold">Post Property <span className='text-green-600 font-bold uppercase'> Free</span></button>
        <button className="mr-2 text-blue-700 bg-white px-3 py-0.5 rounded-xl text-xs  md:text-sm font-bold ">Business Listing <span className='text-green-600 font-bold uppercase'> Free</span></button>
      </div>
      <div className='flex items-start justify-center gap-6'>
        <FaBars className="text-white text-lg cursor-pointer" />
      </div>
    </nav>
  );
};

export default NewNavbarForBlog;
