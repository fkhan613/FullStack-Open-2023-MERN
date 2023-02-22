import { useState, useEffect } from "react";
import countryService from "./services/countries";
import InputBox from "./components/inputBox";
import Countries from "./components/Countries";
import "./App.css";

function App() {
  const [countries, setCountires] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery != "") {
      console.log("Searching for countries...");
      countryService
        .search(searchQuery)
        .then((countries) => {
          setCountires(countries);
        })
        .catch((error) => {
          console.log(
            `There was an error searching for the country: ${searchQuery} as it does not exist.`
          );
          setCountires(null);
        });
    } else {
      setCountires(null);
    }
  }, [searchQuery]);

  return (
    <div>
      <InputBox
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Search for Countries"
      ></InputBox>
      <Countries countries={countries}></Countries>
    </div>
  );
}

export default App;
