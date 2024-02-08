import express from "express";
import { db } from "../app.js";
// import 'fs'
import path from "path";
import { upload } from "../Middleware/Multer.js";
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

    db.selectByID(id, (err, postByID) => {
      if (err) {
        return response
          .status(500)
          .send({ error: "Error retrieving data by id" });
      } else {
        console.log(postByID);
        return response.status(200).send({ data: postByID });
      }
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ error: error.message });
  }
});




PostRouter.post("/", upload.array('image', 10), async (request, response) => {
  try {
    // console.log(request.files);
    // console.log(request.body);

    const { title, date, content } = request.body;
    const imagePaths = request.files.map(file => file.path);

    db.insertPost(title, content, date, imagePaths, db.insertImageByPostID);



    response
      .status(201)
      .json({ message: "Post Uploaded in database succesfully" });
  } catch (error) {
    console.error("Error creating post:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

export default PostRouter;
