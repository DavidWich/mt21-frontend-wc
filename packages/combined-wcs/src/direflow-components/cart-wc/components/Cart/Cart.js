import { Styled } from "direflow-component";
import React, { useEffect, useState } from "react";

import styles from "./Cart.css";
import CartIcon from "./CartIcon";

export default function Cart(props) {
  const { items, onClick } = props;
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const btnClasses = `button ${btnIsHighlighted ? "bump" : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <Styled styles={styles}>
      <button id="nav_cart" className={btnClasses} onClick={onClick}>
        <span className="icon">
          <CartIcon />
        </span>
        <span className="badge">{items.length}</span>
      </button>
    </Styled>
  );
}
