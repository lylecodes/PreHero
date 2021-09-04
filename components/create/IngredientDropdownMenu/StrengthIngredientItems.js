import { newData } from "../data";
import MenuItem from "./MenuItem";
import classes from "./IngredientDropdownMenu.module.css";

const StrengthIngredientItems = (props) => {
  const sendSetMenu = (newMenu) => {
    props.setMenu(newMenu);
  };

  const strengthDataObjArray = newData.filter((item) => {
    return item.category === "Strength";
  });

  const [strengthDataObj] = strengthDataObjArray;
  const strengthDataIngredientsObjArray = strengthDataObj.ingredients;
  const strengthDataIngredientTitle = strengthDataIngredientsObjArray.category;
  const strengthDataIngredientObj = strengthDataIngredientsObjArray.map(
    (ingredient, index) => {
      return (
        <MenuItem
          key={index}
          id={index}
          name={ingredient.name}
          description={ingredient.description}
          sendMenu={sendSetMenu}
        />
      );
    }
  );

  return (
    <div className={classes.listContainer}>
      <h1>{strengthDataIngredientTitle}</h1>
      <ul className={classes.list}>{strengthDataIngredientObj}</ul>
    </div>
  );
};

export default StrengthIngredientItems;
