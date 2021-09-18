import { Styled } from "direflow-component";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./CartModal.css";
import Modal from "../UI/Modal";
import { fetchBooksByCart } from "../../../../assets/methods/fetch";

export default function CartModal(props) {
  const { items, onClose, token } = props;
  const { t } = useTranslation();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await fetchBooksByCart(items, token);
      setBooks([...data.books]);
    };
    fetchItems();
  }, [items, token]);

  if (items.length === 0) {
    return (
      <Modal onClose={onClose}>
        <h3>{t("cart.cart_is_empty")}.</h3>
      </Modal>
    );
  }

  return (
    <Styled styles={styles}>
      <Modal onClose={onClose}>
        <ul className="list">
          {books.map((item) => (
            <li key={item._id}>
              <h3>{`${item.title} (${item.year})`}</h3>
              <div>{item.author}</div>
            </li>
          ))}
        </ul>
      </Modal>
    </Styled>
  );
}
