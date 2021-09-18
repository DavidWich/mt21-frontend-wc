import { Styled } from "direflow-component";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { sendMail } from "../../../../assets/methods/fetch";

import styles from "./NewMail.css";

export default function NewMail(props) {
  const { t } = useTranslation();
  const recipientRef = useRef();
  const subjectRef = useRef();
  const contentRef = useRef();
  const { sender, recipient, redirect } = props;

  const backHandler = (event) => {
    event.preventDefault();
    redirect({ pathname: "/mail" });
  };

  const newEmailHandler = async (event) => {
    event.preventDefault();
    await sendMail(
      sender,
      recipientRef.current.value,
      subjectRef.current.value,
      contentRef.current.value
    );
    redirect({ pathname: "/mail" });
  };

  return (
    <Styled styles={styles}>
      <form className="new-mail" onSubmit={newEmailHandler}>
        <div className="side">
          <button onClick={backHandler}>{t("mail.back")}</button>
          <button>{t("mail.send")}</button>
        </div>
        <div className="control">
          <label htmlFor="recipient">{t("mail.recipient")}</label>
          <input
            type="email"
            id="recipient"
            ref={recipientRef}
            defaultValue={recipient}
          />
        </div>
        <div className="control">
          <label htmlFor="subject">{t("mail.subject")}</label>
          <input type="text" id="subject" ref={subjectRef} />
        </div>
        <div className="control">
          <label htmlFor="content">{t("mail.content")}</label>
          <textarea rows="20" id="content" ref={contentRef} />
        </div>
      </form>
    </Styled>
  );
}
