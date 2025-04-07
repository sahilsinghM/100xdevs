import React from "react";

export const Input = ({ label, placeholder, onChange }) => {
  return (
    <div>
      <label className="block mb-2 text-md font-medium text-gray-900 pt-3">
        {label}
      </label>
      <input
        onChange={onChange}
        type="text"
        id="input"
        placeholder={placeholder}
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
      ></input>
    </div>
  );
};
