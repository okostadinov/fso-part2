import React from "react";

const PersonForm = ({onSubmit, pName, pNumber, onChangeName, onChangeNumber}) => {
  return (
    <form onSubmit={onSubmit}>
      <h2>Add a new person</h2>
      <div>
        <input
          id="pName"
          value={pName}
          onChange={onChangeName}
        />
        <label htmlFor="pName"> name</label>
      </div>
      <div>
        <input
          id="pNumber"
          value={pNumber}
          onChange={onChangeNumber}
        />
        <label htmlFor="pNumber"> number</label>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
