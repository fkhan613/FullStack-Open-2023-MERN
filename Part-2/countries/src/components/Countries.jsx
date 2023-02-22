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
      <div className="countries">
        {countries.map((country) => (
          <Country
            country={country}
            showBox={true}
            key={country.name}
          ></Country>
        ))}
      </div>
    );
  }

  if (countries.length == 1) {
    return (
      <div>
        <Country country={countries[0]} key={countries[0].name} showBox={false}></Country>
      </div>
    );
  }
};

export default Countries;
