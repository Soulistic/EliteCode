import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
export default function App({ Component, pageProps }: AppProps) {
  return(
    <RecoilRoot>
      <Head>
          <title>Elitecode</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/leetforce.png" />
        </Head>
        <Component {...pageProps} />
    </RecoilRoot>
  );
}
