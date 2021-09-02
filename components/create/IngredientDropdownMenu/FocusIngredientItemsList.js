import React from "react";

import { data } from "../data";
import MenuItem from "./MenuItem";
import classes from "./IngredientDropdownMenu.module.css";

const FocusIngredientItemsList = (props) => {
  const [focusData] = data.filter((el) => {
    return el.category === "Focus";
  });

  const sendSetMenu = (newMenu) => {
    props.setMenu(newMenu);
  };

  const focusCategoryTitle = focusData.category;
  const focusIngredients = focusData.ingredients;

  const focusIngredientsList = focusIngredients.map((item, index) => (
    <MenuItem key={index} id={index} name={item} sendMenu={sendSetMenu} />
  ));

  return (
    <div className={classes.listContainer}>
      <h1 className={classes.menuItem} onClick={() => sendSetMenu("main")}>
        {focusCategoryTitle}
      </h1>
      <ul className={classes.list}>{focusIngredientsList}</ul>
    </div>
  );
};

export default FocusIngredientItemsList;
