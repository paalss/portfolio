import classes from "./Certification-copy.module.css";
import reactCertificate from "../../../images/certifications/react-certificate.jpg";

function Certification({ companyLogo, title, timepsan, company }) {
  function map(val, minA, maxA, minB, maxB) {
    return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
  }

  function Card3D(card, ev) {
    let img = card.querySelector("img");
    let imgRect = card.getBoundingClientRect();
    let width = imgRect.width;
    let height = imgRect.height;
    let mouseX = ev.offsetX;
    let mouseY = ev.offsetY;
    let rotateY = map(mouseX, 0, 180, -25, 25);
    let rotateX = map(mouseY, 0, 250, 25, -25);
    let brightness = map(mouseY, 0, 250, 1.5, 0.5);

    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    img.style.filter = `brightness(${brightness})`;
  }

  var cards = document.querySelectorAll(".card3d");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (ev) => {
      Card3D(card, ev);
    });

    card.addEventListener("mouseleave", (ev) => {
      let img = card.querySelector("img");

      img.style.transform = "rotateX(0deg) rotateY(0deg)";
      img.style.filter = "brightness(1)";
    });
  });
  // <div className="card3d" style={{ width: "300px" }}></div>
  return (
    <>
      {/* https://codepen.io/nelsonr/pen/WNQaZPb */}
      <div className={classes.certification}>
        <div className="card3d" style={{ width: "300px" }}>
          <img src={reactCertificate} alt="" style={{ width: "400px" }} />
        </div>
        <div className="card3d" style={{ width: "300px" }}>
          <img
            src="https://nelsoncodepen.s3.eu-west-2.amazonaws.com/thb-250-plains.png"
            alt="Plains"
            width="180"
          />
        </div>
      </div>
    </>
  );
}

export default Certification;