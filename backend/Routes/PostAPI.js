import express from "express";
import { db } from "../app.js";
// import 'fs'
import path from "path";
import multer from "multer";

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

// const storage = multer.diskStorage({
//   destination: "C:\\Users\\Saba\\Desktop\\GTAA\\backend\\Images",
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}--${file.name}`);
//   },
// })

// const upload = multer({ dest: 'C:\\Users\\Saba\\Desktop\\GTAA\\backend\\Images' })

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/assets");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// const upload = multer({ storage: storage });
const upload = multer({ dest: 'images/' })

// const upload = multer({ dest: 'Images/' });

PostRouter.post("/", upload.array('image', 10), async (request, response) => {
  try {
    // console.log(request.files);
    console.log(request.body);

    const { title, date, content } = request.body;

    db.insertPost(title, content, date);

    response
      .status(201)
      .json({ message: "Post Uploaded in database succesfully" });
  } catch (error) {
    console.error("Error creating post:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

export default PostRouter;
