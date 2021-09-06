import MenuItem from "../OverviewMenu/MenuItem";

const IngredientMenuList = (props) => {
  const ingredients = props.ingredients.map((item, index) => {
    return <MenuItem name={item.name} />;
  });

  return <ul>{ingredients}</ul>;
};

export default IngredientMenuList;
