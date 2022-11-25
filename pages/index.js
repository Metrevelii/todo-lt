import { MongoClient } from 'mongodb';

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
    const client = await MongoClient.connect(
      "mongodb+srv://metreveli33:Metrevel1@cluster0.0ma5ck6.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db();

    const listCollection = db.collection("todolist");

    const todoItems = await listCollection.find().toArray();


    // Getting data through props.
    return {
        props: {
            todoitems: todoItems.map(item => ({
              title: item.title,
              id: item._id.toString(),
            }))
        },
        revalidate: 1
    };
}

export default HomePage;
