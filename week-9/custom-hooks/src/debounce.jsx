import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCallback } from "react";

const useDebounce = (inputValue, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);
  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);
    return () => {
      clearTimeout(id);
    };
  }, [inputValue, delay]);

  return debouncedValue;
};

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  useCallback(async () => {
    const response = await axios.get("api", debouncedValue);
    const data = response.data;
  }, [debouncedValue]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
      <div>{data}</div>
    </div>
  );
};

export default SearchBar;
