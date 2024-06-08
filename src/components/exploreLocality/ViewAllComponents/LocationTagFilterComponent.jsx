import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const TagFilterComponent = () => {
  const [tags, setTags] = useState([]);
  const availableTags = [
    "Popular Cities",
    "Posh Location",
    "Hotspot Location",
    "Affordable Location",
  ];

  const toggleTag = (tag) => {
    if (tags.includes(tag)) {
      setTags(tags.filter((t) => t !== tag));
    } else {
      setTags([...tags, tag]);
    }
  };

  return (
    <div className="lg:hidden">
      <div className="flex flex-wrap justify-center">
        {availableTags.map((tag) => (
          <div
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`m-2 p-2 text-blue-800 cursor-pointer ${
              tags.includes(tag)
                ? "bg-blue-700 border-2 border-blue-800 rounded-full"
                : "bg-white border border-blue-100 rounded-lg hover:bg-blue-100"
            }`}
          >
            <span className={tags.includes(tag) ? "font-bold text-white" : ""}>
              {tag}
            </span>
            {tags.includes(tag) && (
              <button
                onClick={() => toggleTag(tag)}
                className="text-white text-sm ml-2 focus:outline-none"
              >
                <FaTimes />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagFilterComponent;
