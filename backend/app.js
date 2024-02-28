import express from "express";
import cors from "cors";
import DBQueries from "./Classes/DBQueries.js";
import PostRouter from "./Routes/PostAPI.js";
import path from "path";
import { fileURLToPath } from "url";

import { config } from "dotenv";
import { PORT } from "./config.js";

const app = express();

const env = config()

app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/health", (request, response) => {
  response.status(200).send()
});

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/posts", PostRouter);

export const db = new DBQueries();

db.createTable();

app.get('/', (req, res) => {})
// db.insertUser('admin-user@gmail.com', 'Admin@123')

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});
