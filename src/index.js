import React from "react";
import { hydrate, render } from "react-dom";
import "./index.css";
// import "./google-font-families.css"
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// react lingui
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { messages as noMessages } from "./locales/no/messages";
import { messages as enMessages } from "./locales/en/messages";
import { no, en } from "make-plural/plurals"

i18n.loadLocaleData("no", {plurals: no})
i18n.loadLocaleData("en", {plurals: en})

const activeLang = localStorage.getItem('lang');
// activeLang: null | "no" | "en"

i18n.load({
  no: noMessages,
  en: enMessages,
});
i18n.activate(activeLang==="en" ? "en" : "no");
document.documentElement.lang = i18n.locale

const LinguiApp = () => (
  <I18nProvider i18n={i18n}>
    <App />
  </I18nProvider>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<LinguiApp />, rootElement);
} else {
  render(<LinguiApp />, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
