const nav = document.querySelector('nav')
const pageListPlace = document.currentScript.getAttribute('pageListPlace')

nav.innerHTML = `
  <div class="container">
    <ul>
      <li><a href="../index.html">Hjem</a></li>
      <li><a href="rankingapp.html">Ranking app</a></li>
      <li><a href="videoopplasting.html">Videoopplastingssystemer</a></li>
      <li><a href="maclean.html">Alistair Maclean</a></li>
    </ul>
  </div>
`

const openLiA = nav.querySelector(`ul li:nth-child(${pageListPlace})`).nextElementSibling.querySelector('a')
openLiA.classList.add('open')