import React from "react";
import Card from "../UI/Card";
import Menu from "./Menu";
import PupusaItem from "./MealItem/PupusaItem";
import DishItem from "./MealItem/DishItem";
import classes from "./AvailableMeals.module.css";

function AvailableMeals() {
  const pupusas = Menu[0].pupusas.map((pupusa) => (
    <PupusaItem
      key={pupusa.id}
      name={pupusa.name}
      description={pupusa.description}
      single_price={pupusa.single_price}
      price_for_3={pupusa.price_for_3}
    />
  ));

  const salvDishes = Menu[0].other_salv_dishes.map((dish) => (
    <DishItem
      key={dish.id}
      name={dish.name}
      description={dish.description}
      price={dish.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <h2>Signature Pupusas</h2>
      <Card>
        <ul>{pupusas}</ul>
      </Card>
      <h2>Other Popular Salvadoran Dishes</h2>
      <Card>
        <ul>{salvDishes}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
