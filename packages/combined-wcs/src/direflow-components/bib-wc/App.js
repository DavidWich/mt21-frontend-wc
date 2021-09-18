import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Bib from "./components/Bib/Bib";

const App = (props) => {
  const { cart, email, language, redirect, token } = props;
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return <Bib email={email} cart={cart} redirect={redirect} token={token} />;
};

export default App;
