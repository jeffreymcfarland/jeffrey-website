import Styles from "../styles/components/Section.module.css";

export default function Section({ children }) {
  return <section className={Styles.section}>{children}</section>;
}
