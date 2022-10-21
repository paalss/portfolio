# Påls portefølje

https://paalss.github.io/portfolio/

## Utvikling

### Serve

```bash
yarn dev
```

### :rocket: Deploy

```bash
yarn build # for at kunst-siden skal fungere
git push # på master branch
```

Evt. `yarn start` etter `yarn build` for å sjekke at alt er i orden med kunst-siden.

Trenger ikke å bruke Git Bash. Går helt fint å bruke WSL til dette etter Next-ifiseringen av porteføljen

### Oversett innhold

1. wrap tekst i `<Trans>__</Trans>` eller `t`\`\_\_`
2. `yarn extract` - generer/oppdaterer message catalog med ny tekst og se hvor mye som gjenstår å oversette
3. gå inn i catalog (locales/en/messages.po) og legg til oversettelse i msgstr
4. `yarn compile` - genererer/oppdaterer JS message catalog

#### Valgfritt

5. `yarn clean` - fjern ubrukte oversettelser - bare husk at engelsk tekst i ubrukte (utdaterte) oversettelser kan føres over i ny oppdatert tekst.

Ikke bruk `t` for tekst i pagesInfo.js, det oppdateres kun når det er JSX (`<Trans>`) og ikke string (`t`). Litt synd med tanke på image alt-attributtene som forblir uoversettet, da.

https://lingui.js.org/tutorials/react.html

### Instagram-galleri API ressurser

#### Har token gått ut på dato?

1. finn app-code (se postman)
2. Sett inn app-code i denne URL-en: `https://api.instagram.com/oauth/authorize?client_id={app-id}&redirect_uri=https://paalss.github.io/portfolio/&scope=user_profile,user_media&response_type=code`
3. Lim inn URL i nettleser, logg inn og gi tilgang
4. Når du har kommet til din porteføje, kopier koden som har dukket opp i URL. `code=` (begynn tekstmarkering) `[code]` (avslutt markering) `#_`
5. lim inn kode i code variabelen i postman (Klikk Insta api > Variables)
6. Hent access_token med auth token
7. osv.

#### Opprette ny

https://developers.facebook.com/docs/instagram-basic-display-api/getting-started

https://developers.facebook.com/docs/instagram-basic-display-api/guides/getting-profiles-and-media

1. Dupliser .env.example og navngi ny fil .env:
   `cp .env.example .env`
   (.env.example ligger i prosjektrota)

2. Lim inn long lived access token og tracking id

---

### Deploy-problemer etter checkout

Hvis du har checkoutet en tidligere commit og kjørt yarn og yarn install og jeg husker ikke hva for å serve appen, så kan det hende at du ikke får predeployet som normalt og ikke deployet i det hele tatt når du er tilbake på siste master-versjon igjen. Har notert løsningen her:

[deploy-problem-losning.md](deploy-problem-losning.md)

### AVIF / webp bildekonvertering

#### Med Squoosh CLI (avif/webp)

**Eksempler**

**Bruk WSL, ikke git bash**

- `npx @squoosh/cli --avif auto test.png`
- `npx @squoosh/cli --webp auto test.png`

- `npx @squoosh/cli --avif auto mappe-med-bilder/`

Se mer:

https://github.com/GoogleChromeLabs/squoosh/tree/dev/cli

https://squoosh.app/

#### Med Cwebp binaries (webp)

Konverter alle png og jpg bilder i en mappe til webp-filer:
[How to convert my photos to webp format of Google in windows 8.1?](https://stackoverflow.com/questions/24484272/how-to-convert-my-photos-to-webp-format-of-google-in-windows-8-1) se svaret til pldg. libwebp-1.2.1-windows-x64 funker for windows 10 Education

### Forminsk bilder (for SquareLink bilder)

#### Forminsk Webp

https://www.xconvert.com/compress-webp

#### Forminsk AVIF?

https://www.compresss.com/compress-avif.html

### Kilder

[kilder.md](kilder.md)
