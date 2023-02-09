import { useState, useEffect } from "react";
import Filter from "./compenents/Filter";
import AddPersonForm from "./compenents/AddPersonForm";
import Contacts from "./compenents/Contacts";
import contactService from "./services/contacts";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    contactService
      .getAll()
      .then((contacts) => setPersons(contacts))
      .catch((error) => {
        console.log(
          `There was an error retrieving the contacts from the server. Error ${error}`
        );
      });
  }, []);

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

    contactService.insert(newPerson).then((newContact) => {
      let newContacts = [...persons].concat(newContact);
      setPersons(newContacts);
    });

    resetFields();
  };

  const remove = (person) => {
    if (window.confirm(`Are you sure you want to delete: ${person.name}?`)) {
      contactService
        .remove(person.id)
        .catch((error) =>
          console.log(
            `Error occured attempting to delete the record. Error: ${error}`
          )
        );

      setPersons(persons.filter((p) => p.id !== person.id));
    }
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
      <Contacts peopleToShow={peopleToShow} remove={remove} />
    </div>
  );
};

export default App;
