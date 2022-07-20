import { useEffect } from "react";
import { useTheme } from "../context/theme-context";
import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  const { darkMode, setDarkModeTheme } = useTheme();

  useEffect(() => {
    const body = document.querySelector("body");

    if (darkMode) {
      body.setAttribute("data-dark-mode", "true");
    } else {
      body.setAttribute("data-dark-mode", "false");
    }
  });

  return (
    <>
      <Head>
        <meta
          name="description"
          content="A personal website for Jeffrey McFarland"
        />
        <meta property="og:image" content="/site-image.png" />
      </Head>
      <Navbar darkMode={darkMode} darkModeHandler={setDarkModeTheme} />
      <main tabIndex={0} style={{ flexGrow: 1 }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
