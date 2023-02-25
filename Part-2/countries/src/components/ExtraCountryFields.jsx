import { useEffect, useState } from "react";
import countryService from "../services/countries";

const ExtraCountryFields = ({ country, weather, pic }) => {

  return (
    <>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <h3>Languages:</h3>
      {country.languages.map((lang) => (
        <li key={lang.name}>{lang.name}</li>
      ))}
      <img src={country.flag} alt="Country Flag"></img>
      <h3>Weather in {country.name}</h3>
      <p>Temperature: {Math.round(weather.main.temp - 273.15)} Celcius</p>
      <p>Wind Speed: {weather.wind.speed} m/s </p>
    </>
  );
};

export default ExtraCountryFields;
