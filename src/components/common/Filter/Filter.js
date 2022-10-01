import React from "react";

import classes from "./Filter.module.css";

const findMatchingImage = (name) => {
  const images = [
    "/images/tools/javascript.svg",
    "/images/tools/typescript-icon.svg",
    "/images/tools/nextjs-icon.svg",
    "/images/tools/php.svg",
    "/images/tools/react.svg",
    "/images/tools/graphql.svg",
    "/images/tools/css-3.svg",
    "/images/tools/html-5.svg",
    "/images/tools/lit-icon.svg",
    "/images/tools/mysql-icon.svg",
    "/images/tools/docker-icon.svg",
    "/images/tools/jest.svg",
  ];

  const lowerCaseName = name.toLowerCase();
  const image = images.find((e) => e.includes(lowerCaseName));
  return image;
};

const Checkbox = ({ name: techName, isChecked, onChange, amount }) => {
  const src = findMatchingImage(techName);
  const optionClass = isChecked
    ? classes.option + " " + classes.checked
    : classes.option;
  return (
    <div>
      <button
        id={techName}
        className={optionClass}
        onClick={() => onChange(techName)}
      >
        <img src={src} alt={techName} height={30} />
        {techName} ({amount})
      </button>
    </div>
  );
};

const Filter = ({ filter, onSelect }) => {
  const selectHandler = (techName) => {
    onSelect(techName);
  };

  return (
    <div className={classes.root}>
      {filter.map((e) => (
        <Checkbox
          key={e.tech}
          isChecked={e.isChecked}
          onChange={selectHandler}
          name={e.tech}
          amount={e.amount}
        />
      ))}
    </div>
  );
};

export default Filter;
