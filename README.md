# Påls portefølje

https://paalss.github.io/portfolio/

## Notater for development

### Installer depencencies

`yarn`

### Serve

`yarn start`

### Deploy

1. `yarn predeploy`

2. `yarn deploy`

https://create-react-app.dev/docs/deployment#github-pages

OBS! Hvis du har checkoutet en tidligere commit og kjørt yarn og yarn install og jeg husker ikke hva for å serve appen, så kan det hende at du ikke får predeployet som normalt og ikke deployet i det hele tatt når du er tilbake på siste master-versjon igjen. Har notert løsningen her:

[deploy-problemer.md](deploy-problemer.md)

### Oversett innhold

1. wrap tekst i `<Trans>__</Trans>` eller `t`\`\_\_`
2. `yarn extract` - generer/oppdaterer message catalog med ny tekst og se hvor mye som gjenstår å oversette
3. gå inn i catalog (locales/\*\*/messages.po) og legg til oversettelse i msgstr
4. `yarn compile` - genererer/oppdaterer JS message catalog

Ikke bruk `t` for tekst i pagesInfo.js, det oppdateres kun når det er JSX (`<Trans>`) og ikke string (`t`). Litt synd med tanke på image alt-attributtene som forblir uoversettet, da.

https://lingui.js.org/tutorials/react.html

### Instagram-galleri API ressurser

https://developers.facebook.com/docs/instagram-basic-display-api/getting-started

https://developers.facebook.com/docs/instagram-basic-display-api/guides/getting-profiles-and-media

dupliser .env.example og navngi ny fil .env:
`cp .env.example .env`

og lim inn long lived access token og tracking id

### Konverter bilder til webp

Konverter alle png og jpg bilder i en mappe til webp-filer:
[How to convert my photos to webp format of Google in windows 8.1?](https://stackoverflow.com/questions/24484272/how-to-convert-my-photos-to-webp-format-of-google-in-windows-8-1) se svaret til pldg. libwebp-1.2.1-windows-x64 funker for windows 10 Education

### Forminsk webp bilder (for SquareLink bilder)

https://www.xconvert.com/compress-webp

### Kilder

[kilder.md](kilder.md)

### Create React App README

[CRA-README.md](CRA-README.md)
