import ExtraCountryFields from "./ExtraCountryFields";

const Country = ({ country, showBox, expandedCountires, handleClick }) => {
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
          <ExtraCountryFields country={country}></ExtraCountryFields>
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
        <ExtraCountryFields country={country} ></ExtraCountryFields>
      </>
    );
  }
};

export default Country;
