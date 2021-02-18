const skillsDiv = document.getElementById('skills-placeholder')

skillsDiv.innerHTML = `
  <div class="skills">
    <ul class="lines">
      <li class="line l--0">
        <span class="line__label title">
          Erfaring:
        </span>
      </li>
      <li class="line l--25">
        <span class="line__label">
          Fulgt noen tutorials
        </span>
      </li>
      <li class="line l--50">
        <span class="line__label">
          --
        </span>
      </li>
      <li class="line l--75">
        <span class="line__label">
          --
        </span>
      </li>
      <li class="line l--100">
        <span class="line__label">
          God på
        </span>
      </li>
    </ul>
  
    <div class="charts">
      <div class="chart chart--dev">
        <span class="chart__title">Utvikling</span>
        <ul class="chart--horiz">
          <li class="chart__bar" style="width: 100%;">
            <span class="chart__label">
              HTML
            </span>
          </li>
          <li class="chart__bar" style="width: 100%;">
            <span class="chart__label">
              CSS
            </span>
          </li>
          <li class="chart__bar" style="width: 90%;">
            <span class="chart__label">
              JavaScript
            </span>
          </li>
          <li class="chart__bar" style="width: 80%;">
            <span class="chart__label">
              MySQL
            </span>
          </li>
          <li class="chart__bar" style="width: 80%;">
            <span class="chart__label">
              Relasjons&shy;database (MariaDB/MySQL)
            </span>
          </li>
          <li class="chart__bar" style="width: 80%;">
            <span class="chart__label">
              PHP
            </span>
          </li>
          <li class="chart__bar" style="width: 5%;">
            <span class="chart__label">
              NodeJS
            </span>
          </li>
        </ul>
      </div>
  
      <div class="chart chart--design">
        <span class="chart__title">Design</span>
        <ul class="chart--horiz">
          <li class="chart__bar" style="width: 70%;">
            <span class="chart__label">
              Photoshop
            </span>
          </li>
          <li class="chart__bar" style="width: 70%;">
            <span class="chart__label">
              Illustrator
            </span>
          </li>
          <li class="chart__bar" style="width: 50%;">
            <span class="chart__label">
              Adobe XD
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>

`