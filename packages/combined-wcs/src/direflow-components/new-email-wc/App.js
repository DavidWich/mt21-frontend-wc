import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import NewMail from "./components/Mail/NewMail";

const App = (props) => {
  const { i18n } = useTranslation();
  const { email, language, recipient, redirect } = props;

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return (
    <NewMail
      sender={email}
      recipient={typeof recipient === "string" ? recipient : ""}
      redirect={redirect}
    />
  );
};

export default App;
