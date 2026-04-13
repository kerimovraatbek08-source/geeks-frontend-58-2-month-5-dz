import React, { useState } from "react";

function Quiz({ question, options, correctIndex, onAnswer }) {
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(index);
    onAnswer(index === correctIndex);
  };

  return (
    <div>
      <h2>{question}</h2>

      {options.map((option, index) => (
        <button key={index} onClick={() => handleClick(index)}>
          {option}
        </button>
      ))}

      {selected !== null && selected === correctIndex && <p>ПРАВИЛЬНО!</p>}

      {selected !== null && selected !== correctIndex && <p>НЕПРАВИЛЬНО</p>}
    </div>
  );
}

export default Quiz;
