import React from "react";
import { Circle } from "./userProfile";

export const Navbar = ({ pageName, userName }) => {
  return (
    <div className="flex pr-4 pl-4 pb-2 pt-2 justify-between border-b border-gray-300 items-center    ">
      <div className="text-2xl font-extrabold">{pageName}</div>
      <div className="flex items-center">
        <div className="pr-1">{"Hello " + userName}</div>
        <Circle userName={userName} />
      </div>
    </div>
  );
};
