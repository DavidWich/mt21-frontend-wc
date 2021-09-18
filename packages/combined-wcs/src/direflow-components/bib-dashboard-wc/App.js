import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import BibDashboardTile from "./components/Bib/BibDashboardTile";

const App = (props) => {
  const { i18n } = useTranslation();
  const { language, redirect, token } = props;

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return <BibDashboardTile redirect={redirect} token={token} />;
};

export default App;
