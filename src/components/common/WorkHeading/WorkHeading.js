import classes from "./WorkHeading.module.css";

// components
import ToolList from "../ToolList";
import WorkLinks from "../WorkLinks";

const WorkHeading = ({ headingInfo, siteInfo = false, tools }) => {
  const { heading, timespan = false, hx } = headingInfo;
  const { site = false, repo = false } = siteInfo && siteInfo;

  const timespanOuterHTML = timespan && (
    <span className="subtitle">{timespan}</span>
  );
  const headingOuterHTML =
    hx === "h2" ? (
      <h2 className={classes.heading}>
        {heading} {timespanOuterHTML}
      </h2>
    ) : (
      <h3 className={classes.heading}>
        {heading} {timespanOuterHTML}
      </h3>
    );

  return (
    <div className={classes.root}>
      {headingOuterHTML}
      <WorkLinks site={site} repo={repo} />
      <ToolList
        tools={tools}
        toolsText={true}
      />
    </div>
  );
};

export default WorkHeading;
