import { Switch, useDarkreader } from "react-darkreader";

const DarkmodeSwitch = () => {
  const defaultDarken =
    localStorage.getItem("isDark") === "true" ? true : false;
  const [isDark, { toggle }] = useDarkreader(defaultDarken);
  localStorage.setItem("isDark", isDark);

  return <Switch checked={isDark} onChange={toggle} />;
};

export default DarkmodeSwitch;
