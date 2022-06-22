import Styles from "../styles/components/Icon.module.css";
import { IconContext } from "react-icons";
import PropTypes from "prop-types";

export default function Icon({ color, element, size, ...rest }) {
  const Element = element;

  return (
    <IconContext.Provider
      value={{ color: `var(${color})`, size: size, className: Styles.icon }}
    >
      <Element {...rest} />
    </IconContext.Provider>
  );
}

Icon.defaultProps = {
  size: 45,
};

Icon.propTypes = {
  color: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: PropTypes.number,
};
