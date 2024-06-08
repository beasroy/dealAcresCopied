"use client"
import React, { useState } from 'react'
import styles from './postercard.module.css'
import Image from 'next/image'
import Modal from './Modal'; 


const MobilePostercard = (props) => {


  const [showModal, setShowModal] = useState(false);
    

  const openPopup = () => {
      if (props.buttontext === "Find a Home") {
          setShowModal(true);
      }else {
          window.location.href = '/propertylisting';
      }
  };


  const closePopup = () => {
      // setShowInputField(false);
      setShowModal(false);
  };

  return (
    <div className="relative flex flex-col gap-2 my-5 px-4">
<div className='flex flex-row items-end'>
      <div className='font-bold text-[0.9rem] w-[70%] leading-5'>{props.title}</div>
      <p className=' p-1 text-[0.55rem]  font-bold  bg-blue-700 text-white w-[30%] text-center'>{props.sidecontent1}</p>
      </div>
      <div  >
        <Image
          src={props.src}
          alt={props.alt}
          className="object-cover w-full h-[25vh] rounded-lg"
        />
      </div>




      <h3 >{props.sidecontent2}</h3>
      <span><h4 className='font-bold'>{props.sidecontent4}<span>{props.s2spantext}</span></h4></span>
      <div className='flex flex-row items-center'>

        <h6 className='text-xs'>{props.sidecontent3}</h6>
        
          <div className='w-[200px]'>
          <div className='flex justify-end mx-auto'>
          {showModal && (
                    <Modal onClose={closePopup} />
                       
                )}
            {/* {showInputField && (
              <div className={styles.inputField}>
                <input placeholder={props.buttontext} />
                <button className={styles.btn2}>Submit</button>
              </div>
            )} */}
           
              <button className={styles.mobilebtn1} onClick={openPopup}>{props.buttontext}</button>
          
          </div>
        </div>

      </div>
    </div>
  )
}

export default MobilePostercard