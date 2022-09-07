import React from "react";
import javascriptLogo from "../../../images/tools/javascript.svg";
import typescriptLogo from "../../../images/tools/typescript-icon.svg";
import phpLogo from "../../../images/tools/php.svg";
import reactLogo from "../../../images/tools/react.svg";
import graphqlLogo from "../../../images/tools/graphql.svg";
import cssLogo from "../../../images/tools/css-3.svg";
import htmlLogo from "../../../images/tools/html-5.svg";
import litLogo from "../../../images/tools/lit-icon.svg";

import classes from "./Filter.module.css";

const Filter = ({ selected, onSelect }) => {
  const selectHandler = (event) => {
    onSelect(event.target.name);
  };

  const images = [
    javascriptLogo,
    typescriptLogo,
    phpLogo,
    reactLogo,
    graphqlLogo,
    cssLogo,
    htmlLogo,
    litLogo,
  ];

  const findMatchingImage = (name) => {
    const lowerCaseName = name.toLowerCase();
    const image = images.find((e) => e.includes(lowerCaseName));
    return image;
  };

  const Checkbox = ({ name, isChecked, onChange }) => {
    const src = findMatchingImage(name);
    return (
      <div>
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={isChecked}
          onChange={onChange}
          hidden={true}
        />{" "}
        <label className={classes.option} htmlFor={name}>
          <img src={src} alt="" />
          {name}
        </label>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      {selected.map((e) => (
        <Checkbox
          key={e.tech}
          isChecked={e.isChecked}
          onChange={selectHandler}
          name={e.tech}
        />
      ))}
      {/* <Checkbox isChecked={}>JavaScript</Checkbox>
      <Checkbox isChecked={}>HTML</Checkbox>
      <Checkbox isChecked={}>CSS</Checkbox> */}
    </div>
  );
};

export default Filter;
