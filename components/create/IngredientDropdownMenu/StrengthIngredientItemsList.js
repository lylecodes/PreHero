import React from "react";

import { data } from "../data";
import MenuItem from "./MenuItem";
import classes from "./IngredientDropdownMenu.module.css";

const StrengthIngredientItemsList = (props) => {
  const [strengthData] = data.filter((el) => {
    return el.category === "Strength";
  });

  const sendSetMenu = (newMenu) => {
    props.setMenu(newMenu);
  };

  const strengthCategoryTitle = strengthData.category;
  const strengthIngredients = strengthData.ingredients;

  const strengthIngredientsList = strengthIngredients.map((item, index) => (
    <MenuItem key={index} id={index} name={item} sendMenu={sendSetMenu} />
  ));

  return (
    <div className={classes.listContainer}>
      <h1 className={classes.menuItem} onClick={() => sendSetMenu("main")}>
        {strengthCategoryTitle}
      </h1>
      <ul className={classes.list}>{strengthIngredientsList}</ul>
    </div>
  );
};

export default StrengthIngredientItemsList;
