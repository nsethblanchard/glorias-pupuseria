import React from "react";
import Menu from "./Menu";
import classes from "./AvailableMeals.module.css";

function AvailableMeals() {
  const pupusas = Menu[0].pupusas.map((pupusa) => <li>{pupusa.name}</li>);

  return (
    <section className={classes.meals}>
      <h2>Signature Pupusas</h2>
      <ul>{pupusas}</ul>
    </section>
  );
}

export default AvailableMeals;
