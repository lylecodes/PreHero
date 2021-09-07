import { Fragment, useState, useEffect, useRef } from "react";

import { selectedData } from "../data";
import IngredientsList from "./IngredientsList";
import MenuItem from "./MenuItem";
import classes from "./OverviewMenu.module.css";

const CategoryItemsList = () => {
  const categoryList = selectedData.map((item, index) => (
    <Fragment>
      {/* <MenuItem
        key={index * Math.random()}
        id={index * Math.random()}
        name={item.category}
      /> */}
      <IngredientsList
        category={item.category}
        ingredientItems={item.ingredients}
      />
    </Fragment>
  ));

  return (
    <div className={classes.listContainer}>
      <h1 className={classes.menuItem}>Overview</h1>
      <ul className={classes.list}>{categoryList}</ul>
    </div>
  );
};

export default CategoryItemsList;
