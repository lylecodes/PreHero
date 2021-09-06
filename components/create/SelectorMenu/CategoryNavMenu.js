import CategoryNavMenuItem from "./CategoryNavMenuItem";
import classes from "./SelectorMenu.module.css";

const CategoryNavMenu = () => {
  const menuNames = ["Strength", "Pump", "Focus", "Endurance"];

  const navMenuItems = menuNames.map((item, index) => {
    return <CategoryNavMenuItem key={index} name={item} />;
  });

  return <div className={classes.categoryNavMenu}>{navMenuItems}</div>;
};

export default CategoryNavMenu;
