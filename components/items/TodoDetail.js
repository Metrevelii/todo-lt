import { Fragment } from "react";


function TodoDetail(props) {
  return (
    <Fragment>
      <section className="text-center">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </section>
    </Fragment>
  );
}

export default TodoDetail;
