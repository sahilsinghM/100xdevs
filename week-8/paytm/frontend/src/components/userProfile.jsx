import React from "react";

export const Circle = ({ userName }) => {
  return (
    <div className="flex justify-center items-center bg-gray-300 rounded-full w-12 h-12">
      <div className="text-2xl">{userName.split(" ")[0][0]}</div>
    </div>
  );
};
