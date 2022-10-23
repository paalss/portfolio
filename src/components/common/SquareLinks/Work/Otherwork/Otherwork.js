import React from "react";
import SquareLink from "../../SquareLink";
import { galleryInfo } from "../../../../../pagesInfo";

const Otherwork = () => {
  return (
    <div className="squarelinks-flex">
      <SquareLink {...galleryInfo} />
      <SquareLink desktopEmptySpace />
      <SquareLink desktopEmptySpace />
      <SquareLink desktopEmptySpace />
    </div>
  );
};

export default Otherwork;
