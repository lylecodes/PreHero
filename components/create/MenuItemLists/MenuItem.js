import React from "react";

const MenuItem = (props) => {
  return (
    <li>
      <div>
        <h2>{props.category}</h2>
      </div>
    </li>
  );
};

export default MenuItem;
