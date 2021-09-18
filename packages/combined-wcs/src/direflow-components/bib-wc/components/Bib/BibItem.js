import { EventContext, Styled } from "direflow-component";
import React, { useContext } from "react";

import styles from "./BibItem.css";

export function BibItem(props) {
  const { added, author, id, isbn, redirect, title, year } = props;
  const dispatch = useContext(EventContext);

  const onAdd = (event) => {
    event.preventDefault();
    const _event = new CustomEvent("CHANGECART", {
      detail: {
        type: added ? "REMOVE" : "ADD",
        book: id,
      },
    });
    dispatch(_event);
  };

  const redirectHandler = () => redirect("/");

  return (
    <Styled styles={styles}>
      <li className="single">
        <div>
          <div className="side">
            <h3>
              {title} ({year})
            </h3>
            <button onClick={onAdd}>{added ? "✓" : "+"}</button>
          </div>
          <div className="description">{author}</div>
          <div className="description" onClick={redirectHandler}>
            {isbn}
          </div>
        </div>
      </li>
    </Styled>
  );
}
