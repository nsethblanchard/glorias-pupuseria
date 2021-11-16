import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>
        To Order, call us at (540) 487-2428 or online <link>here.</link>
      </h2>
      <p>
        Gloria's Pupuseria has been serving authentic Salvadoran-style food in
        Staunton, Virginia since 2013. We like to think of our food as an
        upscale version of the most authentic dishes native to the country of El
        Salvador. We prepare everything in house and make ever dish to order. We
        source our ingredients as local as possible in order to bring you the
        best quality dishes that Gloria learned to create while helping in her
        mother's Pupuseria in El Salvador.
      </p>
      <p>
        <bold>Pupusas: Our Signature Dish!</bold> The quintessential dish of El
        Salvador. A pupusa is a traditional handmade corn tortilla filled with
        different ingredients and served with curtido and salsa. This dish dates
        back to the Mesoamerican tribes of Central America. Suggested serving
        size is 2-3 pupusas per person.
      </p>
    </section>
  );
};

export default MealsSummary;
