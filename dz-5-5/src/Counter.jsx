import React, { useState, useCallback } from "react";
import { ChildButton } from "./ChildButton";

export const Counter = () => {
  console.log("🔄 Counter render");

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const handleClick = useCallback(() => {
    console.log("✅ Child button clicked");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>

      <ChildButton onClick={handleClick} label="Click me" />
    </div>
  );
};
