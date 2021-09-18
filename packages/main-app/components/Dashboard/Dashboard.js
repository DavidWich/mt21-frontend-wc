import { useTranslation } from "react-i18next";

import classes from "./Dashboard.module.css";
import Card from "../UI/Card";
import WebComponentWrapper from "../Layout/WebComponentWrapper";

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <div className={classes.dashboard}>
      <h1>{t("dashboard.title")}</h1>
      <div className={classes.side}>
        <Card styles={classes.single}>
          <WebComponentWrapper auth={true} name="news-dashboard-wc" />
        </Card>
        <Card styles={classes.single}>
          <WebComponentWrapper auth={true} name="course-dashboard-wc" />
        </Card>
      </div>
      <div className={classes.side}>
        <Card styles={classes.single}>
          <WebComponentWrapper auth={true} name="email-dashboard-wc" />
        </Card>
        <Card styles={classes.single}>
          <WebComponentWrapper auth={true} name="bib-dashboard-wc" />
        </Card>
      </div>
    </div>
  );
}
