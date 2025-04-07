import React from "react";
import { Link } from "react-router-dom";

export const BottomWarning = ({ show, to, message, buttontext }) => {
  return (
    <div class={show ? "block" : "hidden"}>
      <p class="mt-2 text-sm">
        {message}
        <span class="font-medium">
          <Link to={to} className="underline">
            {buttontext}
          </Link>
        </span>
      </p>
    </div>
  );
};
