import Styles from "../styles/components/List.module.css";

export default function List({ children }) {
  return (
    <ul className={Styles.list}>
      {children.length > 1 ? (
        children.map((child, index) => <li key={index}>{child}</li>)
      ) : (
        <li>{children}</li>
      )}
    </ul>
  );
}
