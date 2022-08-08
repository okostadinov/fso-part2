import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Results from "./components/Results";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data))
      .catch((error) => alert(error));
  }, []);

  const filteredCountries = countries.filter((c) =>
    c.name.common.toLowerCase().includes(currentFilter.toLowerCase())
  );

  return (
    <>
      <Filter
        value={currentFilter}
        onChange={(e) => setCurrentFilter(e.target.value)}
      />
      <br />
      <Results countries={filteredCountries} />
    </>
  );
};

export default App;
