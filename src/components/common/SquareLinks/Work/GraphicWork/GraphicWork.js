import React from "react";
import SquareLink from "../../SquareLink";
import { graphicworkInfo } from "../../../../../pagesInfo";

const GraphicWork = () => {
  return (
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
};

export default GraphicWork;
