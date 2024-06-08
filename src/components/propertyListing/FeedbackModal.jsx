
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
const FeedbackModal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto bg-gray-300 bg-opacity-80">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="relative bg-white w-full max-w-md px-8 py-6 rounded-md shadow-md custom-border-3">
              <button
                className="absolute top-0 right-0 w-6 bg-blue-200 hover:text-gray-700"
                onClick={onClose}
              >
                &times;
              </button>
              <div className='flex flex-col items-center gap-2 '>
              <h1 className="text-xl  font-bold">How was your Experience?</h1>
              <Image src={'/propertyListing/assets/feedback.png'} alt='feedback' width={200} height={100} />
              <Link href={'/propertylisting'} >
                <button 
               
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1.5 px-4 rounded text-base "
                >
                  Submit
                </button>
                </Link>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackModal;
