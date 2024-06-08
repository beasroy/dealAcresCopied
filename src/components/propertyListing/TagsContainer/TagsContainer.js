import React from "react";

const TagsContainer = ({ tags, onTagClick, currentlySelected }) => {
  return (
    <div className="flex justify-center md:justify-normal flex-wrap gap-3 py-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`text-center text-gray-600 bg-white border-4 ${
            currentlySelected == tag ? "border-blue-500" : "border-blue-100"
          } rounded-lg py-[0.5px] px-7`}
          onClick={() => onTagClick(tag)}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagsContainer;
