import React from "react";
import { data } from "../data";
import MenuItem from "./MenuItem";

const CategoryItemsList = () => {
  const categoryList = data.map((item, index) => (
    <MenuItem key={index} id={index} category={item.category} />
  ));

  return (
    <div>
      <h1>Categories</h1>
      <ul>{categoryList}</ul>
    </div>
  );
};

export default CategoryItemsList;
