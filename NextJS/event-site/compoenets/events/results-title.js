import Button from "./ui/button";
import classes from "./results-title.module.css";
import { Fragment } from "react";

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <Fragment>
      <section className={classes.title}>
        <h1>Events in {humanReadableDate}</h1>
      </section>
      <section className={classes.title}>
        <Button link="/events">Show all events</Button>
      </section>
    </Fragment>
  );
}

export default ResultsTitle;
