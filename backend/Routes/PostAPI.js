import express from "express";
import { db } from "../app.js";
// import { upload } from "../Middleware/Multer.js";
import bcrypt from "bcrypt";

import multer from "multer";
import { Client } from "minio";
import path from "path";
import fs from "fs";

const PostRouter = express.Router();

PostRouter.get("/", async (request, response) => {
  try {
    const Posts = await db.selectAll();
    const images = await db.selectAllImage();

    // Create a map to store images for each postID
    const postImagesMap = new Map();
    images.forEach((image) => {
      if (!postImagesMap.has(image.postid)) {
        postImagesMap.set(image.postid, []);
      }
      postImagesMap.get(image.postid).push(image);
    });

    // Modify each post object to include image data (Option 1)
    Posts.forEach((post) => {
      if (postImagesMap.has(post.postid)) {
        post.images = postImagesMap.get(post.postid);
      } else {
        post.images = [];
      }
    });

    // Send only the aligned posts (Option 1)
    // const allPost = { posts: Posts };
    return response.status(200).send({ data: Posts });
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

// const backendURL = 'http://localhost:8080'
const minIOURL = "http://localhost:9001";

const client = new Client({
  useSSL: false,
  endPoint: "localhost",
  port: 9000,
  // endPoint: 'localhost:9001',
  accessKey: "dev",
  secretKey: "password123",
});

// try {
//   const buckets = await client.listBuckets()
//   console.log('Success', buckets)
// } catch (err) {
//   console.log(err.message)
// }

//await minioClient.fPutObject(bucket, destinationObject, sourceFile, metaData)
// console.log('File ' + sourceFile + ' uploaded as object ' + destinationObject + ' in bucket ' + bucket)

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Set a fixed upload destination for consistency
    // Consider using dynamic paths for better organization
    cb(null, "");
  },
  filename: (req, file, cb) => {
    // Generate unique filenames
    const now = Date.now();
    const ext = path.extname(file.originalname);
    cb(null, `${now}-${file.fieldname}${ext}`);
  },
});
const upload = multer({ storage: storage });

PostRouter.post("/", upload.array("image", 10), async (request, response) => {
  try {
    const { title, date, content } = request.body;

    const promises = request.files.map(async (file) => {
      const filename = file.filename;
      const stream = fs.createReadStream(file.path);

      try {
        await client.putObject("saba", filename, stream);
        console.log(`File ${filename} uploaded to MinIO bucket`);
      } catch (err) {
        console.error(`Error uploading file ${filename}:`, err);
        throw err; // Re-throw to trigger catch block below
      } finally {
        // Delete temporary file after upload (optional, consider cleanup mechanism)
        fs.unlinkSync(file.path);
      }
    });

    await Promise.all(promises); // Wait for all uploads to complete

    // Generate MinIO object URLs (optionally adjust based on access control)
    const imagePaths = request.files.map(
      (file) => `${minIOURL}/${file.filename}`
    );

    await db.insertPost(title, content, date, imagePaths);

    // const imagePaths = request.files.map(file => `${backendURL}/${file.path}`);
    // console.log(imagePaths)

    // await db.insertPost(title, content, date, imagePaths);

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
    if ("admin" !== email) {
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
