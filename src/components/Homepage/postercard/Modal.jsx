'use client';
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Modal = ({ onClose }) => {
    const [selectedResedential, setSelectedResedential] = useState('');
    const handleResedentialChange = (e) => {
        setSelectedResedential(e.target.value);
      };
    return (
        <div className="fixed inset-0 z-50  flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="relative z-50 bg-white p-8 rounded-lg shadow-lg w-[40%]">
                <button className="absolute top-0 right-0 p-2 text-gray-600" onClick={onClose}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h1 className='text-2xl font-bold mb-3'>Explore Real Estate In...</h1>
                <div className='flex flex-col border border-blue-700  rounded-md  '>
                    <h1 className="font-bold px-4 py-2 ">Buy</h1>
                    <div  className="m-0 border-b border-blue-700"/>
                    <div className='flex flex-row gap-2 items-center'>
                        <select className='text-base px-3 py-4 rounded-md border-r border-blue-700' value={selectedResedential} onChange={handleResedentialChange}>
                            <option className='text-base'  >All Residential</option>
                            <option className='text-md' value="Gurugaon">Gurugaon</option>
                            <option className='text-md' value="Delhi">Delhi</option>
                            <option className='text-md' value="Mumbai">Mumbai</option>
                        </select>
                        <IoSearch color="#344955" className="h-6 w-6"/>
                        <input placeholder="city name" className="py-3 px-1" />
                        <button className=" bg-blue-700 h-[50%] mx-auto mr-2 rounded-full text-white font-bold py-1 px-4">Search</button>
                    </div>
                    

                </div>
            </div>
        </div>
    );
};

export default Modal;
