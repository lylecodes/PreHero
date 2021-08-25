import React from "react";

import { data } from "../data";
import MenuItem from "./MenuItem";

const EnduranceIngredientItemsList = () => {
  const [EnduranceData] = data.filter((el) => {
    return el.category === "Endurance";
  });
  const EnduranceCategoryTitle = EnduranceData.category;
  const EnduranceIngredients = EnduranceData.ingredients;

  const EnduranceIngredientsList = EnduranceIngredients.map((item, index) => (
    <MenuItem key={index} id={index} name={item} />
  ));

  return (
    <div>
      <h1>{EnduranceCategoryTitle}</h1>
      <ul>{EnduranceIngredientsList}</ul>
    </div>
  );
};

export default EnduranceIngredientItemsList;
