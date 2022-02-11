# deploy problemer

## slett greier

Slett `.yarn`-mappa og alle de andre yarn-filene også

### yarn why you should migrate
1. `npm install -g yarn`
2. `yarn set version berry` (skal generere .yarn mappe)
3. Add nodeLinker: node-modules in your .yarnrc.yml file
4. commit endringene så langt. altså fjerning av yarn lock
5. `yarn install`
6. commit alt gjenstående. altså nyopprettet yarn lock

https://yarnpkg.com/getting-started/migration#why-should-you-migrate

evt. prøv disse. Jeg prøvde dem litt før jeg gjorde det over, men jeg tror ikke det skal være relevant
- resette yarn.lock (hvis ucommitede endringer)
- https://stackoverflow.com/questions/55323656/error-command-failed-with-exit-code-1-when-i-try-to-run-yarn

## Annen løsning
1. fjern `predeploy`-scriptet fra package.json
Da kan du kjøre `npm run build` og `npm run deploy`
Men yarn funker ikke da. Løsning over er bedre