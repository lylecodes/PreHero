import React from "react";

import { data } from "../data";
import MenuItem from "./MenuItem";

const PumpIngredientItemsList = () => {
  const [PumpData] = data.filter((el) => {
    return el.category === "Pump";
  });

  const PumpCategoryTitle = PumpData.category;
  const PumpIngredients = PumpData.ingredients;

  const PumpIngredientsList = PumpIngredients.map((item, index) => (
    <MenuItem key={index} id={index} name={item} />
  ));

  return (
    <div>
      <h1>{PumpCategoryTitle}</h1>
      <ul>{PumpIngredientsList}</ul>
    </div>
  );
};

export default PumpIngredientItemsList;
