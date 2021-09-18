import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { useCallback, useEffect } from "react";

import "../styles/globals.css";
import "../assets/i18n/i18n";
import store from "../store/index";
import Layout from "../components/Layout/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const redirect = useCallback(
    (event) =>
      router.push({
        pathname: `/${event.detail.page}`,
        query: { ...event.detail.query },
      }),
    [router]
  );

  useEffect(() => {
    window.addEventListener("redirect", redirect);
    return () => {
      window.removeEventListener("redirect", redirect);
    };
  }, [redirect]);

  return (
    <>
    <Head>
    <script
        type="text/javascript"
        src={`${process.env.NEXT_PUBLIC_WC_SERVE}/vendor.js`}
        defer
      />
    </Head>
    <Provider store={store}>
      <div id="modal" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
    </>
  );
}

export default MyApp;
