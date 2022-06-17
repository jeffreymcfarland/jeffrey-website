import Styles from "../styles/components/Heading.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function Heading({
  align,
  children,
  color,
  isOnDarkCanvas,
  level,
  weight,
  ...rest
}) {
  const Element = `h${level}`;

  const headingClasses = classNames({
    [Styles[align]]: align !== "left",
    [Styles[Element]]: level,
    [Styles[color]]: color,
    [Styles["on-darkCanvas"]]: isOnDarkCanvas,
    [Styles[`${weight}Weight`]]: weight,
  });

  return (
    <Element className={headingClasses} {...rest}>
      {children}
    </Element>
  );
}

Heading.defaultProps = {
  align: "left",
  color: "primary",
  level: 1,
  isOnDarkCanvas: false,
  weight: "normal",
};

Heading.propTypes = {
  align: PropTypes.oneOf(["left", "center", "right"]),
  color: PropTypes.oneOf(["primary", "subtle", "alternate"]),
  isOnDarkCanvas: PropTypes.bool,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  weight: PropTypes.oneOf(["normal", "semibold", "bold"]),
};
