import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import CourseDashboardTile from "./components/Course/CourseDashboardTile";

const App = (props) => {
  const { i18n } = useTranslation();
  const { email, language, redirect, token } = props;

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return <CourseDashboardTile email={email} redirect={redirect} token={token} />;
};

export default App;
