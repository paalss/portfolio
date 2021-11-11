import img from "../images/tmplt/t.png";

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
        <i class="fas fa-circle-notch"></i> Besøk siden
      </a>
      <a
        className="link"
        href="https://github.com/paalss/repo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="fab fa-github"></span> Kildekode
      </a>
      <h2>
        Sammenheng, semester
        <span className="subtitle">
          <ul className="tools">
            Verktøy:
            <br />
            <li></li>
          </ul>
        </span>
      </h2>
      <p>Beskrivelse</p>
      <div uk-grid uk-lightbox="animation: slide" className="flex wrap">
        <Figure imgSrc={img} imgAlt="bilde1" caption="bilde1" />
        <Figure imgSrc={img} imgAlt="bilde2" caption="bilde2" />
      </div>
    </>
  );
}

export default Template;
