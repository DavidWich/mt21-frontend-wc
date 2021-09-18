import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function WebComponentWrapper(props) {
  const { i18n } = useTranslation();
  const router = useRouter();
  const email = useSelector((state) => state.auth.email);
  const token = useSelector((state) => state.auth.token);
  const { auth, name, src, wcProps, wcSetter } = props;

  useEffect(() => {
    const wc = document.querySelector(name);
    if (wc) {
      Object.assign(wc, { ...wcSetter, redirect: (page) => router.push(page) });
    }
  }, [name, router, wcSetter]);

  if (typeof customElements === "undefined") {
    return null;
  }

  const script =
    typeof customElements.get(name) === "undefined" ? (
      <Head>
        <script
          type="text/javascript"
          src={
            typeof src !== "undefined"
              ? src
              : `${process.env.NEXT_PUBLIC_WC_SERVE}/${name}.js`
          }
          defer
        />
      </Head>
    ) : null;

  return (
    <>
      {script}
      {React.createElement(
        name,
        {
          ...wcProps,
          language: i18n.language,
          email: auth ? email : null,
          token: auth ? token : null,
        },
        null
      )}
    </>
  );
}
