import classes from "./WorkHeading.module.css";

// components
import ToolList from "../ToolList";
import WorkLinks from "../WorkLinks";

const WorkHeading = ({
  extraSpaceAbove = false,
  heading,
  timespan,
  siteInfo = false,
  tools,
}) => {
  const { site = false, repo = false } = siteInfo && siteInfo;
  const marginTopClass = extraSpaceAbove ? classes.extraSpace : classes.defaultSpace;
  return (
    <div className={classes.root + " " + marginTopClass}>
      <h2 className={classes.heading}>{heading}</h2>
      <span className="subtitle">{timespan}</span>
      <WorkLinks site={site} repo={repo} />
      <ToolList tools={tools} toolsText={true} />
    </div>
  );
};

export default WorkHeading;
