import express from "express";
import cors from "cors";
import DBQueries from "./Classes/DBQueries.js";
import PostRouter from "./Routes/PostAPI.js";
import path from "path";
import { fileURLToPath } from "url";


const app = express();

app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/posts", PostRouter);

export const db = new DBQueries();

db.createTable();

app.get("/", (request, response) => {});

// db.insertUser('admin-user@gmail.com', 'Admin@123')

app.listen(8080, () => {
  console.log(`App is listening to port: 8080`);
});
