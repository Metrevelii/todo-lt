import TodoDetail from "../../components/items/TodoDetail";

function TodoDetails() {
  return (
    <TodoDetail title={"First Item"} description={"This is a first item"} />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          todoId: "m1",
        },
      },
      {
        params: {
          todoId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const todoId = context.params.todoId;
  console.log(todoId);

  // fetch data for a single item
  return {
    props: {
      todoData: {
        id: todoId,
        title: "First Item",
        description: "Description of the first to do list item",
      },
    },
  };
}


export default TodoDetails;
