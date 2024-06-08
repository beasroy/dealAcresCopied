'use client';
import { useState } from 'react'
import Image from 'next/image'


import { TiPencil } from "react-icons/ti";
import Link from 'next/link';
import HelpDetails from '@/components/propertyListing/HelpDetails';


const LoginScreen = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [isEdit, setIsEdit] = useState(false);
    const [phone, setPhone] = useState('8767608383');

    const handleChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        if (value !== '' && index < otp.length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
        setOtp(newOtp);
        setIsButtonDisabled(newOtp.some(digit => digit === ''));
    };

    return (
        <section className='flex flex-col md:flex-row items-start justify-center md:gap-20 md:container mx-auto md:my-10 overflow-auto'>
            <div className='h-full w-full md:w-[400px] rounded-xl bg-[#f1f6fd] md:bg-[#e9f6fe] p-4 flex flex-row md:flex-col items-center 
            
            relative   rounded-b-[2rem] md:rounded-xl md:after:hidden after:max-w-screen-sm
            
            max-md:pb-0 max-md:pt-[3rem] max-md:justify-center
            '>
                <div className='flex flex-row items-center gap-2 mt-20 mb-5 max-md:m-0'>
                    <Image src={'/propertyListing/assets/thumbsup.svg'} alt='authentication' height={40} width={40} className='mt-3 mb-10 w-8 h-8 xs:w-10 xs:h-10' />
                    <h1 className="bannerHeading whitespace-nowrap  mb-4">
                        Your Phone number gives<br /> access to your account.</h1>
                </div>
                <Image src={'/propertyListing/assets/authentication.png'} alt='authentication' height={280} width={280} className='md:mt-3 md:mb-10 w-1/2 max-w-[200px] max-h-[200px] min-w-[140px] min-h-[140px] max-md:self-end m-0' />
                <HelpDetails  showOnDesktop />
            </div>
            <div className='h-full w-[90%] xs:w-[80%] mx-auto md:w-[400px] md:mt-20 rounded-xl p-5 border-t-4 border-r-2 border-l-2 border-[#dcf0fd] border-b-4 max-md:border-none flex flex-col justify-end '>
                <div className=' mx-auto  '>
                    <div className='md:text-2xl text-base xs:text-lg sm:text-xl'>
                        <h1 className="font-bold mt-2">
                            Welcome back,</h1>
                        <p className=''>
                            your number is registered with us.
                        </p>
                    <p className='pb-2  '>
                        Please login to continue
                    </p>
                    </div>
                    <div className='gap-2 items-center mb-2 cursor-pointer inline-flex'>
                        <input className='text-xs xs:text-sm md:text-base max-w-[50%]' disabled={!isEdit} value={isEdit ? phone : '+91-xxxxxxxxxx'} onChange={(e) => setPhone(e.target.value)} />
                        {!isEdit && <TiPencil size={20} color='blue' onClick={() => setIsEdit(true)} />}
                        {isEdit && <span onClick={() => setIsEdit(false)} className=' text-blue-500 font-bold rounded'>Save</span>}
                    </div>
                    <p className='text-2xl md:text-3xl font-light pb-2'>
                        Enter Your OTP
                    </p>
                    <div className="flex ">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                id={`otp-input-${index}`}
                                value={digit}
                                maxLength="1"
                                onChange={(e) => handleChange(index, e.target.value)}
                                className="w-12 h-12 mr-2 text-3xl text-center border-2 border-gray-300 focus:border-blue-500 outline-none focus:outline-none"
                            />
                        ))}
                    </div>
                    <p className='text-sm text-blue-400 mt-1 pb-4 md:pb-10'>Resend OTP</p>
                    <Link href={'user/choose-info'}>
                        <button
                            className={`w-full bg-blue-600 rounded-md px-8 py-3 font-bold text-white mb-3 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-700 ${isButtonDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
                            disabled={isButtonDisabled}
                        >Verify & Login</button>
                        <button className='w-full bg-white rounded-xl px-8 py-3 font-bold border-4 border-blue-600 text-blue-600 mb-4  hover:border-none'>Login via - E-mail</button>
                    </Link>

                    <HelpDetails showOnMobile />

                </div>

            </div>
        </section>
    )
}

export default LoginScreen