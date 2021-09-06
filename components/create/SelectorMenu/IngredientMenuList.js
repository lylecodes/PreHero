import { Fragment, useState } from "react";

import classes from "./SelectorMenu.module.css";
import MenuItem from "../OverviewMenu/MenuItem";

const IngredientMenuList = (props) => {
  const [showList, setShowList] = useState(false);

  const showListHandler = () => {};

  const ingredients = props.ingredients.map((item, index) => {
    return <MenuItem name={item.name} />;
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
