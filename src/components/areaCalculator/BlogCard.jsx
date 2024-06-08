import React from "react";

const BlogCard = ({ imageUrl, title, date }) => {
  return (
    <div className="w-auto mx-auto bg-white rounded-md overflow-hidden hover:bg-gray-100">
      <img className="object-cover w-full h-48" src={imageUrl} alt="Blog" />
      <div className="p-4">
        <h2 className="text-md font-semibold text-gray-800 whitespace-nowrap text-ellipsis overflow-hidden">
          {title}
        </h2>
        <p className="text-gray-600 text-ellipsis">{date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
