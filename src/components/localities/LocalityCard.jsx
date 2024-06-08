import React from "react";

const LocalityCard = () => {
  return (
    <div className="mb-5 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 border-2 border-gray-300 rounded-2xl">
      <div className="bg-[url('https://assets-news.housing.com/news/wp-content/uploads/2022/03/28143140/Difference-between-flat-and-apartment.jpg')] bg-cover bg-no- rounded-xl h-64 sm:h-auto"></div>
      <div className="flex flex-col justify-between">
        <div className="mb-2">
          <h1 className="text-xl sm:text-2xl font-bold">Dwarka</h1>
          <div className="mt-2 flex flex-wrap items-center space-x-2 gap-2">
            <div className="w-fit sm:w-auto rounded-md bg-blue-100 px-4 py-1 text-center text-sm sm:text-base">
              North Delhi
            </div>
            <div className="w-fit sm:w-auto rounded-md bg-blue-100 px-4 py-1 text-center text-sm sm:text-base">
              Premium
            </div>
          </div>
        </div>
        <div className="mb-2">
          <p className="text-lg sm:text-xl">Explore locality</p>
          <p className="text-sm sm:text-md">
            Overview, Reviews, Lifestyle & More of Himachal Pradesh
          </p>
        </div>
        <button className="text-bold w-full md:w-3/5 text-sm sm:text-md rounded-md bg-blue-600 px-3 py-1 text-white">
          View Insight
        </button>
      </div>
    </div>
  );
};

export default LocalityCard;
