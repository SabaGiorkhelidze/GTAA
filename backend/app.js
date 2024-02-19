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
app.use("/posts", PostRouter);

// Initialize DBQueries with PostgreSQL parameters
export const db = new DBQueries();

// Call createTable method to create tables upon initialization
// db.createTable();

app.get("/", (request, response) => {
  // Your root route logic here
});

// Ensure setPasswordHASH() is called after DBQueries initialization
setPasswordHASH();

app.listen(8080, () => {
  console.log(`App is listening to port: 8080`);
});
