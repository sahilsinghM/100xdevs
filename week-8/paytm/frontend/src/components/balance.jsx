import React from "react";

export const Balance = ({ userBalance }) => {
  console.log("from Balance");
  return (
    <div className="pl-4 pr-4 pt-4 pb-4 text-3xl">
      {userBalance
        ? "Your balance is: " + userBalance
        : "No balance available. Add Balance"}
    </div>
  );
};

// export default Balance;
