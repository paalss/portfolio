import { prepareCopyButton } from './copyMailToClipboard.js';

const footer = document.querySelector('footer')

footer.innerHTML = `
  <div class="container">
    <b>Du finner meg på:</b>
    <ul>
      <li>
        <a href="https://github.com/paalss" target="_blank" rel="noopener noreferrer">
          <span class="icon fa fa-github"></span><span class="text">Github (paalss)</span>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/pal.stakvik" target="_blank" rel="noopener noreferrer">
          <span class="icon fa fa-facebook"></span><span class="text">Facebook</span>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/pal-stakvik/" target="_blank" rel="noopener noreferrer">
          <span class="icon fa fa-linkedin"></span><span class="text">Linkedin</span>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/gassosaman/" target="_blank" rel="noopener noreferrer">
          <span class="icon fa fa-instagram"></span><span class="text">Instagram (gassosaman)</span>
        </a>
      </li>
      <li>
        <a href="https://scratch.mit.edu/users/pa0110/" target="_blank" rel="noopener noreferrer">
          <span class="icon fa"><img src="images/scratchlogo.png" alt="Scratch logo"></span><span class="text">Scratch (pa0110)</span>
        </a>
      </li>
    </ul>
    
    <b>Mail:</b>
    <ul>
      <li>
        <a href="mailto:paalss94@gmail.com">
          <span class="icon fa fa-envelope"></span><span class="text">paalss94@gmail.com</span>
        </a>
      </li>
      <li>
        <span class="icon fa"></span><button id="copyMailButton"><i class="fa fa-clipboard" aria-hidden="true"></i> Kopier mailadresse</button>
      </li>
    </ul>
  
    <b>Forrige portefølje:</b>
    <ul>
      <li>
        <a href="http://folk.ntnu.no/paalsst/min_portefolje/" target="_blank" rel="noopener noreferrer">
          <span class="icon text">Min portefølje</span>
        </a>
      </li>
    </ul>
  </div>
`

prepareCopyButton()