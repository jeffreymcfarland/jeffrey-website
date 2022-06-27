import Styles from "../styles/components/Text.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";

const TEXT_ALIGN_VALUES = ["left", "center", "right"];
const TEXT_COLOR_VALUES = ["primary", "subtle", "alternate"];
const TEXT_SIZE_VALUES = ["xs", "sm", "md", "lg", "xl"];
const TEXT_WEIGHT_VALUES = ["normal", "semibold"];

export default function Text({
  align,
  children,
  className,
  color,
  element,
  isOnDarkCanvas,
  size,
  weight,
  ...rest
}) {
  const Element = element;

  const textClasses = classNames(
    Styles.text,
    {
      [Styles[align]]: align,
      [Styles[`size-${size}`]]: size,
      [Styles[color]]: color,
      [Styles["on-darkCanvas"]]: isOnDarkCanvas,
      [Styles[`weight-${weight}`]]: weight,
    },
    className
  );

  return (
    <Element className={textClasses} {...rest}>
      {children}
    </Element>
  );
}

Text.defaultProps = {
  align: "left",
  color: "primary",
  element: "p",
  isOnDarkCanvas: false,
  size: "md",
  weight: "normal",
};

Text.propTypes = {
  align: PropTypes.oneOf(TEXT_ALIGN_VALUES),
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(TEXT_COLOR_VALUES),
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  isOnDarkCanvas: PropTypes.bool,
  size: PropTypes.oneOf(TEXT_SIZE_VALUES),
  weight: PropTypes.oneOf(TEXT_WEIGHT_VALUES),
};
