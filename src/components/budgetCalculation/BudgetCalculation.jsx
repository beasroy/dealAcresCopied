import React from 'react';
import { IoMdLocate } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import Budgetslider from './slider';
import PriceRangeSlider from './PriceRangeSlider';
import './BudgetCalculation.css';

const BudgetCalculation = ({ onClose }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='bg-white md:w-2/5 w-[85%]  max-h-[80vh] overflow-y-auto rounded-lg p-8 relative shadow-md scrollbar'>
        <button className='absolute top-2 right-2 text-gray-500 hover:text-gray-700' onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className='text-center text-3xl font-bold'>Budget Calculator</div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-10'>
          <Budgetslider heading={'Savings for buying Home'} minValue={0} maxValue={20} unit={'cr'} />
          <Budgetslider heading={'Preferred loan tenure'} minValue={1} maxValue={30} unit={'Years'} />
          <Budgetslider heading={'EMI you can afford'} minValue={1000} maxValue={1000000} unit={'Lacs'} />
        </div>
        <p className='text-xs text-gray-500 mt-16'>Estimated budget is calculated at an average interest rate of 8.75%</p>
        <div className='flex flex-col gap-2 md:flex-row p-4 mt-12'>
          <select>
            <option>Buy</option>
            <option>Buy</option>
            <option>Buy</option>
          </select>
          <div className='border-r-2'/>
          <input className='md:w-4/5' placeholder='Enter Locality/Project/Society/Landmark' />
          <div className='flex flex-row gap-2'>
            <div className='rounded-full bg-blue-100 p-2'>
              <IoMdLocate className=' text-blue-500 md:w-5 md:h-5 cursor-pointer' /> 
            </div>
            <div className='rounded-full bg-blue-100 p-2'>
              <FaMicrophone className=' text-blue-500 md:w-5 md:h-5 cursor-pointer' /> 
            </div>
          </div>
          <div className='border-r-2'/>
        </div>
        <hr />
      
        <PriceRangeSlider />
    
      </div>
    </div>
  );
};

export default BudgetCalculation;
