import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personServices from "./services/persons";
import Message from "./components/Message";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const [messageState, setMessageState] = useState(null);
  const [messageText, setMessageText] = useState("");

  const filteredPersons = persons.filter((p) =>
    p.name.toLowerCase().includes(filterName.toLowerCase())
  );

  useEffect(() => {
    personServices.getAll().then((allPersons) => setPersons(allPersons));
  }, []);

  const addPerson = () => {
    const newPersonObj = {
      name: newName,
      number: newNumber,
    };

    personServices.create(newPersonObj).then((newPerson) => {
      setPersons(persons.concat(newPerson));
      handleMessage(true, `Added ${newPerson.name}`);
    });
  };

  const updatePerson = (existingPerson) => {
    personServices
      .update(existingPerson.id, { ...existingPerson, number: newNumber })
      .then((newPerson) => {
        setPersons(
          persons.map((person) =>
            person.id !== existingPerson.id ? person : newPerson
          )
        );
        handleMessage(
          true,
          `Updated ${newPerson.name}'s number to ${newPerson.number}`
        );
      })
      .catch(() => {
        handleMessage(
          false,
          `Information of ${existingPerson.name} has already been removed from the server`
        );

        setPersons(persons.filter((person) => person.id !== existingPerson.id));
      });
  };

  const deletePerson = (id) => {
    personServices
      .remove(id)
      .then(() => setPersons(persons.filter((person) => person.id !== id)));
  };

  const addUpdatePerson = (e) => {
    e.preventDefault();

    const existingPerson = persons.find((person) => person.name === newName);

    if (existingPerson) {
      updatePerson(existingPerson);
    } else {
      addPerson();
    }

    setNewName("");
    setNewNumber("");
  };

  const handleMessage = (state, text) => {
    setMessageState(state);
    setMessageText(text);

    setTimeout(() => {
      setMessageText("");
    }, 3000);
  };

  return (
    <div>
      <h1>Phonebook</h1>

      {messageText && <Message text={messageText} state={messageState} />}

      <Filter
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
      />

      <PersonForm
        onSubmit={addUpdatePerson}
        pName={newName}
        pNumber={newNumber}
        onChangeName={(e) => setNewName(e.target.value)}
        onChangeNumber={(e) => setNewNumber(e.target.value)}
      />

      <Persons persons={filteredPersons} handleDelete={deletePerson} />
    </div>
  );
};

export default App;
