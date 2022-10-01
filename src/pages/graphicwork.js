import React from 'react';
import SquareLink from "../components/common/SquareLink";
import { graphicworkInfo } from "../pagesInfo";

const Graphicwork = () => (
  <>
    <div className="squarelinks-flex">
      {graphicworkInfo.map((page) => (
        <SquareLink key={page.id} {...page} />
      ))}
      <SquareLink desktopEmptySpace />
      <SquareLink desktopEmptySpace />
    </div>
  </>
);

export default Graphicwork;
