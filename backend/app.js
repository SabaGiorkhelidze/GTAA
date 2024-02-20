import express from "express";
import cors from "cors";
import DBQueries from "./Classes/DBQueries.js";
import PostRouter from "./Routes/PostAPI.js";
import path from "path";
import { fileURLToPath } from "url";
import { setPasswordHASH } from "./Middleware/Bcrypt.js";
import { Client } from "minio";
const app = express();

app.use(express.json());
app.use(cors());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/posts", PostRouter);

export const db = new DBQueries();

// db.createTable();

app.get("/", (request, response) => {});

// setPasswordHASH();

// db.deleteAllPosts()

const client = new Client({
  useSSL: false,
  endPoint: "localhost",
  port: 9000,
  // endPoint: 'localhost:9001',
  accessKey: "dev",
  secretKey: "password123",
});

try {
  const buckets = await client.listBuckets()
  console.log('Success', buckets)
} catch (err) {
  console.log(err.message)
}

app.listen(8080, () => {
  console.log(`App is listening to port: 8080`);
});
