import classes from "./Certificate.module.css";
import React, { useEffect } from "react";
import Image from "next/image";
import { t } from "@lingui/macro";

const Certificate = () => {
  useEffect(() => {
    const map = (val, minA, maxA, minB, maxB) =>
      minB + ((val - minA) * (maxB - minB)) / (maxA - minA);

    const Card3D = (card, ev) => {
      let img = card.querySelector("img");
      let mouseX = ev.offsetX;
      let mouseY = ev.offsetY;
      let rotateY = map(mouseX, 0, 500, -15, 15);
      let rotateX = map(mouseY, 0, 500, 15, -15);
      let brightness = map(mouseY, 0, 500, 1.5, 0.5);

      img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      img.style.filter = `brightness(${brightness})`;
    };

    const cards = document.querySelectorAll(".card3d");

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
  }, []);

  return (
    <>
      {/* https://codepen.io/nelsonr/pen/WNQaZPb */}
      <div className={classes.certificateBg}>
        <a
          href="https://www.udemy.com/certificate/UC-0f5eb1d1-16ce-43f4-87ef-f0c9b09a9e04/"
          target="_blank"
          rel="noopener noreferrer"
          className="card3d"
          title={t`Åpne Udemy siden for dette sertifikatet`}
        >
          <Image
            src="images/certificates/react-certificate-small.webp"
            width={1600}
            height={1190}
            alt="Certificate of completion. React - The Complete Guide (incl Hooks, React Router, Redux)"
          />
        </a>
      </div>
    </>
  );
};

export default Certificate;
