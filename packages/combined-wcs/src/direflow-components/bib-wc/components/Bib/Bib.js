import { Styled } from "direflow-component";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Bib.css";
import Card from "../UI/Card";
import { BibItem } from "./BibItem";
import { fetchBooks } from "../../../../assets/methods/fetch";

export default function Bib(props) {
  const { cart, redirect, token } = props;
  const { t } = useTranslation();
  const [books, setBooks] = useState([]);

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
      <section className="bib">
        <h1>{t("bib.library")}</h1>
        <Card>
          <ul>
            {books.map((item) => (
              <BibItem
                key={item._id}
                id={item._id}
                title={item.title}
                author={item.author}
                year={item.year}
                isbn={item.isbn}
                added={cart.includes(item._id)}
                redirect={redirect}
              />
            ))}
          </ul>
        </Card>
      </section>
    </Styled>
  );
}
