import Head from "next/head";

import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Studi-App</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default Layout;
