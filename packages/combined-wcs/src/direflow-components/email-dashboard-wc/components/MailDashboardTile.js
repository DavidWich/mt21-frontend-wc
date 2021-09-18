import { Styled } from "direflow-component";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./MailDashboardTile.css";
import { fetchUserEmails } from "../../../assets/methods/fetch";

export default function MailDashboardTile(props) {
  const { t } = useTranslation();
  const [emails, setEmails] = useState([]);
  const { email, redirect, token } = props;

  useEffect(() => {
    const f = async () => {
      if (email) {
        const emails = await fetchUserEmails(email, token);
        setEmails(emails.emails);
      }
    };
    f();
  }, [email, token]);

  const linkHandler = (event) => {
    event.preventDefault();
    redirect({ pathname: "/mail" });
  };

  return (
    <Styled styles={styles}>
      <div className="dashboard">
        <h2 onClick={linkHandler}>{t("dashboard.mails")}</h2>
        {`${t("dashboard.mail_count")}: ${emails.length}`}
      </div>
    </Styled>
  );
}
