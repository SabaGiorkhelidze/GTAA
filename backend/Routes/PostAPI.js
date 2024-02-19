import express from "express";
import { db } from "../app.js";
import { upload } from "../Middleware/Multer.js";
import bcrypt from 'bcrypt'

const PostRouter = express.Router();

PostRouter.get("/", async (request, response) => {
  try {
    const allPost = await db.selectAll();
    return response.status(200).send({ data: allPost });
  } catch (err) {
    console.log(err.message);
    return response.status(500).send({ error: err.message });
  }
});

PostRouter.get("/:id", async (request, response) => {
  const id = parseInt(request.params.id);
  try {
    if (!id) {
      return response.status(500).send({ error: "Server error, invalid ID" });
    }

    const postByID = await db.selectByID(id);
    // console.log(postByID)
    const images = await db.selectImagesByPostID(id);
    const postDataWithImages = { post: postByID, images: images };
    return response.status(200).send({ data: postDataWithImages });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ error: error.message });
  }
});


const backendURL = 'http://localhost:8080'


PostRouter.post("/", upload.array('image', 10), async (request, response) => {
  try {
    const { title, date, content } = request.body;
    const imagePaths = request.files.map(file => `${backendURL}/${file.path}`);
    // console.log(imagePaths)

    await db.insertPost(title, content, date, imagePaths);

    response
      .status(201)
      .json({ message: "Post Uploaded in database succesfully" });
  } catch (error) {
    console.error("Error creating post:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});


PostRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await db.getUserByEmail(email);
    // !user || user.email
    if ('admin' !== email) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (passwordMatches) {
      return res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default PostRouter;
