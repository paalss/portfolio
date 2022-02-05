# Påls portefølje

https://paalss.github.io/portfolio/

## Notater for development

### Serve

`yarn start`

### Deploy

1. `yarn predeploy`

2. `yarn deploy`

https://create-react-app.dev/docs/deployment#github-pages

### Oversett innhold

1. wrap tekst i `<Trans>__</Trans>` eller `t`\`__`
2. `yarn extract` - generer/oppdaterer message catalog med ny tekst og se hvor mye som gjenstår å oversette
3. gå inn i catalog (locales/**/messages.po) og legg til oversettelse i msgstr
4. `yarn compile` - genererer/oppdaterer JS message catalog

https://lingui.js.org/tutorials/react.html

### Instagram-galleri API ressurser

https://developers.facebook.com/docs/instagram-basic-display-api/getting-started

https://developers.facebook.com/docs/instagram-basic-display-api/guides/getting-profiles-and-media

### Kilder

[kilder.md](kilder.md)

### Create React App README

[CRA-README.md](CRA-README.md)

