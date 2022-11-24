import { Fragment } from "react";
import classes from "./TodoDetail.module.css";

function TodoDetail(props) {
  return (
    <Fragment>
      <section className={classes.detail}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </section>
    </Fragment>
  );
}

export default TodoDetail;
