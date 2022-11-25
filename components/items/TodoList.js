import TodoItem from "./TodoItem";


function TodoList(props) {
  return (
    <ul className="list-none m-0 p-p">
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} title={todo.title} />
      ))}
    </ul>
  );
}

export default TodoList;
