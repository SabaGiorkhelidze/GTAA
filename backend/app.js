import express from "express";
import cors from "cors";
import DBQueries from "./Classes/DBQueries.js";
import PostRouter from "./Routes/PostAPI.js";
import path from "path";
import { fileURLToPath } from "url";
import { setPasswordHASH } from "./Middleware/Bcrypt.js";


const app = express();

app.use(express.json());
app.use(cors());
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use("/images", express.static(path.join(__dirname, "images")));
app.use('/posts', PostRouter)

export const db = new DBQueries("./database/PostDatabase.db", (error) => {
  if (error) return console.log(error.message);
  //   console.log("Database created");
});



// db.createTable();


// ____insert Post___
// db.insertPost(
//   "Post 4",
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


// _______Delete All Posts_________________
// db.deleteAllPosts((err) => {
//   if (err) {
//     console.error("Error deleting all posts:", err);
//   } else {
//     console.log("All posts have been successfully deleted");
//   }
// });

// db.deleteAllImages((err) => {
//     if (err) {
//       console.error("Error deleting all posts:", err);
//     } else {
//       console.log("All posts have been successfully deleted");
//     }
//   });


// db.insertUser('admin-user@gmail.com', 'Admin@123')

app.get("/", (request, response) => {
  
});

setPasswordHASH()

app.listen(8080, () => {
  console.log(`App is listening to port: 8080`);
});
