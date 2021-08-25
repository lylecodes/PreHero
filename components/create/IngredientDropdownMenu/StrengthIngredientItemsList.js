import React from "react";
import { data } from "../data";
import MenuItem from "./MenuItem";

const StrengthIngredientItemsList = () => {
  const [strengthData] = data.filter((el) => {
    return el.category === "Strength";
  });
  const strengthCategoryTitle = strengthData.category;
  const strengthIngredients = strengthData.ingredients;

  const strengthIngredientsList = strengthIngredients.map((item, index) => (
    <MenuItem key={index} id={index} name={item} />
  ));

  return (
    <div>
      <h1>{strengthCategoryTitle}</h1>
      <ul>{strengthIngredientsList}</ul>
    </div>
  );
};

export default StrengthIngredientItemsList;
