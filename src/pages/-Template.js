import img from "../images/tmplt/t.webp";

import Figure from "../components/common/Figure";

function Template() {
  return (
    <>
      <img src={img} alt="img" />
      <a
        className="link"
        href="https://paalss.github.io/repo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="fas fa-circle-notch"></span> Besøk siden
      </a>
      <a
        className="link"
        href="https://github.com/paalss/repo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="fab fa-github"></span> Kildekode
      </a>
      <span className="link">
        <span className="fas fa-circle-notch"></span> Ikke tilgjengelig live
      </span>
      <span className="link">
        <span className="fab fa-github"></span> Privat kildekode
      </span>
      <h2>
        Sammenheng
        <span className="subtitle">semester</span>
      </h2>
      <ul className="tools">
        Verktøy: <li></li>
      </ul>
      <p>Beskrivelse</p>
      <div uk-lightbox="animation: slide" className="flex wrap">
        <Figure imgSrc={img} imgAlt="bilde1" caption="bilde1" />
        <Figure imgSrc={img} imgAlt="bilde2" caption="bilde2" />
      </div>
    </>
  );
}

export default Template;
