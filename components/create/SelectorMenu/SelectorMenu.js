import { SelectorContextProvider } from "../../../store/selector-context";
import CategoryNavMenu from "./CategoryNavMenu";
import IngredientMenu from "./IngredientMenu";
import classes from "./SelectorMenu.module.css";

const SelectorMenu = () => {
  return (
    <div className={classes.selectorMenu}>
      Select
      <SelectorContextProvider>
        <CategoryNavMenu />
        <IngredientMenu />
      </SelectorContextProvider>
    </div>
  );
};

export default SelectorMenu;
