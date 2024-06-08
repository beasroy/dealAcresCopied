import React from "react";

function NewsCard({ imageSrc }) {
  return (
    <div className="bg-white overflow-hidden shadow-lg w-20 md:w-40 lg:w-40">
      <img
        src={imageSrc}
        alt="Manual"
        className="w-100 object-cover"
        style={{ width: "inherit !important" }}
      />
    </div>
  );
}

export default NewsCard;
