'use client'
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getMonthlyEmi } from '@/app/libs/getMonthlyEmi';
import { EmiPie } from './EmiPie';
import Link from 'next/link';

const EmiCalculator = () => {
    const [monthlyEmi, setMonthlyEmi] = useState(null);
    const [pieData, setPieData] = useState([100, 0]); // Initial pie data

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const amt = watch('amt', '');
    const roi = watch('roi', '');
    const tenure = watch('tenure', '');

    useEffect(() => {
        const loanData = getMonthlyEmi(amt, roi, tenure);
        if (loanData) {
            setMonthlyEmi(loanData[0]);
            setPieData([loanData[1], loanData[2]]);
        }
    }, [amt, roi, tenure]);

    return (
        <div className='grid grid-cols-2 grid-rows-6 place-items-center border rounded-lg shadow border-gray-400 px-2 sm:px-8 py-4 max-w-[500px] md:max-w-none mx-auto md:mx-0 '>
            <div className='row-start-1 row-span-1  col-span-1 w-full flex justify-center'>
                <input
                    className='border border-gray-400 py-2 px-4 rounded-lg w-full md:w-2/3 shadow text-sm sm:text-base md:text-lg'
                    placeholder='Loan Amount'
                    type='number'
                    step='0.01'
                    id='amt'
                    {...register('amt', { required: "Please enter a valid loan amount" })}
                />
            </div>
            <div className='row-start-2 md:row-start-1 row-span-1  col-span-1 w-full flex justify-center'>
                <input
                    type='number'
                    className='border border-gray-400 py-2 px-4 rounded-lg w-full md:w-2/3 shadow text-sm sm:text-base md:text-lg'
                    placeholder='Loan Tenure'
                    id='tenure'
                    {...register('tenure', { required: "Please enter a valid loan tenure." })}
                />
            </div>

            <div className='row-start-1 md:row-start-2 row-span-3 md:row-span-4 col-start-2 md:col-start-1  col-span-1 flex justify-center md:h-full md:w-[300px]  max-w-[200px] sm:max-w-none max-h-[300px] md:max-h-[600px]'>
                <EmiPie data={pieData} />
            </div>
            <div className='row-start-3 md:row-start-2 row-span-1 col-span-1 w-full flex justify-center'>
                <input
                    type='number'
                    className='border border-gray-400 py-2 px-4 rounded-lg w-full md:w-2/3 shadow text-sm sm:text-base md:text-lg'
                    placeholder='Rate Of Interest'
                    id='roi'
                    {...register('roi', { required: "Please enter a valid loan interest." })}
                />
            </div>
            <div className='row-start-[5] md:row-start-3 row-span-3 col-span-2 md:col-span-1 h-full w-full flex justify-center'>
                <div className={`w-2/3 rounded-lg shadow py-2 px-4 border-gray-400 border text-center h-full transition-all ${!!monthlyEmi ? 'flex visible scale-100' : 'invisible scale-0'} flex-col justify-around `}>
                    <p className='font-bold'>Monthly EMI</p>
                    <p className='font-bold text-xl'>₹ {monthlyEmi && !isNaN(monthlyEmi) && monthlyEmi.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    <p>Total Payable Amount<br />₹ {pieData[1].toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    <Link href={`/instant-loan?amount=${amt}&roi=${roi}&tenure=${tenure}`} className='bg-blue-600 text-white rounded shadow py-1 px-2 '>
                        Get Instant Loan
                    </Link>
                </div>
            </div>
            <div className='row-start-[4] md:row-start-6 row-span-1 col-span-2 md:col-span-1 h-full w-[80%] py-2 gap-2 flex justify-between text-center'>
                <p>Principle Amount<br />{pieData[1]}</p>
                <p>Interest Amount<br />{pieData[0]}</p>
            </div>
        </div>
    );
};

export default EmiCalculator;
