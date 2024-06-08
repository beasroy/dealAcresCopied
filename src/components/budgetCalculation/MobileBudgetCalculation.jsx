import React from 'react'
import Budgetslider from './slider';

const MobileBudgetCalculation = ({ onClose }) => {
    return (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
            <div className='bg-white md:w-3/5 w-[85%]  max-h-[80vh] overflow-y-auto rounded-lg px-6 py-4 relative shadow-md scrollbar'>
                <button className='absolute top-2 right-2 text-gray-500 hover:text-gray-700' onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className='text-base font-bold'>Calculate your home-buying budget</div>
                <div className='mt-5 grid grid-cols-1  gap-4'>
                    <Budgetslider heading={'Savings for buying Home'} minValue={0} maxValue={20} unit={'cr'} />
                    <Budgetslider heading={'Preferred loan tenure'} minValue={1} maxValue={30} unit={'Years'} />
                    <Budgetslider heading={'EMI you can afford'} minValue={1000} maxValue={1000000} unit={'Lacs'} />
                </div>
                <button className='text-white bg-blue-700 px-2 py-2 rounded-md text-xs mt-4 font-bold w-full'>Explore properties in this range</button>
                <p className='text-[0.5rem] text-gray-500 mt-2'>Estimated budget is calculated at an average interest rate of 8.75%</p>
            </div>
        </div>
    )
}

export default MobileBudgetCalculation