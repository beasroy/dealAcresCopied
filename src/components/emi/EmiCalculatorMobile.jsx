'use client'
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getMonthlyEmi } from '@/app/libs/getMonthlyEmi';
import { EmiPie } from './EmiPie';
import Link from 'next/link';
import { TextField } from '@mui/material';
import { useDeviceType } from '@/hooks/useDeviceType';

const EmiCalculatorMobile = () => {
    const [monthlyEmi, setMonthlyEmi] = useState(null);
    const [pieData, setPieData] = useState([100, 0]); // Initial pie data
    const [dType, setDType] = useState('desktop');
    const { deviceType } = useDeviceType()
    console.log(deviceType)

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
        setDType(deviceType);
    }, [])
    useEffect(() => {
        const loanData = getMonthlyEmi(amt, roi, tenure);

        if (loanData) {
            console.log(loanData)
            setMonthlyEmi(loanData[0]);
            setPieData([loanData[1], loanData[2] - loanData[1]]);
        }
    }, [amt, roi, tenure]);

    return (
        <div className='grid 
        grid-cols-2 
        gap-x-4 gap-y-2
        grid-rows-6 
        place-items-center 
        border rounded-lg shadow border-gray-400 
        px-2 sm:px-8 py-2 xs:py-4 
        max-w-[500px] md:max-w-none 
        mx-auto md:mx-0  
        max-xs:max-h-[300px] '>
            <div className='row-start-1 row-span-1  col-span-1 w-full flex justify-center xs:my-1'>

                <TextField
                    className='border border-gray-400  rounded-lg w-full md:w-2/3 shadow text-sm sm:text-base md:text-lg'
                    placeholder='Loan Amount'
                    type='number'
                    label="Amount"
                    step='0.01'
                    id='amt'
                    {...register('amt', { required: "Please enter a valid loan amount" })}
                    size={dType == 'smallphone' ? 'small' : 'medium'}
                />

            </div>
            <div className='row-start-1 row-span-1  col-span-1 w-full flex justify-center xs:my-1'>
                <TextField
                    type='number' 
                    className='border border-gray-400  rounded-lg w-full md:w-2/3 shadow text-sm sm:text-base md:text-lg'
                    placeholder='Loan Tenure'
                    label="Tenure"
                    id='tenure'
                    size={dType == 'smallphone' ? 'small' : 'medium'}
                    {...register('tenure', { required: "Please enter a valid loan tenure." })}
                />

            </div>

            <div className='row-start-2 row-end-6 col-start-1  col-span-1 flex justify-center md:h-full md:w-[300px] max-w-full xs:max-w-[200px] md:max-w-none max-h-[300px] md:max-h-[600px]'>
                <EmiPie data={pieData} />
            </div>
            <div className='row-start-2 row-span-1 col-span-1 w-full flex justify-center xs:my-1'>

                <TextField
                    type='number'
                
                    className='border border-gray-400  rounded-lg w-full md:w-2/3 shadow text-sm sm:text-base md:text-lg'
                    placeholder='Rate Of Interest'
                    label="ROI"
                    id='roi'
                    size={dType == 'smallphone' ? 'small' : 'medium'}
                    {...register('roi', { required: "Please enter a valid loan interest." })}
                />


            </div>
            <div className='row-start-3 row-span-3 col-span-1 h-full w-full flex justify-center relative'>
                <div className={`w-full md:w-2/3 rounded-lg shadow p-2 border-gray-400 border text-center h-full transition-all ${!!monthlyEmi ? 'flex visible scale-100' : 'invisible scale-0'} flex-col justify-around gap-y-1 xs:gap-y-2 `}>
                    <p className='font-bold text-xs xs:text-sm md:text-base'>Monthly EMI</p>

                    <p className='font-bold text-sm xs:text-lg md:text-xl'>₹ {monthlyEmi && !isNaN(monthlyEmi) && monthlyEmi.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>

                    <p className='text-xs xs:text-sm md:text-base'>Total Payable Amount<br />₹ {(pieData[1] + pieData[0]).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>

                    <Link href={`/instant-loan?amount=${amt}&roi=${roi}&tenure=${tenure}`} className='bg-blue-600 text-xs xs:text-sm sm:text-base whitespace-nowrap text-white rounded shadow py-1 px-2 '>
                        Get Instant Loan
                    </Link>
                </div>

                <div className={`absolute w-full h-full md:w-2/3  bg-white border border-gray-400 text-black rounded-lg flex jusitfy-center items-center text-lg font-bold ${!monthlyEmi ? 'visible flex scale-100' : 'invisible scale-0'} transition-all duration-300 text-center justify-center items-center`} >
                    <p className='text-sm md:text-base'>Please Fill All the fields</p>
                </div>



            </div>

            <div 
            className="
            row-start-6 row-span-1  col-span-2 sm:col-span-1 
            flex items-center justify-around w-full
            gap-2
            ">
                <div
                className="
                flex flex-col items-center text-xs sm:text-sm md:text-base
                ">
                    <span>Principal Amount</span>
                    <span>{781831823812}</span>
                </div>
                <div
                className="
                flex flex-col items-center text-xs sm:text-sm md:text-base
                ">
                    <span>Interest Amount</span>
                    <span>{781831823812}</span>
                </div>
            </div>


        </div>
    );
};

export default EmiCalculatorMobile;
