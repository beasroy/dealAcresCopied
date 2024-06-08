import React, { useState } from 'react';
import { TiPencil } from "react-icons/ti";
import { FaSave } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Link from 'next/link';

const OtpPopup = ({ onClose }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [isEditing, setIsEditing] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('xxxxxxxxxx');
    const [editedPhoneNumber, setEditedPhoneNumber] = useState(phoneNumber);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        if (value !== '' && index < otp.length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
        setOtp(newOtp);
        setIsButtonDisabled(newOtp.some(digit => digit === ''));
    };

    const handleEditPhoneNumber = () => {
        setIsEditing(true);
    };

    const handleSavePhoneNumber = () => {
        setPhoneNumber(editedPhoneNumber);
        setIsEditing(false);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative md:w-[400px] md:mt-10 rounded-xl p-4 border-2 border-blue-200 shadow-md bg-white">
                <div className="absolute top-2 right-2 text-gray-600" onClick={onClose}>
                    <IoClose size={24} />
                </div>
                <div className="font-medium md:font-bold text-xl mt-2 text-left">Welcome back,</div>
                <div className='text-lg font-medium text-left'>your number is registered with us.</div>
                <div className='pb-2 text-lg font-medium text-left'>Please login to continue</div>
                <div className='flex gap-3 items-center mb-2 text-left'>
                    {isEditing ? (
                        <input
                            type="text"
                            value={editedPhoneNumber}
                            onChange={(e) => setEditedPhoneNumber(e.target.value)}
                            className='text-lg border-2 border-blue-500 rounded-md p-1'
                        />
                    ) : (
                        <div>+91-{phoneNumber}</div>
                    )}
                    {isEditing ? (
                        <FaSave size={30} color='green' onClick={handleSavePhoneNumber} />
                    ) : (
                        <TiPencil size={30} color='blue' onClick={handleEditPhoneNumber} />
                    )}
                </div>
                <div className='text-2xl font-light pb-2 text-left'>Enter Your OTP</div>
                <div className="flex">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            id={`otp-input-${index}`}
                            value={digit}
                            maxLength="1"
                            onChange={(e) => handleChange(index, e.target.value)}
                            className="w-12 h-12 mr-2 text-3xl text-center border-2 border-gray-500 focus:border-blue-500 outline-none focus:outline-none"
                        />
                    ))}
                </div>
                <div className='text-sm text-blue-400 mt-1 pb-6 text-left'>Resend OTP</div>
                <Link href={'/'}>
                    <button
                        className={`w-full bg-blue-600 rounded-md px-8 py-2 font-bold text-white mb-3 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-700 ${isButtonDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
                        disabled={isButtonDisabled} onClick={onClose}
                    >Verify & Login</button>
                </Link>
            </div>
        </div>
    );
};

export default OtpPopup;
