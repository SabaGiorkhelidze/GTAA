import express from "express";
import { db } from "../app.js";
import { Readable } from "stream";
import { s3Client } from "../Middleware/S3.js";
import { upload } from "../Middleware/Multer.js";
import fs from "fs";
import { authenticateJWT } from "../Middleware/JWT.js";
import { PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { JWT_SECRET, bucketName } from "../config.js";

const PostRouter = express.Router();
PostRouter.use(cookieParser());

PostRouter.get("/image/:id", async (request, response) => {
  const id = request.params.id;

  try {
    const params = {
      Bucket: bucketName,
      Key: id,
    };

    const command = new GetObjectCommand(params);
    const { Body } = await s3Client.send(command);

    // Set the appropriate content type for the response
    response.setHeader("Content-Type", "image/png");

    // Pipe the data from the S3 stream to the Express response
    Readable.from(Body).pipe(response);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ error: error.message });
  }
});

function getPostImageUrl(key) {
  return `http://localhost:8080/posts/image/${key}`;
}

PostRouter.get("/", async (request, response) => {
  try {
    const Posts = await db.selectAll();
    const images = await db.selectAllImage();

    // Create a map to store images for each postID

    const postImagesMap = images.reduce((mp, image) => {
      const existing = mp.get(image.postid) || [];
      return mp.set(image.postid, [
        ...existing,
        {
          ...image,
          url: getPostImageUrl(image.url),
        },
      ]);
    }, new Map());

    const result = Posts.map((item) => {
      const images = postImagesMap.get(item.postid) || [];
      return {
        ...item,
        thumbnail: images[0] || "",
        images,
      };
    });

    return response.status(200).send({ data: result });
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
    const images = await db.selectImagesByPostID(id);
    const results = images.map((img) => {
      return {
        ...img,
        url: getPostImageUrl(img.url),
      };
    });
    const postDataWithImages = { post: postByID, images: results };
    return response.status(200).send({ data: postDataWithImages });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ error: error.message });
  }
});

PostRouter.post(
  "/",
  upload.array("image", 10),
  authenticateJWT,
  async (request, response) => {
    try {
      const { title, date, content } = request.body;

      const promises = request.files.map(async (file) => {
        const filename = new Date().getTime().toString() + file.filename;
        const mimetype = file.mimetype;
        const stream = fs.createReadStream(file.path);

        try {
          // Upload image
          const command = new PutObjectCommand({
            Bucket: bucketName,
            Key: filename,
            Body: stream,
            ContentType: mimetype,
          });
          const fil = await s3Client.send(command);
          return filename;
          console.log(`File ${filename} uploaded to MinIO bucket`);
        } catch (err) {
          console.error(`Error uploading file ${filename}:`, err);
          throw err; 
        } finally {
          fs.unlinkSync(file.path);
        }
      });

      const imageKeys = await Promise.all(promises); // Wait for all uploads to complete

      await db.insertPost(title, content, date, imageKeys);

      response
        .status(201)
        .json({ message: "Post Uploaded in database succesfully" });
    } catch (error) {
      console.error("Error creating post:", error);
      response.status(500).json({ error: "Internal Server Error" });
    }
  }
);

PostRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Authenticate user (replace this with your database logic)
    if (email === "admin" && password === "admin") {
      const token = jwt.sign({ email }, JWT_SECRET);
      res.cookie("token", token, { httpOnly: true });
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default PostRouter;
