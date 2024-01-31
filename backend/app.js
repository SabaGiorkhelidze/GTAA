import express from "express";
import cors from "cors";
// import pkg from "sqlite3";
import DBCommands from "./Classes/DBQueries.js";
// const { Database } = pkg;

const app = express();

app.use(express.json());
app.use(cors());

const db = new DBCommands("./database/Post.db", (error) => {
  if (error) return console.log(error.message);
  console.log("Database created");
});

db.createTable()

// Create 'posts' table
//   db.run(
//     `
//     CREATE TABLE IF NOT EXISTS posts (
//       id INTEGER PRIMARY KEY,
//       title TEXT,
//       content TEXT
//     )
//   `,
//     (err) => {
//       if (err) console.error(err.message);
//       else console.log('Table "posts" created');
//     }
//   );

//   // Create 'images' table with a foreign key referencing 'posts' table
//   db.run(
//     `
//     CREATE TABLE IF NOT EXISTS images (
//       id INTEGER PRIMARY KEY,
//       url TEXT,
//       post_id INTEGER,
//       FOREIGN KEY (post_id) REFERENCES posts(id)
//     )
//   `,
//     (err) => {
//       if (err) console.error(err.message);
//       else console.log('Table "images" created');
//     }
//   );
// });

app.get("/", (request, response) => {
  return response.status(200).send("Welcome To MERN Stack Tutorial");
});

app.listen(8080, () => {
  console.log(`App is listening to port: 8080`);
});
