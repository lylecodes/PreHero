import classes from "./OverviewMenu.module.css";

const CategoryTitle = (props) => {
  const displayedName = props.name;

  return (
    <div className={classes.menuItemContainer} onClick={props.toggleList}>
      <h5 className={classes.menuItemName}>{displayedName}</h5>
    </div>
  );
};

export default CategoryTitle;
