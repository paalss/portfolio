// basert på
// Pure CSS horizontal bar chart with staggering animation
// https://codepen.io/vajkri/pen/NxzZwL?editors=0100

const skillsDiv = document.getElementById('skills-placeholder')

skillsDiv.innerHTML = `
  <div class="skills">
    <ul class="lines">
      <li class="line l--0">
        <span class="line__label title">
          Erfaring:
        </span>
      </li>
      <li class="line l--33">
        <span class="line__label">
          Grunn&shy;leggende
        </span>
      </li>
      <li class="line l--66">
        <span class="line__label">
          Behersker godt
        </span>
      </li>
      <li class="line l--100">
        <span class="line__label">
          Ganske god på
        </span>
      </li>
    </ul>
  
    <div class="charts">
      <div class="chart chart--dev">
        <h3 class="chart__title">Webutvikling</h3>
        <ul class="chart--horiz">
          <li title="Ganske god på HTML & CSS">
            <div class="flex-li">
              <span class="chart__label">
                HTML & CSS
              </span>
              <div class="chart__bar" style="width: 100%;">
            </div>
          </li>
          <li title="Ganske god på JavaScript">
            <div class="flex-li">
              <span class="chart__label">
                JavaScript
              </span>
              <div class="chart__bar" style="width: 100%;">
            </div>
          </li>
          <li title="Ganske god på MySQL & Relasjonsdatabaser">
            <div class="flex-li">
              <span class="chart__label">
                MySQL & Relasjons&shy;databaser
              </span>
              <div class="chart__bar" style="width: 100%;">
            </div>
          </li>
          <li title="Behersker React godt">
            <div class="flex-li">
              <span class="chart__label">
                React
              </span>
              <div class="chart__bar" style="width: 66%;">
            </div>
          </li>
          <li title="Behersker PHP godt">
            <div class="flex-li">
              <span class="chart__label">
                PHP
              </span>
              <div class="chart__bar" style="width: 66%;">
            </div>
          </li>
          <li title="Kan grunnleggende automatisk testing">
            <div class="flex-li">
              <span class="chart__label">
                Automatisk testing
              </span>
              <div class="chart__bar" style="width: 33%;">
            </div>
          </li>
          <li title="Kan grunnleggende NodeJS">
            <div class="flex-li">
              <span class="chart__label">
                NodeJS
              </span>
              <div class="chart__bar" style="width: 33%;">
            </div>
          </li>
          <li title="Kan under Docker">
          <div class="flex-li">
            <span class="chart__label">
              Docker
            </span>
            <div class="chart__bar" style="width: 33%;">
          </div>
        </li>
        </ul>
      </div>
  
      <div class="chart chart--design">
        <h3 class="chart__title">Grafisk design</h3>
        <ul class="chart--horiz">
          <li title="Behersker Adobe XD, Photoshop, Illustrator, InDesign godt">
            <div class="flex-li">
              <span class="chart__label">
                Adobe XD, Photoshop, Illustrator, InDesign 
              </span>
              <div class="chart__bar" style="width: 66%;">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

`
