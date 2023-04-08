import Head from "next/head";
import React from "react";

interface ILayout {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <main className="bg-white">{children}</main>
    </>
  );
};

export default Layout;
