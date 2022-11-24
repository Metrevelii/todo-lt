import TodoList from "../components/items/TodoList";

const DUMMY_LIST = [
  {
    id: "m1",
    title: "A First Item",
    description: "Some new todo list description",
  },
  {
    id: "m2",
    title: "A Second Item",
    description: "Some new todo list description",
  },
];

function HomePage(props) {
  return <TodoList todos={props.todoitems} />;
}

export async function getStaticProps() {
    // fetch data from an API or DB
    // Getting data through props.
    return {
        props: {
            todoitems: DUMMY_LIST
        },
        revalidate: 1
    };
}

export default HomePage;
