import express from "express";
import cors from "cors";
import DBQueries from "./Classes/DBQueries.js";

const app = express();

app.use(express.json());
app.use(cors());

const db = new DBQueries("./database/Post.db", (error) => {
  if (error) return console.log(error.message);
  //   console.log("Database created");
});

// db.createTable();
// db.insertPost("Post 1", 'lorem ipsum', `${Date.now()}`)

app.get("/", (request, response) => {
  db.selectAll((err, allPost) => {
    if (err) {
      return response.status(500).send({ error: "Error retrieving data" });
    }
    return response.status(200).send({ data: allPost });
  });
});

app.listen(8080, () => {
  console.log(`App is listening to port: 8080`);
});
