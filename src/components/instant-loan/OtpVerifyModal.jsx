'use client'

import { TextField } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const OtpVerifyModal = ({
    contact = 9999999999,
    setRegister,
    onClose
}) => {

    const [otp, setOtp] = useState("")

    const handleVerify = () => {

        if(!otp){
            return
        }
        toast.success("You have successfully Registered!", {
            position: "top-right",
            autoClose: 3000,
          });
        setTimeout(() => {
            
            setRegister();
        }, 2000)

        
    }

    const [hasOtpSent, setHasOtpSent] = useState(false);
    const [timer, setTimer] = useState(10)
    const sendOtp = () => {
        setTimeout(() => {
            setHasOtpSent(true);
            setTimer(10);
            toast.success("OTP has been sent successfully!", {
                position: "top-right",
                autoClose: 3000,
              });
        }, 1000)
    }

    useEffect(() => {
        console.log(timer);
        if(!hasOtpSent){
            return 
        }
        
        const interval = setInterval(() => {
            if(timer > 0){
                setTimer(prev => prev - 1)
            }
        }, 1000)

        return () => clearInterval(interval);
    }, [timer, hasOtpSent])

    const getCurrentSeconds = () => {
        console.log(new Date().getSeconds())
    }


  return (
    <div className="z-20 absolute bg-neutral-400/70 inset-0 flex items-center justify-center  ">

        <div className='shadow-md rounded-md bg-white py-2 px-4 max-w-screen-sm mx-auto flex flex-col gap-2'>
        <div className="flex justify-between items-center gap-4">
        <h2 className="text-2xl font-bold py-2 ">
            Verify your phone number.
        </h2>
        <span onClick={() => onClose('otpModal')} className='rounded-md 
        cursor-pointer shadow bg-gray-200  p-1 text-rose-600'>
            <AiOutlineClose size={30} />
        </span>
        </div>
        <TextField id="filled-basic" label="Phone Number" variant="filled" value={contact}
        
        className='w-full' disabled />
        {
            hasOtpSent && <div className='flex flex-col gap-1'>
                    <TextField
            variant='outlined'
            value={otp} 
            label="Enter your OTP"
            className='w-full'

            onChange={(e) => setOtp(e.target.value) }
            ></TextField>

            <button className='bg-green-500 text-lg text-white rounded w-full font-bold py-2 ' onClick={handleVerify}>
            Verify
        </button>
                </div>
        }
        
        {
            
            !hasOtpSent ?
            <button className='bg-blue-500 text-lg text-white rounded w-full font-bold py-2 ' onClick={sendOtp}>
            Send OTP
        </button> : <div>
                {timer > 0 ? 
                
                `Resend in ${timer} seconds` : <button className='bg-blue-500 text-lg text-white rounded w-full font-bold py-2 ' onClick={sendOtp}>
            Resend 
        </button>}
            </div>}
        </div>

        <ToastContainer/>
      
    </div>
  )
}

export default OtpVerifyModal
