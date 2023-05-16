import { useState, useEffect } from "react";
import Filter from "./compenents/Filter";
import AddPersonForm from "./compenents/AddPersonForm";
import Contacts from "./compenents/Contacts";
import contactService from "./services/contacts";
import Notification from "./compenents/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

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

    const duplicate = isDuplicate();

    if (duplicate) {
      if (
        window.confirm(
          `${newName} already exists in out database, would you like to update the number?`
        )
      ) {
        update(duplicate);
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };

      insert(newPerson);
    }

    resetFields();
  };

  const update = (contact) => {
    contactService
      .update(contact[0].id, contact[0].name, newNumber)
      .then((updatedContact) => {
        setPersons(
          persons
            .filter((p) => p.id !== updatedContact.id)
            .concat(updatedContact)
        );
        setMessage(`${updatedContact.name} updated!`);
        setMessageType("success");

        setTimeout(() => {
          setMessage(null);
        }, 2000);
      })
      .catch((error) =>
        console.log(`There was an error updating the contact. Error: ${error}`)
      );
  };

  const insert = (newPerson) => {
    contactService.insert(newPerson).then((newContact) => {
      setPersons([...persons].concat(newContact));
      setMessage(`${newPerson.name} added!`);
      setMessageType("success");
      setTimeout(() => {
        setMessage(null);
      }, 2000);
    }).catch(error => {
      setMessage(`${error.response.data.error}`);
      setMessageType("error");
      setTimeout(() => {
        setMessage(null);
      }, 2000);
    });
  };

  const remove = (person) => {
    if (window.confirm(`Are you sure you want to delete: ${person.name}?`)) {
      contactService
        .remove(person.id)
        .then(() => {
          setMessage(`${person.name} removed!`);
          setMessageType("success");
          setPersons(persons.filter((p) => p.id !== person.id));

          setTimeout(() => {
            setMessage(null);
          }, 2000); 
        })
        .catch((error) => {
          setMessage(`${person.name} has already been removed!`);
          setMessageType("error");
        });
    }
  };

  const resetFields = () => {
    setNewName("");
    setNewNumber(""); 
    setSearchQuery("");
  };

  const isDuplicate = () => {
    const duplicate = persons.filter((person) => newName === person.name);

    return duplicate.length > 0 ? duplicate : false;
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
      {message !== null ? (
        <Notification message={message} type={messageType} />
      ) : (
        ""
      )}
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
