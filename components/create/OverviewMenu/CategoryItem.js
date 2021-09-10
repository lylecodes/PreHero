import { useState } from "react";

import Ingredient from "./Ingredient";
import classes from "./OverviewMenu.module.css";

const CategoryItem = (props) => {
  const [showIngredients, setShowIngredients] = useState(false);

  const ingredients = props.ingredients.map((ingredient) => {
    return <Ingredient name={ingredient.name} />;
  });
  return (
    <div className={classes.categorySection}>
      <h4
        className={classes.categoryItem}
        onClick={() => setShowIngredients(!showIngredients)}
      >
        {props.name}
      </h4>
      {showIngredients && (
        <ul className={classes.ingredientsList}>{ingredients}</ul>
      )}
    </div>
  );
};

export default CategoryItem;
