import React from "react";

const BlogCard = ({ imageUrl, title, date, content, maxCharacters }) => {
  const truncateContent = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + " ...";
    }
    return text;
  };

  const maxContentCharacters = maxCharacters || 200;

  return (
    <div className="w-auto mx-auto bg-white rounded-md overflow-hidden hover:bg-gray-100">
      <img className="object-cover w-full h-48" src={imageUrl} alt="Blog" />
      <div className="p-4">
        <h2 className="text-md font-semibold text-gray-800 whitespace-nowrap text-ellipsis overflow-hidden">
          {title}
        </h2>
        <p className="text-gray-600 text-ellipsis mt-2 text-justify">
          {truncateContent(content, maxContentCharacters)}
        </p>
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-600">{date}</p>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
