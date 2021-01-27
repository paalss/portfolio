const nav = document.querySelector('nav')
const pageListPlace = document.currentScript.getAttribute('pageListPlace')

nav.innerHTML = `
  <div class="container">
    <ul>
      <li><a href="../index.html">Hjem</a></li>
      <div class="work-links">
        <li><a href="rankingapp.html">Ranking app</a></li>
        <li><a href="videoopplasting.html">Videoopplastingssystemer</a></li>
        <li><a href="maclean.html">Alistair Maclean</a></li>
      </div>
    </ul>
  </div>
`

const openLiA = nav.querySelector(`div.work-links li:nth-child(${pageListPlace})`).querySelector('a')
openLiA.classList.add('open')