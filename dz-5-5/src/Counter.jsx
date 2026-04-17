import React, { useState, useCallback } from "react";

const ChildButton = React.memo(({ onClick, label }) => {
  console.log("ChildButton render");

  return <button onClick={onClick}>{label}</button>;
});

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Увеличить</button>

      <ChildButton onClick={handleClick} label="Я кнопка" />
    </div>
  );
};

export default Counter;
