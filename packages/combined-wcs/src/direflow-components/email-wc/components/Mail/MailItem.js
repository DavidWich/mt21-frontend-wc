import { Styled } from "direflow-component";
import React from "react";

import styles from "./MailItem.css";

export function MailItem(props) {
  const { content, recipient, sender, subject } = props;

  return (
    <Styled styles={styles}>
      <li className="single">
        <div>
          <h3>{`${sender} (to: ${recipient})`}</h3>
          <div className="description">{subject}</div>
          <div className="description">{content}</div>
        </div>
      </li>
    </Styled>
  );
}
