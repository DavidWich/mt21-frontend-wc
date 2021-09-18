import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Cart from "./components/Cart/Cart";
import CartModal from "./components/Cart/CartModal";

const App = (props) => {
  const { i18n } = useTranslation();
  const { cart, language, token } = props;
  const [showModal, setShowModal] = useState(false);

  const items = cart ? cart : [];

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  const onClickHandler = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const onCloseHandler = (event) => {
    event.preventDefault();
    setShowModal(false);
  };

  if (showModal) {
    return (
      <>
        <Cart items={items} onClick={onClickHandler} />
        <CartModal items={items} onClose={onCloseHandler} token={token} />
      </>
    );
  }

  return <Cart items={items} onClick={onClickHandler} />;
};

export default App;
