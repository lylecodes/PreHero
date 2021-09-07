import classes from "./OverviewMenu.module.css";

const MenuItem = (props) => {
  const displayedName = props.name;

  return (
    <div className={classes.menuItemContainer}>
      <li className={classes.menuItem}>
        <h5 className={classes.menuItemName}>{displayedName}</h5>
      </li>
    </div>
  );
};

export default MenuItem;
