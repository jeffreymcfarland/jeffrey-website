import Styles from "../styles/components/Grid.module.css";
import ItemStyles from "../styles/components/GridItem.module.css";

export default function Grid({ children, gap, ...rest }) {
  return (
    <div className={`${Styles.grid} ${Styles[`gap${gap}`]}`} {...rest}>
      {children}
    </div>
  );
}

function getClasses(propName, propData) {
  let classes = [];

  for (const [key, value] of Object.entries(propData)) {
    classes.push(`${ItemStyles[`${propName}${value}-${key}`]}`);
  }

  return classes.join(" ");
}

function Item({ children, colSpan, colStart, ...rest }) {
  const colSpanDefaults = { default: 12 };
  const colStartDefaults = { default: 1 };

  const mergedColSpan = { ...colSpanDefaults, ...colSpan };
  const mergedColStart = { ...colStartDefaults, ...colStart };

  const colSpanClassName = getClasses("span", mergedColSpan);
  const colStartClassName = getClasses("start", mergedColStart);

  return (
    <div className={`${colSpanClassName} ${colStartClassName}`} {...rest}>
      {children}
    </div>
  );
}

Grid.Item = Item;

Grid.defaultProps = {
  gap: 2,
};
