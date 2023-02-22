const Country = ({ country, showBox, showMore, setShowMore }) => {
  if (showBox) {
    return (
      <>
        <li>{country.name}</li>
        <button onClick={() => setShowMore(!showMore)} >{showMore ? "Show Less" : "Show More"}</button>
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
