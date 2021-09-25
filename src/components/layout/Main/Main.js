import classes from "./Main.module.css";

function Main({ children }) {
  return <main className={classes.main}>{children}</main>;
}

export default Main;
