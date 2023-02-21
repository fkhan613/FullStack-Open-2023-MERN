const Countries = ({ countries }) => {

  if (countries.length > 20) {
    return <p>More than 20 matches, please be more specefic</p>;
  }

  if (countries.length > 1 && countries.length <= 20) {
    return (
      <div>
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </div>
    );
  }

  if(countries.length == 1){
    return (
      <div>
        <h2>{countries[0].name}</h2>
        <p>Capital: {countries[0].capital}</p>
        <h3>Languages:</h3>
        {countries[0].languages.map((lang) => (
          <li key={lang.name}>{lang.name}</li>
        ))}
        <img src={countries[0].flag} alt="Country Flag"></img>
      </div>
    );
  }

  return <p>No matches found...</p>
};

export default Countries;
