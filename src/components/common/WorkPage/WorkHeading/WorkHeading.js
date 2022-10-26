import { oneOf } from 'prop-types';
import React from "react";
import classes from "./WorkHeading.module.css";

// components
import ToolList from "../../SquareLinks/ToolList";
import WorkLinks from "../WorkLinks";

const WorkHeading = ({
  extraSpaceAbove = false,
  hLevel = 2,
  heading,
  timespan,
  siteInfo = false,
  tools,
  children
}) => {
  const { site = false, repo = false } = siteInfo && siteInfo;
  const marginTopClass = extraSpaceAbove
    ? classes.extraSpace
    : classes.defaultSpace;
  return (
    <div className={classes.root + " work-heading " + marginTopClass}>
      {hLevel === 2 ? (
        <h2 className={classes.heading}>{heading}</h2>
      ) : (
        <h3 className={classes.heading}>{heading}</h3>
      )}
      <span className="subtitle">{timespan}</span>
      <WorkLinks site={site} repo={repo} />
      <ToolList tools={tools} toolsText={true} />
      {children}
    </div>
  );
};

export default WorkHeading;

WorkHeading.propTypes = {
  hLevel: oneOf([2, 3])
}