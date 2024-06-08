import React from "react";
import Addbox from "../property/sidecontentcontainer/Addbox";
import Image from "next/image";

const Sidebox = () => {
  return (

      <div className="w-2/5 mx-auto flex flex-col items-start max-lg:hidden">
   
        <div className="flex flex-col gap-4 w-full rounded-3xl items-start border-2 border-blue-200 shadow-md shadow-blue-200 p-4">
         <div className="bg-blue-100 p-2 rounded-lg">
            <p className="text-base font-semibold">Popular Cities</p>
         </div>
         <div className="bg-blue-100 p-2 rounded-lg">
            <p className="text-base font-semibold">Posh Location</p>
         </div>
         <div className="bg-blue-100 p-2 rounded-lg">
            <p className="text-base font-semibold">Hotspot Location</p>
         </div>
         <div className="bg-blue-100 p-2 rounded-lg">
            <p className="text-base font-semibold">Affordable Locations</p>
         </div>
        </div>
        <Addbox />

        <div className="flex flex-col gap-4 mt-5 w-full rounded-3xl items-center bg-[#fbc79c] p-4 ">
            <h1 className="text-xl font-bold">Buyer's <span className="text-[#f69d55]">Manual</span></h1>
            <Image src="/buy.png" alt="buyer's image"  width={120} height={80}/>
        </div>
      </div>

      

  
  );
};

export default Sidebox;
