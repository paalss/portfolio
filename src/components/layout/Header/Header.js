import classes from "./Header.module.css";

function Header({ children }) {
  return (
    <div className={classes.header}>
      {children}
    </div>
  );
}

export default Header;
