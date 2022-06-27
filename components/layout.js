import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="A personal website for Jeffrey McFarland"
        />
        <meta property="og:image" content="/site-image.png" />
      </Head>
      <Navbar />
      <main tabIndex={0} style={{ flexGrow: 1 }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
