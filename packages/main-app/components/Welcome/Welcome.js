import { useTranslation } from "react-i18next";

import classes from "./Welcome.module.css";

export default function Welcome() {
  const { t } = useTranslation();

  const initialize = async () => {
    await fetch("/api/initialize");
    alert("Data initialized");
  };

  return (
    <div className={classes.welcome}>
      <h1 className={classes.welcome}>{t("welcome.welcome")}!</h1>
      <button onClick={initialize}>{t("welcome.init")}</button>
    </div>
  );
}
