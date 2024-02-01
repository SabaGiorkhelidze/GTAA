import express from "express";
import cors from "cors";
import DBQueries from "./Classes/DBQueries.js";
import PostRouter from "./Routes/PostAPI.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use('/posts', PostRouter)

export const db = new DBQueries("./database/Post.db", (error) => {
  if (error) return console.log(error.message);
  //   console.log("Database created");
});



// db.createTable();

// ____insert Post___
// db.insertPost(
//   "Post 3",
//   "lorem ipsum",
//   `${new Date(new Date().getTime()).toISOString()}`
// );


// ____SELECT ALL POST______
// db.selectAll((err, allPost) => {
//   if (err) {
//     return response.status(500).send({ error: "Error retrieving data" });
//   }
//   return response.status(200).send({ data: allPost });
// });


// _____Select BY ID_____
// db.selectByID(3, (err, postByID) => {
//   if (err) {
//     return response.status(500).send({ error: "Error retrieving data" });
//   }
//   return response.status(200).send({ data: postByID });
// });
app.get("/", (request, response) => {
  
});

app.listen(8080, () => {
  console.log(`App is listening to port: 8080`);
});
