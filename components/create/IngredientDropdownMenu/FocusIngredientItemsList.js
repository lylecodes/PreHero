import React from "react";

import { data } from "../data";
import MenuItem from "./MenuItem";

const FocusIngredientItemsList = () => {
  const [FocusData] = data.filter((el) => {
    return el.category === "Focus";
  });

  const FocusCategoryTitle = FocusData.category;
  const FocusIngredients = FocusData.ingredients;

  const FocusIngredientsList = FocusIngredients.map((item, index) => (
    <MenuItem key={index} id={index} name={item} />
  ));

  return (
    <div>
      <h1>{FocusCategoryTitle}</h1>
      <ul>{FocusIngredientsList}</ul>
    </div>
  );
};

export default FocusIngredientItemsList;
