import { useState } from "react";
import styles from "./WeatherInput.module.css";

const WeatherInput = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input.trim());
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Введите город"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Найти
      </button>
    </form>
  );
};

export default WeatherInput;
