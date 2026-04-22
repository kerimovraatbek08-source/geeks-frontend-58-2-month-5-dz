import React from "react";
import { Counter } from "./Counter";
import { FilteredList } from "./FilteredList";

function App() {
  return (
    <div>
      <h2>Задание 1</h2>
      <h1>useCallback + React.memo</h1>
      <Counter />
      <h2>Задание 2</h2>
      <FilteredList />
    </div>
  );
}

export default App;
