const ExtraCountryFields = ({ country }) => {
  return (
    <>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <h3>Languages:</h3>
      {country.languages.map((lang) => (
        <li key={lang.name}>{lang.name}</li>
      ))}
      <img src={country.flag} alt="Country Flag"></img>
    </>
  );
};

export default ExtraCountryFields;
