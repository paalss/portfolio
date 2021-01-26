const nav = document.querySelector('nav')
const pageListPlace = document.currentScript.getAttribute('pageListPlace')

nav.innerHTML = `
  <div class="container">
    <ul>
      <li><a href="../index.html">Hjem</a></li>
      <li><a href="rankingapp.html">Ranking app</a></li>
      <li><a href="videoopplasting.html">Videoopplastingssystem</a></li>
      <li><a href="maclean.html">Alistair Maclean</a></li>
    </ul>
  </div>
`

// var openPageLi = document.createElement('li')
// nav.querySelector('ul').appendChild(openPageLi)

// switch (pageListPlace) {
//   case '1':
//     openPageLi.innerHTML = `<a href="rankingapp.html" class="open">Ranking app</a>`
//     break;
//   case '2':
//     openPageLi.innerHTML = `<a href="videoopplasting.html" class="open">Videoopplastingssystem</a>`
//     break;
//   case '3':
//     openPageLi.innerHTML = `<a href="maclean.html" class="open">Alistair Maclean</a>`
//     break;
//   default:
//     break;
// }
