import React from "react";
import javascriptLogo from "../../../images/tools/javascript.svg";
import typescriptLogo from "../../../images/tools/typescript-icon.svg";
import phpLogo from "../../../images/tools/php.svg";
import reactLogo from "../../../images/tools/react.svg";
import graphqlLogo from "../../../images/tools/graphql.svg";
import cssLogo from "../../../images/tools/css-3.svg";
import htmlLogo from "../../../images/tools/html-5.svg";
import litLogo from "../../../images/tools/lit-icon.svg";
import mysqlLogo from "../../../images/tools/mysql-icon.svg";
import dockerLogo from "../../../images/tools/docker-icon.svg";
import jestLogo from "../../../images/tools/jest.svg";

import classes from "./Filter.module.css";

const findMatchingImage = (name) => {
  const images = [
    javascriptLogo,
    typescriptLogo,
    phpLogo,
    reactLogo,
    graphqlLogo,
    cssLogo,
    htmlLogo,
    litLogo,
    mysqlLogo,
    dockerLogo,
    jestLogo,
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
