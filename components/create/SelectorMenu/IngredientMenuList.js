import { Fragment, useState } from "react";

import classes from "./SelectorMenu.module.css";
import IngredientMenuListItem from "./IngredientMenuListItem";

const IngredientMenuList = (props) => {
  const [showList, setShowList] = useState(false);

  const showListHandler = () => {
    setShowList(!showList);
  };

  const ingredients = props.ingredients.map((item, index) => {
    return <IngredientMenuListItem name={item.name} />;
  });

  return (
    <Fragment>
      {showList && (
        <ul className={classes.ingredientMenuList}>{ingredients}</ul>
      )}
    </Fragment>
  );
};

export default IngredientMenuList;
