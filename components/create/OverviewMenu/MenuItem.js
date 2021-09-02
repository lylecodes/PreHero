import classes from "./OverviewMenu.module.css";

const MenuItem = (props) => {
  const displayedName = props.category || props.name;

  const sendMenuHandler = () => {
    props.sendMenu(displayedName.toLowerCase());
  };

  return (
    <div className={classes.menuItemContainer}>
      <li className={classes.menuItem} onClick={sendMenuHandler}>
        <h2 className={classes.menuItemName}>{displayedName}</h2>
      </li>
    </div>
  );
};

export default MenuItem;
