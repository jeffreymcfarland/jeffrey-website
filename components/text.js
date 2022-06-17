import Styles from "../styles/components/Text.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function Text({
  children,
  color,
  element,
  isOnDarkCanvas,
  size,
  weight,
  ...rest
}) {
  const Element = element;

  const textClasses = classNames(Styles.text, {
    [Styles[`size-${size}`]]: size,
    [Styles[color]]: color,
    [Styles["on-darkCanvas"]]: isOnDarkCanvas,
    [Styles[`weight-${weight}`]]: weight,
  });

  return (
    <Element className={textClasses} {...rest}>
      {children}
    </Element>
  );
}

Text.defaultProps = {
  color: "primary",
  element: "p",
  isOnDarkCanvas: false,
  size: "md",
  weight: "normal",
};

Text.propTypes = {
  color: PropTypes.oneOf(["primary", "subtle", "alternate"]),
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  isOnDarkCanvas: PropTypes.bool,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  weight: PropTypes.oneOf(["normal", "semibold"]),
};
