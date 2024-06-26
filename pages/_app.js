import Head from "next/head";

import "../styles/globals.css";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        {/* This will be a general title, if one page has a title then this title will be overwritten */}
        <title>Next Events</title>
        <meta name="description" content="NextJS events" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
