import React from "react";

export const Card = ({ children }) => {
  return (
    <>
      <div className="rounded-2xl border border-gray-300 p-4">{children}</div>
    </>
  );
};
