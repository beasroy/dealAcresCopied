import Image from 'next/image';
import React from 'react';

const SigninPopup = ({onClose}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <div className="flex justify-end cursor-pointer">
          <div onClick={onClose} className="text-gray-600 hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className='flex flex-col items-center gap-6'>
            <Image src="blob:https://www.canva.com/c4f871b1-4ca3-449c-8e7f-3618ab5f0b68" width={60} height={60}/>
        <div className="mt-4 text-lg md:text-3xl ">Thank you for signing in!</div>
        </div>
      </div>
    </div>
  );
};

export default SigninPopup;
