import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./compenents/Filter";
import AddPersonForm from "./compenents/AddPersonForm";
import Contacts from "./compenents/Contacts";

const App = () => {
  const API_URL = "http://localhost:3001/persons";
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const getUsers = () => {
    axios.get(API_URL).then((res) => {
      setPersons(res.data);
    });
  };

  const insertUser = (user) => {
    axios
      .post(API_URL, user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(getUsers, []);

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

    setPersons(persons.concat(newPerson))
    insertUser(newPerson);
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
