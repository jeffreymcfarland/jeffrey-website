import PropTypes from "prop-types";
import classNames from "classnames";

import Styles from "../styles/components/Logo.module.css";

const LOGO_COLOR_VALUES = ["primary", "alternate"];
const LOGO_SIZE_VALUES = ["sm", "md", "lg"];

export default function Logo({ color, size }) {
  const logoClasses = classNames(Styles.svg, {
    [Styles[size]]: size !== "md",
  });

  return (
    <svg
      width="33"
      height="34"
      viewBox="0 0 33 34"
      xmlns="http://www.w3.org/2000/svg"
      className={logoClasses}
    >
      <path
        fill={`url(#path_${color})`}
        fillRule="evenodd"
        d="M8.64 5.868c-1.248 0-2.16-.228-2.736-.684-.552-.48-.828-1.224-.828-2.232 0-1.032.276-1.776.828-2.232C6.48.24 7.392 0 8.64 0c1.224 0 2.124.24 2.7.72.576.456.864 1.2.864 2.232 0 1.008-.288 1.752-.864 2.232-.576.456-1.476.684-2.7.684Zm3.06 2.088v19.008c0 1.632-.288 2.94-.864 3.924a4.766 4.766 0 0 1-2.376 2.124c-1.032.456-2.28.684-3.744.684-.96 0-1.836-.108-2.628-.324C1.296 33.18.6 32.904 0 32.544l.864-3.96c.264.192.588.348.972.468.384.144.828.216 1.332.216.72 0 1.296-.216 1.728-.648.456-.408.684-1.14.684-2.196V7.956h6.12Z"
      />
      <path
        fill={`url(#path_${color})`}
        fillRule="evenodd"
        d="M6.012 23.956v-16h4.864l.16 3.104c.512-1.13 1.226-1.984 2.144-2.56.938-.576 2.016-.864 3.232-.864 1.194 0 2.23.267 3.104.8.874.533 1.525 1.323 1.952 2.368a5.51 5.51 0 0 1 1.312-1.76 5.668 5.668 0 0 1 1.888-1.056 6.836 6.836 0 0 1 2.176-.352c1.066 0 2.005.213 2.816.64.81.405 1.45 1.035 1.92 1.888.49.832.736 1.877.736 3.136v10.656h-5.44v-9.408c0-1.024-.203-1.739-.608-2.144-.384-.405-.907-.608-1.568-.608-.534 0-1.024.139-1.472.416-.427.256-.758.65-.992 1.184-.235.533-.352 1.205-.352 2.016v8.544h-5.44v-9.408c0-1.024-.203-1.739-.608-2.144-.406-.405-.928-.608-1.568-.608-.49 0-.96.128-1.408.384-.427.256-.768.661-1.024 1.216-.256.533-.384 1.237-.384 2.112v8.448h-5.44Z"
      />
      <defs>
        <linearGradient
          id={`path_${color}`}
          x1="5.5"
          y1="17"
          x2="36.5"
          y2="17"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={`var(--color-logo-${color}-1)`} />
          <stop offset="0.239583" stopColor={`var(--color-logo-${color}-2)`} />
          <stop offset="0.505208" stopColor={`var(--color-logo-${color}-3)`} />
          <stop offset="0.75" stopColor={`var(--color-logo-${color}-4)`} />
          <stop offset="0.979167" stopColor={`var(--color-logo-${color}-5)`} />
        </linearGradient>
      </defs>
    </svg>
  );
}

Logo.propTypes = {
  color: PropTypes.oneOf(LOGO_COLOR_VALUES),
  size: PropTypes.oneOf(LOGO_SIZE_VALUES),
};

Logo.defaultProps = {
  color: "primary",
  size: "md",
};
