const Country = ({ country, showBox, expandedCountires, handleClick }) => {
  if (showBox) {
    return (
      <>
        <li>{country.name}</li>
        <button
          //search for the object with the same country name, update the showMore to the opposite variable
          onClick={() => handleClick(handleClick)}
        >
          {expandedCountires[0].showMore ? "Show Less" : "Show More"}
        </button>
      </>
    );
  } else {
    return (
      <div>
        <h2>{country.name}</h2>
        <p>Capital: {country.capital}</p>
        <p>Region: {country.region}</p>
        <h3>Languages:</h3>
        {country.languages.map((lang) => (
          <li key={lang.name}>{lang.name}</li>
        ))}
        <img src={country.flag} alt="Country Flag"></img>
      </div>
    );
  }
};

export default Country;
