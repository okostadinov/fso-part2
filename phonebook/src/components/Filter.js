import React from "react";

const Filter = ({value, onChange}) => {
  return (
    <div>
      <label htmlFor="filterPersons">filter shown with </label>
      <input
        id="filterPersons"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;