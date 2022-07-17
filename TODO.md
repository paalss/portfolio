# TODO

## usortert
- [ ] Finn ut om du skal bruke WSL eller git bash. Oversetting funker i hvert fall i WSL på nextjs-blog.

## Bugs
- [ ] `yarn run dev` Løs bugs
  - [ ] besøk localhost:3000, løs problemer
    - [ ] <img> -> <Image>
  - [ ] se node ouput, løs problemer
    - [ ] cant resolve fs (lingui)

## refaktorering
- [ ] se hva du må gjøre med `// import "./uikit-lightbox-related.module.css";` Du må sannsynligvis legge til classes2.root eller noe. slik at classes i module kan brukes. Ikke lov med flere globale stylesheets!
- [ ] se også på `{/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}`

## ytelse
- [x] fjern ubrukte fonts
- [ ] flytt over til nextjs? Skal gi raskere sideinnlasting, SEO og bedre meta tags. https://nextjs.org/docs/migrating/from-create-react-app
- [ ] kjør siden på https://pagespeed.web.dev/ og gjør forbedringer

## design
- [x] litt mindre enn 2rem på linjehøyde for mobil

## Innhold
- [ ] legg til nextjs ferdighet i barchart
- [ ] legg til "skole", "studier" osv. undertekster på graphics
- [ ] still inn ferdigheter i portfolio squarelink

## tilgjengelighet
- [ ] bruk `<abbr title="">` for forkortelser som ntnu. Se https://css-tricks.com/html-elements-unite-the-voltron-like-powers-of-combining-elements/

# EVT
- [ ] Bytt ut AVIF bilder med Webp. AVIF funker ikke for samsung internet
- [ ] last opp vannklattbildene du lastet opp på instagram på "kunst"-siden. Kanskje bruk slider-to-bilde-versjoner med https://pepsized.com/wp-content/uploads/2018/09/beerslider/demo/index.html



_____________________________

# Fonter som brukes

## Raleway
900 - h1, barchart
700 - barchart
600 - html
400 - dl
300 - uikit

## Lora
400 - p, .normal-list, figcaption
(`<b>` bruker ikke noe noe annen font-weight?)
