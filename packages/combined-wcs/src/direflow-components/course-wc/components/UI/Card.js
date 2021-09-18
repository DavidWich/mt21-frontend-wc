import { Styled } from "direflow-component";
import React from "react";

import styles from "./Card.css";

const Card = (props) => {
  const { children, styles: propStyles } = props;

  return (
    <Styled styles={styles}>
      <div className={`card ${propStyles}`}>{children}</div>
    </Styled>
  );
};

export default Card;
