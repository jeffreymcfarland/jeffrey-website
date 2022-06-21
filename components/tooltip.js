import Styles from "../styles/components/Tooltip.module.css";
import classNames from "classnames";
import PropTypes from "prop-types";
import Text from "./text";

export default function Tooltip({ children, isOnDarkCanvas, title }) {
  const tooltipClasses = classNames(Styles.tooltip, {
    [Styles["on-darkCanvas"]]: isOnDarkCanvas,
  });

  return (
    <div className={Styles.tooltipContainer} tabIndex={0}>
      {children}
      <div className={tooltipClasses}>
        <Text isOnDarkCanvas={!isOnDarkCanvas}>{title}</Text>
      </div>
    </div>
  );
}

Tooltip.defaultProps = {
  isOnDarkCanvas: false,
};

Tooltip.propTypes = {
  children: PropTypes.node,
  isOnDarkCanvas: PropTypes.bool,
  title: PropTypes.string,
};
