import React from 'react';
import SquareLink from "../components/common/SquareLink";
import { galleryInfo } from "../pagesInfo";

const Otherwork = () => (
  <div className="squarelinks-flex">
    <SquareLink {...galleryInfo} />
    <SquareLink desktopEmptySpace />
    <SquareLink desktopEmptySpace />
    <SquareLink desktopEmptySpace />
  </div>
);

export default Otherwork;
