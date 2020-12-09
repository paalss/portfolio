// CSS Timeline with Custom Properties
// https://codepen.io/melnik909/pen/qPjwvq?editors=0010


const box = document.getElementById('timeline')
const timeline = document.createElement('div')
box.appendChild(timeline)

timeline.outerHTML = `<style>
  /*
    !!!!
    This pen is being refactored
    !!!!
    */

  /*
    =====
    DEPENDENCES
    =====
    */

  /*
    styles to reset headings https://github.com/melnik909/r-title
    */

  .r-title {
    margin-top: var(--rTitleMarginTop, 0) !important;
    margin-bottom: var(--rTitleMarginBottom, 0) !important;
  }

  /* 
    styles of typography  https://github.com/melnik909/css-typography
    */

  p:not([class]) {
    line-height: var(--cssTypographyLineHeight, 1.78);
    margin-top: var(--cssTypographyBasicMargin, 1em);
    margin-bottom: 0;
  }

  p:not([class]):first-child {
    margin-top: 0;
  }

  /*
    text component
    */

  .text {
    display: var(--textDisplay, inline-flex);
    font-size: var(--textFontSize, 1rem);
  }

  /*
    time component
    */

  /*
    core styles
    */

  .time {
    display: var(--timeDisplay, inline-flex);
  }

  /*
    extensions
    */

  .time__month {
    margin-left: var(--timelineMounthMarginLeft, .25em);
  }

  /*
    skin
    */

  .time {
    padding: var(--timePadding, .25rem 1.25rem .25rem);
    background-color: var(--timeBackgroundColor, #f0f0f0);

    font-size: var(--timeFontSize, .75rem);
    font-weight: var(--timeFontWeight, 700);
    text-transform: var(--timeTextTransform, uppercase);
    color: var(--timeColor, currentColor);
  }

  /*
    card component
    */

  /*
    core styles
    */

  .card {
    padding: var(--timelineCardPadding, 1.5rem 1.5rem 1.25rem);
  }

  .card__content {
    margin-top: var(--cardContentMarginTop, .5rem);
  }

  /*
    skin
    */

  .card {
    border-radius: var(--timelineCardBorderRadius, 2px);
    border-left: var(--timelineCardBorderLeftWidth, 3px) solid var(--timelineCardBorderLeftColor, var(--uiTimelineMainColor));
    box-shadow: var(--timelineCardBoxShadow, 0 1px 3px 0 rgba(0, 0, 0, .12), 0 1px 2px 0 rgba(0, 0, 0, .24));
    background-color: var(--timelineCardBackgroundColor, #fff);
  }

  /*
    extensions
    */

  .card__title {
    --rTitleMarginTop: var(--cardTitleMarginTop, 1rem);
    font-size: var(--cardTitleFontSize, 1.25rem);
  }

  /*
    =====
    CORE STYLES
    =====
    */

  .timeline {
    display: var(--timelineDisplay, grid);
    grid-row-gap: var(--timelineGroupsGap, 2rem);
  }

  /*
    1. If timeline__year isn't displaed the gap between it and timeline__cards isn't displayed too
    */

  .timeline__year {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    /* 1 */
  }

  .timeline__cards {
    display: var(--timeloneCardsDisplay, grid);
    grid-row-gap: var(--timeloneCardsGap, 1.5rem);
  }


  /*
    =====
    SKIN
    =====
    */

  .timeline {
    --uiTimelineMainColor: var(--timelineMainColor, #222);
    --uiTimelineSecondaryColor: var(--timelineSecondaryColor, #fff);

    border-left: var(--timelineLineWidth, 3px) solid var(--timelineLineBackgroundColor, var(--uiTimelineMainColor));
    padding-top: 1rem;
    padding-bottom: 1.5rem;
  }

  .timeline__year {
    --timePadding: var(--timelineYearPadding, .5rem 1.5rem);
    --timeColor: var(--uiTimelineSecondaryColor);
    --timeBackgroundColor: var(--uiTimelineMainColor);
    --timeFontWeight: var(--timelineYearFontWeight, 400);
  }

  .timeline__card {
    position: relative;
    margin-left: var(--timelineCardLineGap, 1rem);
  }

  /*
    1. Stoping cut box shadow
    */

  .timeline__cards {
    overflow: hidden;
    padding-top: .25rem;
    /* 1 */
    padding-bottom: .25rem;
    /* 1 */
  }

  .timeline__card::before {
    content: "";
    width: 100%;
    height: var(--timelineCardLineWidth, 2px);
    background-color: var(--timelineCardLineBackgroundColor, var(--uiTimelineMainColor));

    position: absolute;
    top: var(--timelineCardLineTop, 1rem);
    left: -50%;
    z-index: -1;
  }

  /*
    =====
    SETTINGS
    =====
    */
  /**/
  .timeline {
    --timelineMainColor: #000;
    /* --timelineMainColor: #4557bb; */
  }

  /*
    =====
    DEMO
    =====
    */

  #timeline {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Ubuntu, Fira Sans, Helvetica Neue, sans-serif;
    color: #222;
    /* background-color: #f0f0f0; */
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  p:last-child {
    margin-bottom: 0;
  }

  .page {
    max-width: 47rem;
    padding: 5rem 2rem 3rem;
    margin-left: auto;
    margin-right: auto;
  }
</style>
<div class="page">
  <div class="timeline">
    <div class="timeline__group">
      <span class="timeline__year time" aria-hidden="true">2021</span>
      <div class="timeline__cards">
        <div class="timeline__card card">
          <header class="card__header">
            <time class="time" datetime="2020-06-16">
              <span class="time__day">16</span>
              <span class="time__month">juni</span>
            </time>
            <h3 class="card__title r-title">Jobbsøker</h3>
          </header>
          <div class="card__content">
            <p>Ferdig med studiene. Driver med jobbsøking og egne kodeprosjekter.</p>
          </div>
        </div>
      </div>
      <!-- <span class="timeline__year time" aria-hidden="true">2020</span> -->
    </div>
    <div class="timeline__group">
      <div class="timeline__cards">
        <div class="timeline__card card">
          <header class="card__header">
            <time class="time" datetime="2020-01-01">
              <span class="time__day">1</span>
              <span class="time__month">Januar</span>
            </time>
            <h3 class="card__title r-title">Studerte etter fullført bachelorgrad</h3>
          </header>
          <div class="card__content">
            <p>Jeg var ikke helt klar for jobbsøking enda, og trengte mer tid på å bli komfortabel med det. Jeg syntes
              også at
              jeg hadde noen kunnskaper som ikke var gode nok enda (JavaScript, webkomponenter) og som jeg kunne
              forbedre</p>
          </div>
        </div>
      </div>
      <span class="timeline__year time" aria-hidden="true">2020</span>
    </div>

    <div class="timeline__group">
      <span class="timeline__year time" aria-hidden="true">2014</span>
      <div class="timeline__cards">
        <div class="timeline__card card">
          <header class="card__header">
            <time class="time" datetime="2008-07-14">
              <span class="time__day">14</span>
              <span class="time__month">Jul</span>
            </time>
          </header>
          <div class="card__content">
            <p>Travels to France, Italy, Spain, and Peru. After completing fashion editorial in Lima, prolongs stay to
              make portraits of local people in a daylight studio</p>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline__group">
      <span class="timeline__year time" aria-hidden="true">2016</span>
      <div class="timeline__cards">
        <div class="timeline__card card">
          <header class="card__header">
            <time class="time" datetime="2008-08-18">
              <span class="time__day">28</span>
              <span class="time__month">Aug</span>
            </time>
          </header>
          <div class="card__content">
            <p>Upon moving to Brooklyn that summer, I began photographing weddings in Chicago</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`