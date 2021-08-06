const nav = document.querySelector("nav");
const page = document.currentScript.getAttribute("page");

let openLiAnchor;
// openLiAnchor er den <a> lenken som samsvarer med den siden du har åpen. Gi denne <a> en class slik at CSS kan utheve den
if (page == "index") {
  openLiAnchor = document.getElementById("indexLink");
} else if (page == "fritid") {
  openLiAnchor = document.getElementById("galleryLink");
} else {
  openLiAnchor = nav
    .querySelector(`ul.website-links li:nth-child(${pageListPlace})`)
    .querySelector("a");
}
openLiAnchor.classList.add("open");
