import { useState } from "react";
import { weatherData } from "./data/weatherData";
import WeatherInput from "./components/WeatherInput";
import WeatherDisplay from "./components/WeatherDisplay";
import styles from "./App.module.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = (cityName) => {
    const data = weatherData[cityName];

    if (data) {
      setWeather({ city: cityName, ...data });
      setError("");
    } else {
      setWeather(null);
      setError("Город не найден ❌");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Погода</h1>

      <WeatherInput onSearch={handleSearch} />

      {error && <p className={styles.error}>{error}</p>}

      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
}

export default App;
