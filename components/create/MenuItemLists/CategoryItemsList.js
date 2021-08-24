import React from "react";
import { categories } from "../data";
import MenuItem from "./MenuItem";

const categoryList = categories.map((item, index) => (
  <MenuItem key={index} id={index} category={item.category} />
));

const CategoryItemsList = () => {
  return (
    <div>
      <h1>Categories</h1>
      <ul>{categoryList}</ul>
    </div>
  );
};

export default CategoryItemsList;
