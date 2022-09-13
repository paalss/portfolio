import { Fragment, useState } from "react";
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
const countProjectsWith = (tech) => {
  // count projects using tech
  let projectsUsingTech = webworkInfo.map((project) => {
    if (project.tools.includes(tech)) {
      return project;
    } else {
      return null;
    }
  });
  projectsUsingTech = projectsUsingTech.filter((i) => i !== null);
  return projectsUsingTech.length;
};

const filterProjects = (filter) => {
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

const techsToFilterBy = [
  "React",
  "Lit",
  "JavaScript",
  "TypeScript",
  "Jest",
  "GraphQL",
  "MySQL",
  "PHP",
  "HTML",
  "CSS",
  "Docker"
];

const Webwork = () => {
  const [filter, setFilter] = useState(
    techsToFilterBy.map((e) => ({
      tech: e,
      isChecked: false,
      amount: countProjectsWith(e),
    }))
  );

  const filterHandler = (tech) => {
    let filterToToggle = filter.find((e) => e.tech === tech);
    filterToToggle.isChecked = !filterToToggle.isChecked;

    const newFilter = filter.map((e) =>
      e.tech === filterToToggle.tech ? filterToToggle : e
    );
    setFilter(newFilter);
  };

  let filteredProjects = filterProjects(filter);

  // if no filter is set, just render all projects
  if (filteredProjects.length === 0) {
    filteredProjects = webworkInfo;
  }

  return (
    <Fragment>
      <Filter filter={filter} onSelect={filterHandler} />
      <div className="squarelinks-flex">
        {filteredProjects.map((page) => (
          <SquareLink key={page.id} {...page} />
        ))}
        <SquareLink desktopEmptySpace />
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
    </Fragment>
  );
};

export default Webwork;
