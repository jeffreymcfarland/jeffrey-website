import Styles from "../styles/components/Heading.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";

const HEADING_ALIGN_VALUES = ["left", "center", "right"];
const HEADING_COLOR_VALUES = ["primary", "subtle", "alternate"];
const HEADING_LEVEL_VALUES = [1, 2, 3, 4, 5, 6];
const HEADING_WEIGHT_VALUES = ["normal", "semibold", "bold"];

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
  align: PropTypes.oneOf(HEADING_ALIGN_VALUES),
  children: PropTypes.node,
  color: PropTypes.oneOf(HEADING_COLOR_VALUES),
  isOnDarkCanvas: PropTypes.bool,
  level: PropTypes.oneOf(HEADING_LEVEL_VALUES),
  weight: PropTypes.oneOf(HEADING_WEIGHT_VALUES),
};
