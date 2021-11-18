import classes from "./HtmlTag.module.css";

function HtmlTag({ children }) {
  return <code className={classes.htmlTag}>&lt;{children}&gt;</code>;
}

export default HtmlTag;
