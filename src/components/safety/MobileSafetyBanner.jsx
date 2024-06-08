import React from 'react'
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const MobileSafetyBanner = () => {
  return (
    <div className="h-[150px] flex items-center justify-center gap-2 bg-[#2075fd] text-white text-[2rem] font-bold ">
        Safety Guide <IoShieldCheckmarkOutline size={30} />
    </div>
  )
}

export default MobileSafetyBanner
