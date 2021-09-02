import React from "react";

import { data } from "../data";
import MenuItem from "./MenuItem";
import classes from "./IngredientDropdownMenu.module.css";

const PumpIngredientItemsList = (props) => {
  const [pumpData] = data.filter((el) => {
    return el.category === "Pump";
  });

  const sendSetMenu = (newMenu) => {
    props.setMenu(newMenu);
  };

  const pumpCategoryTitle = pumpData.category;
  const pumpIngredients = pumpData.ingredients;

  const pumpIngredientsList = pumpIngredients.map((item, index) => (
    <MenuItem key={index} id={index} name={item} sendMenu={sendSetMenu} />
  ));

  return (
    <div className={classes.listContainer}>
      <h1 className={classes.menuItem} onClick={() => sendSetMenu("main")}>
        {pumpCategoryTitle}
      </h1>
      <ul className={classes.list}>{pumpIngredientsList}</ul>
    </div>
  );
};

export default PumpIngredientItemsList;
