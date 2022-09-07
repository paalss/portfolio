import { useState } from "react";
import { webworkInfo } from "../pagesInfo";

// components
import SquareLink from "../components/common/SquareLink";

// icons
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// react lingui
import { Trans } from "@lingui/macro";
import Filter from "../components/common/Filter/Filter";

// const filteredWebwork = () => {};

const Webwork = () => {
  const [filter, setFilter] = useState([
    { tech: "React", isChecked: true },
    { tech: "GraphQL", isChecked: true },
    { tech: "JavaScript", isChecked: true },
    { tech: "TypeScript", isChecked: true },
    { tech: "PHP", isChecked: true },
    { tech: "HTML", isChecked: true },
    { tech: "CSS", isChecked: true },
  ]);

  const filterHandler = (tech) => {
    let filterToToggle = filter.find((e) => e.tech === tech);
    filterToToggle.isChecked = !filterToToggle.isChecked;

    const newFilter = filter.map((e) =>
      e.tech === filterToToggle.tech ? filterToToggle : e
    );
    setFilter(newFilter);
  };

  const filterProjects = () => {
    let projects = webworkInfo.map((project) => {
      const techFoundArray = project.tools.map((tech) => {
        const techFound = filter.find((filterOpt) => filterOpt.tech === tech);
        const isTechFound = techFound && techFound.isChecked;
        return !!isTechFound;
      });

      if (techFoundArray.includes(true)) {
        return project;
      } else {
        return null;
      }
    });

    projects = projects.filter((e) => e !== null);

    return projects;
  };

  const filteredProjects = filterProjects();

  return (
    <>
      <Filter selected={filter} onSelect={filterHandler} />
      <div className="squarelinks-flex">
        {filteredProjects.map((page) => (
          <SquareLink key={page.id} {...page} />
        ))}
        <SquareLink desktopEmptySpace />
        <SquareLink desktopEmptySpace />
      </div>
      <div className="mt-50 center-content">
        <a
          className="button"
          href="https://github.com/paalss"
          rel="noopener noreferrer"
        >
          <Fa icon={faGithub} /> <Trans>Besøk min Github-profil</Trans>
        </a>
      </div>
    </>
  );
};

export default Webwork;
