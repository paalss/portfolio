import { useRouter } from "next/router";
import React from "react";
import pagesInfo from "../../../pagesInfo";

const DynamicHeaderContent = () => {
  const router = useRouter();
  const path = router.asPath;

  const currentPageInfo = pagesInfo.find((e) => {
    return e.link === path;
  });

  if (currentPageInfo === undefined) {
    return (
      <div>
        <h1>404 - Site not found</h1>
      </div>
    );
  } else {
    const { link, heading, title } = currentPageInfo;

    return <div>{link === "/" ? heading : <h1>{title}</h1>}</div>;
  }
};

const Header = () => (
  <header>
    <div className="container">
      <DynamicHeaderContent />
    </div>
  </header>
);

export default Header;
