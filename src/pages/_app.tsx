/* eslint-disable react/jsx-props-no-spreading */

import Layout from "@components/Layout";
import AppProvider from "@contexts/index";
import "@styles/fonts.css";
import "@styles/globals.css";
import "@styles/variables.css";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </>
  );
}
