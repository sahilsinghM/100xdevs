import React from "react";

export default function Offer({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className="text-center border-b border-gray-300">
        20% off if you login within next 30 minutes
      </div>
      {children}
    </div>
  );
}
