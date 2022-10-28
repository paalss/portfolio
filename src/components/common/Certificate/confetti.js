import confetti from "canvas-confetti";

// ------------ Confetti sources -------------
// confetti package https://github.com/catdad/canvas-confetti
// positioning to element https://codepen.io/catdad/pen/VwjRLoM

const randomInRange = (min, max) => Math.random() * (max - min) + min;

const fireConfetti = (x, y) => {
  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: {
      x: x,
      y: y,
    },
  });
};

const fireConfettiFrom = (element) => {
  let width = window.innerWidth;
  let height = window.innerHeight;

  window.addEventListener("resize", () => {
    width = window.innerWidth;
    height = window.innerHeight;
  });
  const rect = element.getBoundingClientRect();

  const originX = (rect.x + 0.5 * rect.width) / width;
  const originY = (rect.y + 0.5 * rect.height) / height;

  fireConfetti(originX, originY);

  // fire(0.25, {
  //   spread: 26,
  //   startVelocity: 55,
  // });
  // fire(0.2, {
  //   spread: 60,
  // });
  // fire(0.35, {
  //   spread: 100,
  //   decay: 0.91,
  //   scalar: 0.8,
  // });
  // fire(0.1, {
  //   spread: 120,
  //   startVelocity: 25,
  //   decay: 0.92,
  //   scalar: 1.2,
  // });
  // fire(0.1, {
  //   spread: 120,
  //   startVelocity: 45,
  // });

  // const count = 200;
  // const defaults = {
  //   origin: { y: -10 },
  // };

  // const fire = (particleRatio, opts) => {
  //   confetti(
  //     Object.assign({}, defaults, opts, {
  //       particleCount: Math.floor(count * particleRatio),
  //     })
  //   );
  // };
};

export default fireConfettiFrom;
