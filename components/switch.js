import classNames from "classnames";
import PropTypes from "prop-types";
import Styles from "../styles/components/Switch.module.css";

export default function Switch({ checked, className, icon, name, onChange }) {
  const switchClasses = classNames(
    Styles.container,
    {
      [Styles.checked]: checked,
    },
    className
  );

  return (
    <span className={switchClasses}>
      <span className={Styles.base}>
        <input
          type="checkbox"
          className={Styles.input}
          name={name}
          id={name}
          onChange={onChange}
        />
        <span className={Styles.thumb}>{icon}</span>
      </span>
      <span className={Styles.track} />
    </span>
  );
}

Switch.defaultProps = {
  checked: false,
  name: "switch-toggle",
};

Switch.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.object,
  name: PropTypes.string,
  onChange: PropTypes.func,
};
