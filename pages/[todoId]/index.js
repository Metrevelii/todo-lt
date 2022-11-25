import { MongoClient, ObjectId } from "mongodb";
import TodoDetail from "../../components/items/TodoDetail";

function TodoDetails(props) {
  return (
    <TodoDetail title={props.todoData.title} description={props.todoData.description} />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://metreveli33:Metrevel1@cluster0.0ma5ck6.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();

  const listCollection = db.collection("todolist");

  const todolist = await listCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: todolist.map((item) => ({
      params: {
        todoId: item._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const todoId = context.params.todoId;
  const client = await MongoClient.connect(
    "mongodb+srv://metreveli33:Metrevel1@cluster0.0ma5ck6.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();

  const listCollection = db.collection("todolist");

  const selectedItem = await listCollection.findOne({_id: ObjectId(todoId)});

  client.close();

  // fetch data for a single item
  return {
    props: {
      todoData: {
        id: selectedItem._id.toString(),
        title: selectedItem.title,
        description: selectedItem.description
      },
    },
  };
}

export default TodoDetails;
