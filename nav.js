const nav = document.querySelector('nav')
const page = document.currentScript.getAttribute('page')
if (page=='index') {
  nav.innerHTML = `
    <div class="container">
      <ul class="nav">
        <li><a href="index.html" class="open">Hjem</a></li>
        <li><a href="#">Nettsider</a>
          <ul class="website-links">
            <li><a href="webWork/rankingapp.html">Ranking app</a></li>
            <li><a href="webWork/videoopplasting.html">Videoopplastingssystemer</a></li>
            <li><a href="webWork/maclean.html">Alistair Maclean nettside redesign</a></li>
          </ul>
        </li>
      </ul>
    </div>
  `
} else {
  var pageListPlace = document.currentScript.getAttribute('pageListPlace')
  nav.innerHTML = `
    <div class="container">
      <ul class="nav">
        <li><a href="../index.html">Hjem</a></li>
        <li><a href="#" class="open">Nettsider</a>
          <ul class="website-links">
            <li><a href="rankingapp.html">Ranking app</a></li>
            <li><a href="videoopplasting.html">Videoopplastingssystemer</a></li>
            <li><a href="maclean.html">Alistair Maclean nettside redesign</a></li>
          </ul>
        </li>
      </ul>
    </div>
  `
  // openLiAnchor er den <a> lenken som samsvarer med den siden du har åpen. Gi denne <a> en class slik at CSS kan utheve den
  const openLiAnchor = nav.querySelector(`ul.website-links li:nth-child(${pageListPlace})`).querySelector('a')
  openLiAnchor.classList.add('open')
}

