import React from "react";
import Card from "../UI/Card";
import Menu from "./Menu";
import classes from "./AvailableMeals.module.css";

function AvailableMeals() {
  const pupusas = Menu[0].pupusas.map((pupusa) => <li>{pupusa.name}</li>);

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
