'use client';
import React, { useState } from "react";

const Button = ({ heading, onClick, isActive, hashClick, py = '1', px = '6', textBase = 'base' }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    if(hashClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`py-${py} px-${px} mr-2 mb-2 rounded-xl border-solid custom-border shadow-sm shadow-violet-100 text-${textBase} ${
        isClicked && isActive ? "custom-border-select" : " "
      } `}
    >
      {heading}
    </button>
  );
};

export default Button;








