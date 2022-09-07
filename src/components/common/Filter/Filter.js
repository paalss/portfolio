import React from "react";

const Filter = ({ selected, onSelect }) => {
  const selectHandler = (event) => {
    onSelect(event.target.name);
  };

  const Checkbox = ({ name, isChecked, onChange }) => (
    <>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={isChecked}
        onChange={onChange}
      />{" "}
      <label htmlFor={name}>{name}</label>
    </>
  );

  return (
    <div>
      {selected.map((e) => (
        <Checkbox
          key={e.tech}
          isChecked={e.isChecked}
          onChange={selectHandler}
          name={e.tech} />
      ))}
      {/* <Checkbox isChecked={}>JavaScript</Checkbox>
      <Checkbox isChecked={}>HTML</Checkbox>
      <Checkbox isChecked={}>CSS</Checkbox> */}
    </div>
  );
};

export default Filter;
