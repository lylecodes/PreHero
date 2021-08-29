import { Fragment } from "react";

import { data } from "../data";
import MenuItem from "./MenuItem";
import classes from "./IngredientDropdownMenu.module.css";

const CategoryItemsList = (props) => {
  const sendSetMenu = (newMenu) => {
    props.setMenu(newMenu);
  };

  const categoryList = data.map((item, index) => (
    <MenuItem
      key={index}
      id={index}
      category={item.category}
      sendMenu={sendSetMenu}
    />
  ));

  return (
    <div className={classes.listContainer}>
      <h1 className={classes.menuItem}>Categories</h1>
      <ul className={classes.list}>{categoryList}</ul>
    </div>
  );
};

export default CategoryItemsList;
