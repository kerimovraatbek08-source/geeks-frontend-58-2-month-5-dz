import React, { useState } from "react";
import Quiz from "./Quiz";

function App() {
  const questions = [
    {
      question: "Какой язык используется в React?",
      options: ["Python", "Java", "JavaScript", "C++"],
      correctIndex: 2,
    },
    {
      question: "Что возвращает React-компонент?",
      options: ["HTML", "JSX", "CSS", "JSON"],
      correctIndex: 1,
    },
    {
      question: "Какой хук используется для состояния?",
      options: ["useFetch", "useState", "useData", "useHook"],
      correctIndex: 1,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setCurrent(current + 1);
    }, 1000);
  };

  if (current >= questions.length) {
    return (
      <div>
        <h1>
          Результат: {score} / {questions.length}
        </h1>
      </div>
    );
  }

  return (
    <div>
      <Quiz
        question={questions[current].question}
        options={questions[current].options}
        correctIndex={questions[current].correctIndex}
        onAnswer={handleAnswer}
      />
    </div>
  );
}

export default App;
