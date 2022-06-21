import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main tabIndex={0} style={{ flexGrow: 1 }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
