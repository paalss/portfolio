import React, { useEffect } from "react";
import { Switch, useDarkreader } from "react-darkreader";

const DarkmodeSwitch = () => {
  const [isDark, { toggle }] = useDarkreader();
  useEffect(() => {
    const defaultDarken =
      localStorage.getItem("isDark") === "true" ? true : false;
      toggle(defaultDarken)
  }, []);
  localStorage.setItem("isDark", isDark);

  return <Switch checked={isDark} onChange={toggle} />;
};

export default DarkmodeSwitch;
