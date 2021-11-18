import React from "react";
import Card from "../UI/Card";
import Menu from "./Menu";
import PupusaItem from "./MealItem/PupusaItem";
import DishItem from "./MealItem/DishItem";
import SoupItem from "./MealItem/SoupItem";
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

  const kidMeal = Menu[0].kids_meals.map((dish) => (
    <DishItem
      key={dish.id}
      name={dish.name}
      description={dish.description}
      price={dish.price}
    />
  ));

  const sides = Menu[0].sides.map((dish) => (
    <DishItem key={dish.id} name={dish.name} price={dish.price} />
  ));

  const houseDrinks = Menu[0].house_drinks.map((dish) => (
    <DishItem
      key={dish.id}
      name={dish.name}
      description={dish.description}
      price={dish.price}
    />
  ));

  const drinks = Menu[0].other_drinks.map((dish) => (
    <DishItem key={dish.id} name={dish.name} price={dish.price} />
  ));

  const soups = Menu[0].soups.map((soup) => (
    <SoupItem
      key={soup.id}
      name={soup.name}
      description={soup.description}
      price_per_cup={soup.price_per_cup}
      price_per_bowl={soup.price_per_bowl}
    />
  ));

  const desserts = Menu[0].desserts.map((dish) => (
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

      <h2>Meals for the Kiddos</h2>
      <Card>
        <ul>{kidMeal}</ul>
      </Card>

      <h2>Sides To Enjoy</h2>
      <Card>
        <ul>{sides}</ul>
      </Card>

      <h2>House Drinks</h2>
      <Card>
        <ul>{houseDrinks}</ul>
      </Card>

      <h2>More Drinks</h2>
      <Card>
        <ul>{drinks}</ul>
      </Card>

      <h2>Soup</h2>
      <Card>
        <ul>{soups}</ul>
      </Card>

      <h2>Desserts</h2>
      <Card>
        <ul>{desserts}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
