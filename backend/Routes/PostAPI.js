import express from "express";
import DBQueries from "../Classes/DBQueries.js";
import { db } from "../app.js";

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
    console.log(request.params)
  const id = parseInt(request.params.id);
  try {
    if (!id) {
      return response.status(500).send({ error: "Server error, invalid ID" });
    }

    db.selectByID(id, (err, postByID) => {
      if (err)
        return response.status(500).send({ error: "Error retrieving data by id" });
       else
        return response.status(200).send({data: postByID})
    });

  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ error: error.message });
  }
});

export default PostRouter;
