import { useState } from "react";
import Filter from "./compenents/Filter";
import AddPersonForm from "./compenents/AddPersonForm";
import Contacts from "./compenents/Contacts";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    if (newName === "" || newNumber === "") {
      window.alert("Missing Fields");
      return false;
    }

    if (isDuplicate()) {
      window.alert(`${newName} already exists in the phonebook`);
      resetFields();

      return false;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    setPersons(persons.concat(newPerson));
    resetFields();
  };

  const resetFields = () => {
    setNewName("");
    setNewNumber("");
    setSearchQuery("");
  };

  const isDuplicate = () => {
    if (persons.filter((person) => newName === person.name).length > 0) {
      return true;
    }

    return false;
  };

  const peopleToShow =
    searchQuery === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <h2>Add a New Contact</h2>
      <AddPersonForm
        addPerson={addPerson}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Contacts peopleToShow={peopleToShow} />
    </div>
  );
};

export default App;
