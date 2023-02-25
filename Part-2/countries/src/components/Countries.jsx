import Country from "./Country";
import { useState } from "react";

const Countries = ({ countries }) => {
  const [expandedCountires, setExpandedCountries] = useState([]);

  const handleClick = (event) => {
    let name = event.target.getAttribute("data-name");

    if (expandedCountires.some((country) => country.name === name)) {
      
      let newList = expandedCountires.filter((country) =>
      country.name !== name
      ? country
      : null
      );

      setExpandedCountries(newList);
    } else {

      setExpandedCountries(
        expandedCountires.concat({ name: name, showMore: true })
      );
    }
  };

  if (countries == null) {
    return null;
  }

  if (countries.length > 20) {
    return <p>More than 20 matches, please be more specefic</p>;
  }

  if (countries.length > 1 && countries.length <= 20) {
    return (
      <div className="countries">
        {countries.map((country) => (
          <Country
            country={country}
            showBox={true}
            key={country.name}
            expandedCountires={expandedCountires}
            handleClick={handleClick}
          ></Country>
        ))}
      </div>
    );
  }

  if (countries.length == 1) {
    return (
      <div>
        <Country
          country={countries[0]}
          key={countries[0].name}
          showBox={false}
        ></Country>
      </div>
    );
  }
};

export default Countries;
