import React from "react";
import { Button } from "./button.jsx";
import { useNavigate } from "react-router-dom";
import { Circle } from "./userProfile.jsx";

export const User = ({ user }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/send");
  };
  return (
    <div className="flex items-center justify-between pl-4 pr-4 pt-2 pb-2 m-4 border border-gray-300 rounded-xl">
      <div className="flex items-center ">
        <div className="pr-3">
          <Circle userName={user.userName} />
        </div>
        <div className="pr-3 text-xl">{user.userName}</div>
      </div>
      <div className="mt-3">
        <Button label={"Send Money"} onClick={clickHandler} />
      </div>
    </div>
  );
};
