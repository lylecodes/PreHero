import { Fragment } from "react";

import CategoryItemsList from "./CategoryItemsList";
import StrengthIngredientItemsList from "./StrengthIngredientItemsList";
import EnduranceIngredientItemsList from "./EnduranceIngredientItemsList";
import FocusIngredientItemsList from "./FocusIngredientItemsList";
import PumpIngredientItemsList from "./PumpIngredientItemsList";

const IngredientDropdownMenu = () => {
  return (
    <Fragment>
      <CategoryItemsList />
      <StrengthIngredientItemsList />
      <EnduranceIngredientItemsList />
      <FocusIngredientItemsList />
      <PumpIngredientItemsList />
    </Fragment>
  );
};

export default IngredientDropdownMenu;
