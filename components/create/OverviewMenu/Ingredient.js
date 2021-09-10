import classes from "./OverviewMenu.module.css";

const Ingredient = (props) => {
  return <li className={classes.ingredient}>{props.name}</li>;
};

export default Ingredient;
