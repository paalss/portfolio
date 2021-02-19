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
          Temmelig god på
        </span>
      </li>
    </ul>
  
    <div class="charts">
      <div class="chart chart--dev">
        <span class="chart__title">Utvikling</span>
        <ul class="chart--horiz">
          <li>
            <div class="flex-li">
              <span class="chart__label">
                HTML
              </span>
              <div class="chart__bar" style="width: 100%;">
            </div>
          </li>
          <li>
            <div class="flex-li">
              <span class="chart__label">
                CSS
              </span>
              <div class="chart__bar" style="width: 100%;">
            </div>
          </li>
          <li>
            <div class="flex-li">
              <span class="chart__label">
                JavaScript
              </span>
              <div class="chart__bar" style="width: 100%;">
            </div>
          </li>
          <li>
            <div class="flex-li">
              <span class="chart__label">
                MySQL
              </span>
              <div class="chart__bar" style="width: 66%;">
            </div>
          </li>
          <li>
            <div class="flex-li">
              <span class="chart__label">
                Relasjons&shy;database
              </span>
              <div class="chart__bar" style="width: 66%;">
            </div>
          </li>
          <li>
            <div class="flex-li">
              <span class="chart__label">
                PHP
              </span>
              <div class="chart__bar" style="width: 66%;">
            </div>
          </li>
          <li>
            <div class="flex-li">
              <span class="chart__label">
                Docker
              </span>
              <div class="chart__bar" style="width: 33%;">
            </div>
          </li>
          <li>
            <div class="flex-li">
              <span class="chart__label">
                NodeJS
              </span>
              <div class="chart__bar" style="width: 16%;">
            </div>
          </li>
          <li>
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
        <span class="chart__title">Design</span>
        <ul class="chart--horiz">
          <li>
            <div class="flex-li">
              <span class="chart__label">
                Photoshop
              </span>
              <div class="chart__bar" style="width: 66%;">
            </div>
          </li>
          <li>
            <div class="flex-li">
              <span class="chart__label">
                Illustrator
              </span>
              <div class="chart__bar" style="width: 66%;">
            </div>
          </li>
          <li>
            <div class="flex-li">
              <span class="chart__label">
                Adobe XD
              </span>
              <div class="chart__bar" style="width: 66%;">
            </div>
          </li>
          <li>
            <div class="flex-li">
              <span class="chart__label">
                InDesign
              </span>
              <div class="chart__bar" style="width: 66%;">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

`