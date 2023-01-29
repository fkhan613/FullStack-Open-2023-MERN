import { useState } from "react";
import Person from "./compenents/Person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "(613) 745-7489" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    if (newName === "" || newNumber === "") {
      window.alert("Missing Fields");
      return false;
    }

    if (isDuplicate()) {
      window.alert(`${newName} already exists in the phonebook`);
      setNewName("");
      setNewNumber("");

      return false;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  };

  const isDuplicate = () => {
    if (persons.filter((person) => newName === person.name).length > 0) {
      return true;
    }

    return false;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name:{""}
          <input
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
        </div>
        <div>
          Phone Number: {""}
          <input
            value={newNumber}
            onChange={(event) => setNewNumber(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      <div>
        {persons.map((person) => (
          <Person key={person.name} name={person.name} number={person.number} />
        ))}
      </div>
    </div>
  );
};

export default App;
