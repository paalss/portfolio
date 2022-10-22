import Image from "next/future/image";
import React from "react";
import classes from "./WorkHeaderImage.module.css";

const WorkHeaderImage = (props) => {
  return (
      <Image {...props} className={classes.workHeaderImage} />
  );
};

export default WorkHeaderImage;
