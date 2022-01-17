import classes from "./ToolList.module.css";

function ToolList({ tools, thereAreMoreTools = false, toolsText = false }) {
  return (
    <ul className={classes.tools}>
      {toolsText && "Verktøy: "}
      {tools &&
        tools.map((tech, i) => {
          return (
            <li key={i}>
              {/* &shy; med space foran er en hack for listeelementene på
                  mobil-nettleserne: Chrome og Samsung Internet. Uten denne hacken
                  så slettes whitespace-et etterpå <li> i disse nettleserne.
                  Og uten whitespace ender vi opp med en eneste lang strek av elementer
                  som blir bredere enn viewporten.
                  &shy; må gjøres usynlig, slik at man ikke ser den på MS Edge eller
                  Google Chrome */}
              <span className={classes.tool}>{tech}</span><span className={classes.invisible}> &shy;</span>
            </li>
          );
        })}
      {thereAreMoreTools && <>.&nbsp;.&nbsp;.</>}
    </ul>
  );
}

export default ToolList;