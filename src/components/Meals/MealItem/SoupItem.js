import React from "react";
import classes from "./MealItem.module.css";

const SoupItem = (props) => {
  const cupPrice = `$${props.price_per_cup.toFixed(2)}`;
  const bowlPrice = `$${props.price_per_bowl.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price_box}>
          <div className={classes.price_single}>{cupPrice}/cup</div>

          <div className={classes.price_triple}>{bowlPrice}/bowl</div>
        </div>
      </div>
      <div></div>
    </li>
  );
};

export default SoupItem;
