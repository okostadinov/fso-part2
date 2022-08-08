import React from "react";

const WeatherInfo = ({ country, info }) => {
  return (
    <div>
      <h3>Weather in {country.capital[0]}</h3>
      <p>temperature {(info && info.main.temp) || "unknown"} Celsius</p>
      <img
        src={
          info &&
          `http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`
        }
        alt="weather icon"
      />
      <p>wind {(info && info.wind.speed) || "unknown"} m/s</p>
    </div>
  );
};

export default WeatherInfo;
