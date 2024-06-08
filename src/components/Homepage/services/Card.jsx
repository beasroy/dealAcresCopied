import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";

const Card = ({ imgsrc, service }) => {

  console.log(imgsrc)
  return (
    <div className="text-center rounded-xl border-2 shadow-xl h-[150px] border-gray-200 flex flex-col justify-center items-center ">
      <div className=" rounded-xl overflow-hidden transition-transform duration-300 transform hover:scale-105 flex justify-center  w-[100px] h-[100px] ">
        <Image src={imgsrc} alt="Card Image" width={50} height={50} className="w-full h-full object-contain"/>
        {/* <IoHomeOutline size={70}/> */}
        </div>
      <div className="mt-2 block max-w-[160px]">
        <p className="text-center font-semibold font-[Poppins] text-gray-500 hover:text-black">
          {service}
        </p>
      </div>
    </div>
  );
};

export default Card;
