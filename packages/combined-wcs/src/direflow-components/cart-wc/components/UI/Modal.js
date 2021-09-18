import { Styled } from "direflow-component";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.css";

const Backdrop = (props) => {
  const { onClose } = props;
  return (
    <Styled styles={styles}>
      <div className="backdrop" onClick={onClose} />
    </Styled>
  );
};

const ModalOverlay = (props) => {
  const { children } = props;

  return (
    <Styled styles={styles}>
      <div className="modal">
        <div className="content">{children}</div>
      </div>
    </Styled>
  );
};

export default function Modal(props) {
  const { children, onClose } = props;
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("modal")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById("modal")
      )}
    </>
  );
}
