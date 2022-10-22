import FutureImage from "next/future/image";
import { number, string } from "prop-types";
import React from "react";
import classes from "./WorkHeaderImage.module.css";

const WorkHeaderImage = (props) => {
  return (
    <FutureImage
      {...props}
      placeholder="blur"
      blurDataURL={props.src}
      className={classes.workHeaderImage}
    />
  );
};

export default WorkHeaderImage;

WorkHeaderImage.propTypes = {
  src: string,
  width: number,
  height: number,
  alt: string,
};
