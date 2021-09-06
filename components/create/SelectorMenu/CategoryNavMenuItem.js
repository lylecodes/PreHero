import classes from "./SelectorMenu.module.css";

const CategoryNavMenuItem = (props) => {
  return <div className={classes.categoryNavMenuItem}>{props.name}</div>;
};

export default CategoryNavMenuItem;
