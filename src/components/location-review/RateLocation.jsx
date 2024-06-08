import { Rating } from "@mui/material";
import React, { useState } from "react";

const RateLocation = ({ facility, onRate }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (starValue) => {
    if (rating === starValue) {
      setRating(0);
    } else {
      setRating(starValue);
    }
    onRate({ facility, rating: starValue });
  };

  return (
    <div className="inline-flex items-center justify-between">
      <p className="text-sm xs:text-base ">{facility}</p>
      <div className="flex ">
     <Rating sx={{
      fontWeight: 'bold'
     }} className="font-bold" size={"small"}/>
      </div>
    </div>
  );
};

export default RateLocation;
