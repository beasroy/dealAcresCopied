'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { PiThumbsUp, PiThumbsDown } from 'react-icons/pi';

const Popup = ({ onClose }) => {
  const [feedback, setFeedback] = useState(-1);
  const popupRef = useRef(null);

  const handleClickYes = () => setFeedback(0);
  const handleClickNo = () => setFeedback(1);

  const handleDocumentClick = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      console.log('Clicked outside the popup. Closing...');
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleDocumentClick);

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [onClose]);

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div ref={popupRef} className='max-w-screen-lg p-5 mx-auto bg-[#c5dff8] text-black popup-container'>
        <div className='flex flex-col md:flex-row items-center justify-center md:gap-10'>
          <Image src='/locationCityWise/popup.png' alt='popup' width={180} height={200} />
          <div className='flex flex-col items-center justify-center text-xl text-center font-semibold'>
            <h1 className='mb-4'>Are you finding these Insights helpful?</h1>
            {feedback === -1 ? (
              <div className='flex flex-row gap-6'>
                <div className='flex flex-row items-center'>
                  <PiThumbsUp style={{ display: 'inline', marginRight: '0.5rem' }} />
                  <button className='px-4 bg-[#b4cfe9] rounded-md' onClick={handleClickYes}>
                    Yes
                  </button>
                </div>
                <div className='flex flex-row items-center mt-2 md:mt-0'>
                  <PiThumbsDown style={{ display: 'inline', marginRight: '0.5rem' }} />
                  <button className='px-4 bg-[#b4cfe9] rounded-md' onClick={handleClickNo}>
                    No
                  </button>
                </div>
              </div>
            ) : feedback === 0 ? (
              <span>Thanks For Your Support!!</span>
            ) : (
              <span>Sorry to hear, We are progressively working on it to make your experience better </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
