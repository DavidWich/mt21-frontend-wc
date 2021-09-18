import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../../store/cart-slice";
import WebComponentWrapper from "../../components/Layout/WebComponentWrapper";

export default function BibPage() {
  const [rendered, setRendered] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (!rendered) {
      setRendered(true);
    } else if (!isAuth) {
      router.replace("/");
    }
  }, [isAuth, router, rendered]);

  const changeCart = useCallback(
    (event) => {
      if (event.detail.type === "ADD") {
        dispatch(cartActions.addItem({ id: event.detail.book }));
      } else if (event.detail.type === "REMOVE") {
        dispatch(cartActions.removeItem({ id: event.detail.book }));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    const component = document.querySelector("bib-wc");
    if (component) {
      component.addEventListener("CHANGECART", changeCart);
      return () => {
        component.removeEventListener("CHANGECART", changeCart);
      };
    }
  }, [changeCart, rendered]);

  if (!isAuth) {
    return null;
  }

  return (
    <WebComponentWrapper auth={true} name="bib-wc" wcSetter={{ cart: cart }} />
  );
}
