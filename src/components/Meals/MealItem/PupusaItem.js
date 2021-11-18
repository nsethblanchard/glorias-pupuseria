import React from "react";
import classes from "./MealItem.module.css";

const PupusaItem = (props) => {
  const singlePrice = `$${props.single_price.toFixed(2)}`;
  const triplePrice = `$${props.price_for_3.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price_box}>
          <div className={classes.price_single}>{singlePrice}/single</div>

          <div className={classes.price_triple}>{triplePrice}/for three</div>
        </div>
      </div>
      <div></div>
    </li>
  );
};

export default PupusaItem;
