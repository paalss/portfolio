import classes from "./HtmlTag.module.css";

const HtmlTag = ({ children }) => (
  <code className={classes.htmlTag}>&lt;{children}&gt;</code>
);

export default HtmlTag;
