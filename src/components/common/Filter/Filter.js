import React from "react";
import Image from "next/image";

import classes from "./Filter.module.css";

import typescriptLogo from "../../../../public/images/tools/typescript-icon.svg";
import javascriptLogo from "../../../../public/images/tools/javascript.svg";
import nextLogo from "../../../../public/images/tools/nextjs-icon.svg";
import phpLogo from "../../../../public/images/tools/php.svg";
import reactLogo from "../../../../public/images/tools/react.svg";
import graphqlLogo from "../../../../public/images/tools/graphql.svg";
import cssLogo from "../../../../public/images/tools/css-3.svg";
import htmlLogo from "../../../../public/images/tools/html-5.svg";
import litLogo from "../../../../public/images/tools/lit-icon.svg";
import mysqlLogo from "../../../../public/images/tools/mysql-icon.svg";
import dockerLogo from "../../../../public/images/tools/docker-icon.svg";
import jestLogo from "../../../../public/images/tools/jest.svg";

const findMatchingImage = (name) => {
  const images = [
    javascriptLogo,
    typescriptLogo,
    nextLogo,
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
  const image = images.find((e) => {
    // e.src === /_next/static/media/javascript.9b50b767.svg
    const filename = e.src.split("/")[4];
    // filename === javascript.9b50b767.svg
    return filename.includes(lowerCaseName);
  });
  return image;
};

const Checkbox = ({ name: techName, isChecked, onChange, amount }) => {
  const { src, width: intrinsicWidth, height: intrinsicHeight } = findMatchingImage(techName);
  const renderedHeight = 30;
  const proportion = intrinsicHeight / renderedHeight;
  const renderedWidth = intrinsicWidth / proportion;
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
        <Image
          src={src}
          alt={techName}
          height={renderedHeight}
          width={renderedWidth}
        />
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
