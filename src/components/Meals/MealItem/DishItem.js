import React from "react";
import classes from "./MealItem.module.css";

const DishItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        {props.description && (
          <div className={classes.description}>{props.description}</div>
        )}
        <div className={classes.price_box}>
          <div className={classes.price_single}>{price}</div>
        </div>
      </div>
      <div></div>
    </li>
  );
};

export default DishItem;
