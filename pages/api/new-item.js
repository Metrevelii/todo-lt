import { MongoClient } from "mongodb";

async function handler(req, res) {
  //request object contains data about incoming request
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://metreveli33:Metrevel1@cluster0.0ma5ck6.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db();

    const listCollection = db.collection("todolist");

    const result = await listCollection.insertOne(data);

    console.log(result);

    client.close();

    // 201 status code = something was inserted successfully
    res.status(201).json({ message: 'Item inserted!' });
  }

  // response object will be needed to send back response
}

export default handler;
