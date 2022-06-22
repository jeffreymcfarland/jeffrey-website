import Styles from "../styles/components/List.module.css";

export default function List({ children }) {
  return <ul className={Styles.list}>{children}</ul>;
}
