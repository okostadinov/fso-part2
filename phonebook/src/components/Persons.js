import React from "react";
import Person from "./Person";

const Persons = ({ persons, handleDelete }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person key={person.id} person={person} onClick={handleDelete} />
      ))}
    </div>
  );
};

export default Persons;
