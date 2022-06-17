import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ flexGrow: 1 }}>{children}</main>
      <Footer />
    </>
  );
}
