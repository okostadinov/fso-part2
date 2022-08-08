import React from "react";
import CountryView from "./CountryView";
import Result from "./Result";

const Results = ({ countries }) => {
  return (
    <div>
      {countries.length === 0 && "No countries match the specified string"}
      {countries.length > 10 && "Too many matches, specify another string"}
      {countries.length > 1 &&
        countries.length < 11 &&
        countries.map((country) => (
          <Result key={country.name.official} country={country} />
        ))}
      {countries.length === 1 && <CountryView country={countries[0]} showWeather={true} />}
    </div>
  );
};

export default Results;
