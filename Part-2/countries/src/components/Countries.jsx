import Country from "./Country";

const Countries = ({ countries }) => {
  if (countries == null) {
    return null;
  }

  if (countries.length > 20) {
    return <p>More than 20 matches, please be more specefic</p>;
  }

  if (countries.length > 1 && countries.length <= 20) {
    return (
      <div className='countries'>
        {countries.map((country) => (
          <Country
            showBox={true}
            key={country.name}
            name={country.name}
          ></Country>
        ))}
      </div>
    );
  }

  if (countries.length == 1) {
    return (
      <div>
        <h2>{countries[0].name}</h2>
        <p>Capital: {countries[0].capital}</p>
        <p>Region: {countries[0].region}</p>
        <h3>Languages:</h3>
        {countries[0].languages.map((lang) => (
          <li key={lang.name}>{lang.name}</li>
        ))}
        <img src={countries[0].flag} alt="Country Flag"></img>
      </div>
    );
  }
};

export default Countries;
