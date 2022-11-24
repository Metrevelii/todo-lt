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

function HomePage() {
  return <TodoList todos={DUMMY_LIST} />;
}

export default HomePage;
