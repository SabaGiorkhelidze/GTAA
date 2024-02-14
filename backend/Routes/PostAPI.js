import express from "express";
import { db } from "../app.js";
import { upload } from "../Middleware/Multer.js";
import bcrypt from 'bcrypt'

const PostRouter = express.Router();

PostRouter.get("/", async (request, response) => {
  try {
    db.selectAll((err, allPost) => {
      if (err) {
        return response.status(500).send({ error: "Error retrieving data" });
      }
      return response.status(200).send({ data: allPost });
    });
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

    db.selectByID(id, async (err, postByID) => {
      if (err) {
        return response
          .status(500)
          .send({ error: "Error retrieving data by id" });
      } else {
        db.selectImagesByPostID(id, (err, images) => {
          if (err) {
            return response
              .status(500)
              .send({ error: "Error retrieving images by post ID" });
          } else {
            const postDataWithImages = { post: postByID, images: images };
            return response.status(200).send({ data: postDataWithImages });
          }
        });
      }
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ error: error.message });
  }
});


const backendURL = 'http://localhost:8080'


PostRouter.post("/", upload.array('image', 10), async (request, response) => {
  try {
    // console.log(request.files);
    // console.log(request.body);

    const { title, date, content } = request.body;
    const imagePaths = request.files.map(file => `${backendURL}/${file.path}`);
    console.log(imagePaths)

    db.insertPost(title, content, date, imagePaths, db.insertImageByPostID);



    response
      .status(201)
      .json({ message: "Post Uploaded in database succesfully" });
  } catch (error) {
    console.error("Error creating post:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

PostRouter.post("/login", async (req, res) => {
  // console.log(req.body)
  try {
    const { email, password } = req.body;
    // console.log(email, password)

    db.getUserByEmail(email, async (err, user) => {
      if (err) {
        console.error("Error getting user by email:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      if (!user || user.email !== email) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const passwordMatches = await bcrypt.compare(password, user.password);

      if (passwordMatches) {
        return res.status(200).json({ message: "Login successful" });
      } else {
        return res.status(401).json({ message: "Unauthorized" });
      }
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default PostRouter;
