import { Styled } from "direflow-component";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Mail.css";
import Card from "../UI/Card";
import { MailItem } from "./MailItem";
import { fetchUserEmails } from "../../../../assets/methods/fetch";

export default function Mail(props) {
  const { t } = useTranslation();
  const { email, redirect, token } = props;
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const f = async () => {
      if (email) {
        const emails = await fetchUserEmails(email, token);
        setEmails(emails.emails);
      }
    };
    f();
  }, [email, token]);

  const newEmailHandler = (event) => {
    event.preventDefault();
    redirect({ pathname: "/mail", query: { new_mail: "true" } });
  };

  return (
    <Styled styles={styles}>
      <section className="mail">
        <div className="heading">
          <h1>{t("mail.email")}</h1>
          <button id="mail_new" onClick={newEmailHandler}>
            {t("mail.new_email")}
          </button>
        </div>
        <Card>
          <ul>
            {emails.map((item) => (
              <MailItem
                key={item._id}
                sender={item.sender}
                recipient={item.recipient}
                subject={item.subject}
                content={item.content}
              />
            ))}
          </ul>
        </Card>
      </section>
    </Styled>
  );
}
