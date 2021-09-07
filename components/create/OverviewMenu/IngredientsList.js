import { Fragment, useState } from "react";
import CategoryTitle from "./CategoryTitle";

import MenuItem from "./MenuItem";

const IngredientsList = (props) => {
  const [showList, setShowList] = useState(false);

  const ingredientItems = props.ingredientItems.map((item, index) => {
    return <MenuItem name={item} />;
  });

  return (
    <Fragment>
      <CategoryTitle
        name={props.category}
        toggleList={() => setShowList(!showList)}
      />
      {showList && <ul>{ingredientItems}</ul>}
    </Fragment>
  );
};

export default IngredientsList;
