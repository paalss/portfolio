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
          Behersker
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
          <li title="Behersker MySQL & Relasjonsdatabaser">
            <div class="flex-li">
              <span class="chart__label">
                MySQL & Relasjons&shy;databaser
              </span>
              <div class="chart__bar" style="width: 66%;">
            </div>
          </li>
          <li title="Behersker PHP">
            <div class="flex-li">
              <span class="chart__label">
                PHP
              </span>
              <div class="chart__bar" style="width: 66%;">
            </div>
          </li>
          <li title="Kan grunnleggende Jest">
            <div class="flex-li">
              <span class="chart__label">
                Jest
              </span>
              <div class="chart__bar" style="width: 33%;">
            </div>
          </li>
          <li title="Kan grunnleggende Docker">
            <div class="flex-li">
              <span class="chart__label">
                Docker
              </span>
              <div class="chart__bar" style="width: 33%;">
            </div>
          </li>
          <li title="Kan under grunnleggende NodeJS">
            <div class="flex-li">
              <span class="chart__label">
                NodeJS
              </span>
              <div class="chart__bar" style="width: 16%;">
            </div>
          </li>
          <li title="Kan under grunnleggende Angular & React">
            <div class="flex-li">
              <span class="chart__label">
                Angular & React
              </span>
              <div class="chart__bar" style="width: 8%;">
            </div>
          </li>
        </ul>
      </div>
  
      <div class="chart chart--design">
        <h3 class="chart__title">Grafisk design</h3>
        <ul class="chart--horiz">
          <li title="Behersker Adobe XD, Photoshop, Illustrator, InDesign">
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
