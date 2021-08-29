import React from "react";

import classes from "./IngredientDropdownMenu.module.css";

const MenuItem = (props) => {
  const displayedName = props.category || props.name;

  return (
    <li
      className={classes.menuItem}
      onClick={() => props.sendMenu(displayedName.toLowerCase())}
    >
      <span className={classes.iconButton}>{props.leftIcon}</span>
      <h2>{displayedName}</h2>
      <span className={classes.iconRight}>{props.rightIcon}</span>
    </li>
  );
};

export default MenuItem;
