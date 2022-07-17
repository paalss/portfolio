import React, { useEffect } from "react";
import "../styles/globals.css";

import Header from "../components/layout/Header";

// react lingui
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { messages as noMessages } from "../locales/no/messages";
import { messages as enMessages } from "../locales/en/messages";
import { no, en } from "make-plural/plurals";
import Nav from "../components/layout/Nav";
import Main from "../components/layout/Main";
import Footer from "../components/layout/Footer";

i18n.loadLocaleData("no", { plurals: no });
i18n.loadLocaleData("en", { plurals: en });

i18n.load({
  no: noMessages,
  en: enMessages,
});

function App({ Component, pageProps }) {
  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    i18n.activate(storedLang ? storedLang : "en");
    document.documentElement.lang = i18n.locale;
  }, []);
  
  return (
    <I18nProvider i18n={i18n}>
      <Header>
        <div className="container">
          <h1>PålS</h1>
        </div>
      </Header>
      <Nav />
      <Main>
        <div className="container">
      <Component {...pageProps} />
      </div>
      </Main>
      <Footer />
    </I18nProvider>
  );
}

export default App;
