import React from "react";
import Card from "../UI/Card";
import Menu from "./Menu";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

function AvailableMeals() {
  const pupusas = Menu[0].pupusas.map((pupusa) => (
    <MealItem
      key={pupusa.id}
      name={pupusa.name}
      description={pupusa.description}
      single_price={pupusa.single_price}
      price_for_3={pupusa.price_for_3}
    />
  ));

  return (
    <section className={classes.meals}>
      <h2>Signature Pupusas</h2>
      <Card>
        <ul>{pupusas}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
