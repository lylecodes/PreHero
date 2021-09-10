import { useState, useRef, useEffect } from "react";

import { newData } from "../data";
import classes from "./OverviewMenu.module.css";
import CategoryItemsList from "./CategoryItemsList";
import CategoryItem from "./CategoryItem";

const OverviewMenu = () => {
  const categoryItems = newData.map((item) => {
    return <CategoryItem name={item.category} ingredients={item.ingredients} />;
  });

  return (
    <div className={classes.dropdown}>
      <div className={classes.categorySections}>{categoryItems}</div>
    </div>
  );
};

export default OverviewMenu;
