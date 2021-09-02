import { Fragment, useState } from "react";

import MenuItem from "./MenuItem";

const IngredientsList = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const ingredientItems = props.ingredientItems.map((item, index) => {
    return <MenuItem name={item} />;
  });

  return (
    <Fragment>
      <button onClick={() => setShowMenu(!showMenu)}>Show Menu</button>
      {showMenu && <ul>{ingredientItems}</ul>}
    </Fragment>
  );
};

export default IngredientsList;
