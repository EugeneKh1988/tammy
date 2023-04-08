import '@/styles/globals.css'
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          fontFamily: "Inter, sans-serif",
          colors: {
            onyx: [
              "#3c3c3c",
              "#333333",
              "#2a2a2a",
              "#212121",
              "#191919",
              "#111111",
              "#0a0a0a",
              "#040404",
              "#010101",
              "#000000",
            ],
            cakepop: [
              "#fcc647",
              "#dbac3d",
              "#bb9232",
              "#9c7a28",
              "#7e621f",
              "#624b16",
              "#47350d",
              "#2d2106",
              "#160e02",
              "#030200",
            ],
            gold: [
              "#f4b41b",
              "#d49c16",
              "#b58511",
              "#976e0c",
              "#7a5808",
              "#5e4405",
              "#443002",
              "#2b1d01",
              "#140c00",
              "#030200",
            ],
            hazelwood: [
              "#fff2d4",
              "#ded2b8",
              "#beb49d",
              "#9e9683",
              "#807969",
              "#635e51",
              "#48433a",
              "#2e2b24",
              "#161410",
              "#030302",
            ],
            cheese: [
              "#ffc12f",
              "#dea727",
              "#be8f20",
              "#9e7719",
              "#805f12",
              "#63490c",
              "#483406",
              "#2e2003",
              "#160e01",
              "#030200",
            ],
            darkprince: [
              "#667085",
              "#586073",
              "#4a5161",
              "#3c4350",
              "#2f3540",
              "#232730",
              "#171a21",
              "#0c0e13",
              "#040406",
              "#000101",
            ],
          },
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
