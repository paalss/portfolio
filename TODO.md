# TODO

## usortert
- [ ] Nextjs: Finn ut om du skal bruke WSL eller git bash. Oversetting funker i hvert fall i WSL på nextjs-blog.

## Bugs
- [ ] Flash of light mode når du er på dark mode og bytter språk
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
- [ ] Bytt ut AVIF bilder med Webp. AVIF funker ikke for samsung internet

## design
- [x] litt mindre enn 2rem på linjehøyde for mobil
- [ ] behold den mindre linjehøyden for desktop også. Det du har nå er i hvert fall fort stort. Bare se på porteføljesiden og "hvorfor react?"-teksten

## Innhold
- [ ] Typos:
  - [ ] "Logo for Jr NM on on ski 2015"
  - [ ] "Portefølje 2022 desember–nå" Skal være 2020, din idiot!
- [ ] legg til nextjs ferdighet i barchart
- [ ] still inn ferdigheter i portfolio squarelink med nextjs
- [ ] sett inn lenke til din howiusevscode profil
- [ ] opprett profil på https://codersrank.io/ og lenk til den??
- [ ] last opp vannklattbildene du lastet opp på instagram på "kunst"-siden. Kanskje bruk slider-to-bilde-versjoner med https://pepsized.com/wp-content/uploads/2018/09/beerslider/demo/index.html
- [ ] doing now seksjon. Som raskt forteller folk hvor jeg jobber, evt. fritidsprosjekter jeg driver med. Ser for meg at den kan være et sånn card, med tekst til venstre og en tegning til høyre.

## tilgjengelighet
- [ ] bruk `<abbr title="">` for forkortelser som ntnu. Se https://css-tricks.com/html-elements-unite-the-voltron-like-powers-of-combining-elements/




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
