import Styles from "../styles/components/Grid.module.css";
import ItemStyles from "../styles/components/GridItem.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";

const ITEM_COLUMN_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const ITEM_ORDER_VALUES = ["start", "end", "reset"];

export default function Grid({ children, className, gap, ...rest }) {
  const gridClasses = classNames(
    Styles.grid,
    {
      [Styles[`gap${gap}`]]: gap,
    },
    className
  );

  return (
    <div className={gridClasses} {...rest}>
      {children}
    </div>
  );
}

function getClasses(propName, propData, capitalize = false) {
  let classes = [];

  if (propData) {
    for (const [key, value] of Object.entries(propData)) {
      const finalValue = capitalize
        ? `${value.charAt(0).toUpperCase()}${value.slice(1)}`
        : value;
      classes.push(`${ItemStyles[`${propName}${finalValue}-${key}`]}`);
    }

    return classes.join(" ");
  }
}

function Item({ children, colSpan, colStart, order, ...rest }) {
  const colSpanDefaults = { base: 12 };
  const mergedColSpan = { ...colSpanDefaults, ...colSpan };

  const colSpanClassName = getClasses("span", mergedColSpan);
  const colStartClassName = getClasses("start", colStart);
  const orderClassName = getClasses("order", order, true);

  const itemClasses = classNames(Styles.item, {
    [colSpanClassName]: colSpanClassName,
    [colStartClassName]: colStartClassName,
    [orderClassName]: orderClassName,
  });

  return (
    <div className={itemClasses} {...rest}>
      {children}
    </div>
  );
}

Grid.Item = Item;

Grid.propTypes = {
  children: PropTypes.node,
  gap: PropTypes.number,
};

Grid.defaultProps = {
  gap: 2,
};

Item.propTypes = {
  children: PropTypes.node,
  colSpan: PropTypes.shape({
    base: PropTypes.oneOf(ITEM_COLUMN_VALUES),
    sm: PropTypes.oneOf(ITEM_COLUMN_VALUES),
    md: PropTypes.oneOf(ITEM_COLUMN_VALUES),
    lg: PropTypes.oneOf(ITEM_COLUMN_VALUES),
  }),
  colStart: PropTypes.shape({
    base: PropTypes.oneOf(ITEM_COLUMN_VALUES),
    sm: PropTypes.oneOf(ITEM_COLUMN_VALUES),
    md: PropTypes.oneOf(ITEM_COLUMN_VALUES),
    lg: PropTypes.oneOf(ITEM_COLUMN_VALUES),
  }),
  order: PropTypes.shape({
    sm: PropTypes.oneOf(ITEM_ORDER_VALUES),
    md: PropTypes.oneOf(ITEM_ORDER_VALUES),
    lg: PropTypes.oneOf(ITEM_ORDER_VALUES),
  }),
};
