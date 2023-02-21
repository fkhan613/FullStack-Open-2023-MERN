import { useState, useEffect } from "react";
import countryService from "./services/countries";
import InputBox from "./components/inputBox";
import "./App.css";

function App() {
  const [countries, setCountires] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery) {
      console.log("Searching for countries...");
      countryService
        .search(searchQuery)
        .then((countries) => {
          setCountires(countries);
          console.log(countries);
        })
        .catch((error) => {
          console.log(
            `There was an error searching for the country:  ${searchQuery}. Error: ${error}`
          );
        });
    }
  }, [searchQuery]);

  return (
    <div>
      <InputBox
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Search for Countries"
      ></InputBox>
    </div>
  );
}

export default App;
