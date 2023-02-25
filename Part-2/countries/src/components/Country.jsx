import ExtraCountryFields from "./ExtraCountryFields";
import countryService from "../services/countries";
import { useState, useEffect } from "react";

const Country = ({ country, showBox, expandedCountires, handleClick }) => {
  const [weather, setWeather] = useState();
  const [weatherIcon, setWeatherIcon] = useState();

  useEffect(() => {
    countryService
      .getWeather(country.latlng[0], country.latlng[1])
      .then((weather) => {
        setWeather(weather);
      });
  }, []);

  if (showBox) {
    let expanded = expandedCountires.filter(
      (expandedCountry) =>
        expandedCountry.name.toLowerCase() === country.name.toLowerCase()
    ).length;

    return (
      <>
        <strong>
          <li>{country.name}</li>
        </strong>

        {expanded == 0 ? (
          ""
        ) : (
          <ExtraCountryFields
            country={country}
            weather={weather}
            weatherIcon={weatherIcon}
          ></ExtraCountryFields>
        )}
        <button onClick={handleClick} data-name={country.name}>
          {expanded == 0 ? "Show More" : "Show Less"}
        </button>
      </>
    );
  } else {
    return (
      <>
        <h2>{country.name}</h2>
        <ExtraCountryFields
          country={country}
          weather={weather}
          weatherIcon={weatherIcon}
        ></ExtraCountryFields>
      </>
    );
  }
};

export default Country;
