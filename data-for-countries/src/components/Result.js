import React, { useState } from "react";
import CountryView from "./CountryView";

const Result = ({ country }) => {
  const [showCountryView, setShowCountryView] = useState(false);

  return (
    <div>
      {showCountryView || <span>{country.name.common}</span>}

      <button
        onClick={() => {
          setShowCountryView(!showCountryView);
        }}
      >
        {showCountryView ? "hide" : "show"}
      </button>

      {showCountryView && (
        <div>
          <CountryView country={country} showWeather={false} />
        </div>
      )}
    </div>
  );
};

export default Result;
