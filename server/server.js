const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

const MongoClient = require("mongodb").MongoClient;
const createRouter = "./helpers.create_router.js";

MongoClient.connect(
  process.env.MONGODB_URL,

  {
    useUnifiedTopology: true,
  }
)
  .then((client) => {
    const db = client.db("puppies");
    const basketcollection = db.collection("basket");
    const basketRouter = createRouter(basketcollection);
    console.log("client created");
    app.use("api/basket", basketRouter);
  })
  .catch((error) => {
    console.log("in catch block");
    console.error("the error is: ", error);
  });
const hostname = "0.0.0.0";
const port = process.env.port || 3000;

app.listen(port, hostname, () => {
  console.log(`The server is running on http://${hostname}:${port}/`);
});
