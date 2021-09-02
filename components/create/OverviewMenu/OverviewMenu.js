import { useState, useRef, useEffect } from "react";

import classes from "./OverviewMenu.module.css";
import CategoryItemsList from "./CategoryItemsList";

const OverviewMenu = () => {
  return (
    <div className={classes.dropdown}>
      <CategoryItemsList />
    </div>
  );
};

export default OverviewMenu;
