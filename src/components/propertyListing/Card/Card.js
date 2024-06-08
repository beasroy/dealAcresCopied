import React from "react";

function NewsCard({ title, text, imageSrc, date, handleShare }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full sm:w-60 md:w-80 lg:w-72">
      <img
        src={imageSrc}
        alt="News"
        className="w-full h-48 sm:h-60 object-cover"
      />
      <div className="px-4 py-3 sm:py-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 text-sm sm:text-base">{text}</p>
        <div className="flex justify-between items-center mt-3 sm:mt-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-xs sm:text-sm">{date}</span>
          </div>
          <div>
            <button
              onClick={handleShare}
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 36 36"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 sm:w-8 sm:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
