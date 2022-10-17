import React, { Suspense, useState } from "react";
import i18n from "./i18n";
import { Container } from "react-bootstrap";
import Greeting from "./components/Greetings";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import Text from "./components/Text";
import "bootstrap/dist/css/bootstrap.min.css";
import LocaleContext from "./LocaleContext";

function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));
  return (
    <div className="App">
      <LocaleContext.Provider value={{ locale, setLocale }}>
        <Suspense fallback={<Loading />}>
          <Navigation />
          <Container>
            <Greeting />
            <Text />
          </Container>
        </Suspense>
      </LocaleContext.Provider>
    </div>
  );
}

export default App;
