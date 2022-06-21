import Styles from "../styles/components/Icon.module.css";
import { IconContext } from "react-icons";

export default function Icon({ color, element, ...rest }) {
  const Element = element;

  return (
    <IconContext.Provider
      value={{ color: `var(${color})`, size: 45, className: Styles.icon }}
    >
      <Element {...rest} />
    </IconContext.Provider>
  );
}
