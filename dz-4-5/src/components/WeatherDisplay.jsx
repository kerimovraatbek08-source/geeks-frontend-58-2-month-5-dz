import styles from "./WeatherDisplay.module.css";

const WeatherDisplay = ({ weather }) => {
  return (
    <div className={styles.card}>
      <h2>{weather.city}</h2>
      <div className={styles.icon}>{weather.icon}</div>
      <p>{weather.temp}°C</p>
      <p>{weather.description}</p>
    </div>
  );
};

export default WeatherDisplay;
