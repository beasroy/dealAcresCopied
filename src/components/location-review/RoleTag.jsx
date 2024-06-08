import React from "react";

const RoleTag = ({ role, onRoleClick, isSelected }) => {
  return (
    <div
      className={`${
        isSelected ? "border-2 border-blue-800" : ""
      } bg-blue-200 text-black py-1 px-2 rounded-md inline-block font-semibold text-sm sm:text-base `}
      onClick={() => onRoleClick(role)}
    >
      {role}
    </div>
  );
};

export default RoleTag;
