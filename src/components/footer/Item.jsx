import React from "react";
import styles from '@/components/footer/footer.module.css'
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";


const Item = ({ Links, title, isSocial }) => {
  return (
    <ul className={`${isSocial ? 'min-w-[60%] sm:min-w-[35%]' : 'min-w-[80%] sm:min-w-[60%]'} sm:max-h-none pb-4 px-2 sm:px-4 border-r border-r-gray-100/20  ${isSocial && 'min-[1024px]:border-r-0'} max-h-[500px] overflow-y-auto`}>
      <div className=" flex flex-col items-start ">
        <div>
        
      <h1 className={` mb-1 text-base sm:text-lg  font-[Poppins] font-semibold`}>{title}</h1>
      
      <div>
      {Links.map((link) => (
        <li key={link.name}>
      <Link
            className={`${styles.item} flex justify-between text-left`}
            href={link.link}
          >
            {link.name}

            {/* <span className={`${isSocial && 'hidden'}`}>
              <LuExternalLink size={20}/>
            </span> */}
          </Link>
        </li>
      ))}
      </div>
      </div>
      </div>
    </ul>
  );
};

export default Item;