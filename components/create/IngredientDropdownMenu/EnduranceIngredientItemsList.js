import React from "react";

import { data } from "../data";
import MenuItem from "./MenuItem";
import classes from "./IngredientDropdownMenu.module.css";

const EnduranceIngredientItemsList = (props) => {
  const [enduranceData] = data.filter((el) => {
    return el.category === "Endurance";
  });

  const sendSetMenu = (newMenu) => {
    props.setMenu(newMenu);
  };

  const enduranceCategoryTitle = enduranceData.category;
  const enduranceIngredients = enduranceData.ingredients;

  const enduranceIngredientsList = enduranceIngredients.map((item, index) => (
    <MenuItem key={index} id={index} name={item} />
  ));

  return (
    <div className={classes.listContainer}>
      <h1 className={classes.menuItem} onClick={() => sendSetMenu("main")}>
        {enduranceCategoryTitle}
      </h1>
      <ul className={classes.list}>{enduranceIngredientsList}</ul>
    </div>
  );
};

export default EnduranceIngredientItemsList;
