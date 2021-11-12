import classes from "./Certification.module.css";

function Certification({companyLogo, title, timepsan, company}) {
  return (
    <div className={classes.certification}>
      <img src={companyLogo} alt="Udemy logo" />
      <h3>React - The Complete Guide (incl Hooks, React Router, Redux)</h3>
      <p>2021 april–august. Et Udemy kurs av Maximilian Schwarzmüller</p>
      <p>Attest-ID: UC-0f5eb1d1-16ce-43f4-87ef-f0c9b09a9e04</p>
      <p>
        Legitimasjons-URL:
        https://www.udemy.com/certificate/UC-0f5eb1d1-16ce-43f4-87ef-f0c9b09a9e04/
      </p>
    </div>
  );
}

export default Certification;
