import { newData } from "../data";
import IngredientMenuList from "./IngredientMenuList";
import classes from "./SelectorMenu.module.css";

const IngredientMenu = () => {
  const ingredientLists = newData.map((item, index) => {
    return (
      <IngredientMenuList
        category={item.category}
        ingredients={item.ingredients}
      />
    );
  });

  return (
    <div className={classes.ingredientMenu}>
      Ingredient Menu
      {ingredientLists}
    </div>
  );
};

export default IngredientMenu;
