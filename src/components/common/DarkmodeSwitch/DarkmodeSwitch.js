import { Switch, useDarkreader } from "react-darkreader";

const DarkmodeSwitch = () => {
  const isDarkDefault =
    localStorage.getItem("isDark") === "true" ? true : false;
  const [isDark, { toggle }] = useDarkreader(isDarkDefault);
  localStorage.setItem("isDark", isDark);

  return <Switch checked={isDark} onChange={toggle} />;
};

export default DarkmodeSwitch;
