import { Styled } from "direflow-component";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./BibDashboardTile.css";
import { fetchBooks } from "../../../../assets/methods/fetch";

export default function BibDashboardTile(props) {
  const { redirect, token } = props;
  const { t } = useTranslation();
  const [books, setBooks] = useState([]);

  const onClickHandler = (event) => {
    event.preventDefault();
    redirect({ pathname: "/bib" });
  };

  useEffect(() => {
    const f = async () => {
      const data = await fetchBooks(token);
      if (data) {
        setBooks(data.books);
      }
    };
    f();
  }, [token]);

  return (
    <Styled styles={styles}>
      <div className="dashboard">
        <h2 onClick={onClickHandler}>{t("dashboard.bib")}</h2>
        <ul className="dashboard-items">
          {books.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </Styled>
  );
}
