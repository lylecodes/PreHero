import { data } from "../data";
import MenuItem from "./MenuItem";
import classes from "./IngredientDropdownMenu.module.css";

const CategoryItemList = (props) => {
  const sendSetMenu = (newMenu) => {
    props.setMenu(newMenu);
  };

  const categoryList = data.map((item, index) => (
    <MenuItem
      key={index}
      id={index}
      category={item.category}
      sendMenu={sendSetMenu}
    />
  ));

  return (
    <div className={classes.listContainer}>
      <h1 className={classes.menuItem}>
        Categories
        <span className={classes.iconButton}>{props.leftIcon}</span>
      </h1>

      <ul className={classes.list}>{categoryList}</ul>
    </div>
  );
};

export default CategoryItemList;
