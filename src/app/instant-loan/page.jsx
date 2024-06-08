'use client'

import BankDetails from '@/components/instant-loan/BankDetails';
import InstantLoanForm from '@/components/instant-loan/InstantLoanForm'
import OtpVerifyModal from '@/components/instant-loan/OtpVerifyModal';
import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InstantLoan = () => {
  const [isRegistered, setIsRegistered] = useState(false)
  const [detailsModal, setDetailsModal] = useState(true);
  const [bankModal, setBankModal] = useState(false);
  const [detailsData, setDetailsData] = useState({})
  const [otpModal, setOtpModal] = useState(false)

  const handleVerify = () => {
    
  }

  const handleModalClose = (modal, detailsData) => {

    if(modal === 'otpModal'){
      setOtpModal(false);
    }
    if(modal === 'detailsModal' ){
      if(!isRegistered){
        setOtpModal(true)
        return
      }
      
      setDetailsModal(false)
      setBankModal(true)
    }else if(modal === "back") {
      
      setBankModal(false)
      setDetailsModal(true)
    }
    else{
      setBankModal(false)
    }

    if(detailsData){
      setDetailsData(detailsData);
    }
  }
  return (
    <div className="px-4 py-8 max-w-[900px] mx-auto text-md">

        {
          otpModal && !isRegistered  && <OtpVerifyModal setRegister={() => setIsRegistered(true)} onClose={handleModalClose}/>
        }
        {
          detailsModal && <InstantLoanForm onNext={handleModalClose}/>
        }
        {
          bankModal && <BankDetails amount={detailsData.amount} tenure={detailsData.tenure} onNext={handleModalClose}/>
        }

        <ToastContainer/>
    </div>
  )
}

export default InstantLoan
