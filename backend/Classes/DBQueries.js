import pkg from "pg";
const { Pool } = pkg;
import bcrypt from "bcrypt";

class DBQueries {
  constructor() {
    this.pool = new Pool({
      user: "postgres",
      host: "localhost",
      database: "GTAAPostDB",
      password: "password123",
      port: 5432,
    });

    // Query Commands
    this.createTablePostsQuery = `
      CREATE TABLE IF NOT EXISTS posts (
        PostID INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        title TEXT,
        "content" TEXT,
        "date" DATE
      )
    `;

    this.createTableImagesQuery = `
      CREATE TABLE IF NOT EXISTS images (
        ImageID INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        url TEXT,
        PostID INTEGER REFERENCES posts(PostID) INITIALLY DEFERRED
      )
    `;

    this.createTableUsersQuery = `
      CREATE TABLE IF NOT EXISTS users (
        UserID INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        email TEXT UNIQUE,
        password TEXT
      )
    `;

    this.insertPostQuery = `
    INSERT INTO posts (title, "content", "date")
    VALUES ($1, $2, $3)
    RETURNING PostID
    `;

    this.insertImageQuery = `
      INSERT INTO images (url, PostID) VALUES ($1, $2)
    `;

    this.selectAllPostsQuery = `
      SELECT * FROM posts
    `;

    this.selectByIDQuery = `
      SELECT * FROM posts WHERE PostID = $1
    `;

    this.deleteAllPostsQuery = `
      DELETE FROM posts
    `;

    this.deleteAllImagesQuery = `
      DELETE FROM images
    `;

    this.deletePostByIDQuery = `
      DELETE FROM posts WHERE PostID = $1 
    `;
    this.selectAllImageQuery = `
      SELECT * from images
    `;
  }

  async createTable() {
    try {
      await this.pool.query(this.createTablePostsQuery);
      console.log('Table "posts" created');

      await this.pool.query(this.createTableImagesQuery);
      console.log('Table "images" created');

      await this.pool.query(this.createTableUsersQuery);
      console.log('Table "users" created');
    } catch (err) {
      console.error("Error creating table:", err.message);
    }
  }
  async selectAllImage() {
    try {
      const images = await this.pool.query(this.selectAllImageQuery)
      console.log('images are selected')
      const uniquePostIDs = new Set();

    // Use filter to efficiently iterate and keep only unique objects
    const filteredImages = images.rows.filter(image => {
      if (!uniquePostIDs.has(image.postid)) {
        uniquePostIDs.add(image.postid); // Add to the Set for future checks
        return true; // Keep this image
      }
      return false; // Skip duplicate with same postID
    });

    // console.log('filtered images:', filteredImages);
    return filteredImages;
    } catch (error) {
      console.log('Catched error: ', error)
    }
  }
  async insertImageByPostID(client, image, postId) {
    console.log("Inserting image with postId:", postId);
    await client.query(this.insertImageQuery, [image, postId]);
    console.log(`Image inserted into images table with post ID ${postId}`);
  }

  async insertPost(title, content, date, images) {
    const client = await this.pool.connect();
    try {
      await client.query("BEGIN");

      const result = await client.query(this.insertPostQuery, [
        title,
        content,
        date,
      ]);
      const postId = result.rows[0].postid;
      console.log(postId);
      if (!postId) {
        throw new Error("Error inserting post: No rows returned");
      }

      for (const image of images) {
        await this.insertImageByPostID(client, image, postId);
      }

      await client.query("COMMIT");
    } catch (err) {
      await client.query("ROLLBACK");
      console.error("Error inserting post:", err.message);
      throw err;
    } finally {
      client.release();
    }
  }

  async selectAll() {
    try {
      const result = await this.pool.query(this.selectAllPostsQuery);
      console.log("All rows selected");
      // console.log(result.rows)
      return result.rows;
    } catch (err) {
      console.error("Error selecting all posts:", err.message);
      return [];
    }
  }

  async selectByID(id) {
    try {
      const result = await this.pool.query(this.selectByIDQuery, [id]);
      console.log("Selected by id");
      return result.rows[0];
    } catch (err) {
      console.error("Error selecting post by id:", err.message);
      return null;
    }
  }

  async deleteAllPosts() {
    try {
      await this.pool.query(this.deleteAllPostsQuery);
      console.log("All posts are deleted");
    } catch (err) {
      console.error("Error deleting all posts:", err.message);
    }
  }

  async deleteAllImages() {
    try {
      await this.pool.query(this.deleteAllImagesQuery);
      console.log("All images are deleted");
    } catch (err) {
      console.error("Error deleting all images:", err.message);
    }
  }

  async deletePostByID(id) {
    try {
      await this.pool.query(this.deletePostByIDQuery, [id]);
      console.log(`Deleted post with the ${id}`);
    } catch (err) {
      console.error("Error deleting post by id:", err.message);
    }
  }

  async selectImagesByPostID(id) {
    const selectImagesByPostIdQuery = `
      SELECT url FROM images WHERE PostID = $1
    `;

    try {
      const result = await this.pool.query(selectImagesByPostIdQuery, [id]);
      console.log("Images selected by post ID");
      return result.rows;
    } catch (err) {
      console.error("Error selecting images by post ID:", err.message);
      return [];
    }
  }

  async insertUser(email, password) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const insertUserQuery = `
        INSERT INTO users (email, password) VALUES ($1, $2)
      `;
      await this.pool.query(insertUserQuery, [email, hashedPassword]);
      console.log("User inserted successfully");
    } catch (err) {
      console.error("Error inserting user:", err.message);
    }
  }

  async getUserByEmail(email) {
    const selectUserByEmailQuery = `
      SELECT * FROM users WHERE email = $1
    `;

    try {
      const result = await this.pool.query(selectUserByEmailQuery, [email]);
      return result.rows[0];
    } catch (err) {
      console.error("Error getting user by email:", err.message);
      return null;
    }
  }
}

export default DBQueries;
