import React, { useState, useEffect } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

const CountryView = ({ country, showWeather }) => {
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(() => {
    if (showWeather) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?q=${country.capital[0]}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => setWeatherInfo(response.data.list[0]));
    }
  }, [country.capital, showWeather]);

  return (
    <>
      <h2>{country.name.common}</h2> <div>capital {country.capital[0]}</div>
      <div>area {country.area}</div>
      <h3>languages:</h3>
      <ul>
        {Object.entries(country.languages).map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="flag" />
      {showWeather && <WeatherInfo country={country} info={weatherInfo} />}
    </>
  );
};

export default CountryView;
