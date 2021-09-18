import { Styled } from "direflow-component";
import React from "react";

import styles from "./Card.css";

export default function Card(props) {
  const { children, styles: propStyles } = props;

  return (
    <Styled styles={styles}>
      <div className={`card ${propStyles}`}>{children}</div>
    </Styled>
  );
}
