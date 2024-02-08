import { json } from "express";
import pkg from "sqlite3";
const { Database } = pkg;

class DBQueries {
  constructor(databaseName, callback) {
    this.db = new Database(databaseName, callback);

    // Query Commands
    this.createTablePostsQuery = `
    CREATE TABLE IF NOT EXISTS posts (
      PostID INTEGER PRIMARY KEY,
      title TEXT,
      content TEXT,
      date DATE
    );
    `;

    this.createTableImagesQuery = `
      CREATE TABLE IF NOT EXISTS images (
        ImageID INTEGER PRIMARY KEY,
        url TEXT,
        PostID INTEGER,
        FOREIGN KEY (PostID) REFERENCES posts(PostID)
      );
    `;

    this.insertPostQuery = `
      INSERT INTO posts (title, content, date) VALUES (?, ?, ?);
    `;

    this.insertImageQuery = `
      INSERT INTO images (url, PostID) values(?, ?);
    `;

    this.selectAllPostsQuery = `
      SELECT * FROM posts;
    `;

    this.selectByIDQuery = `
      SELECT * FROM posts WHERE PostID = ?;
    `;

    this.deleteAllPostsQuery = `
    DELETE FROM posts;
  `;
    this.deleteAllImagesQuery = `
    DELETE FROM images
    `;

    this.deletePostByIDQuery = `
        DELETE FROM posts WHERE PostID = ?;
  `;
    // this.selectImagesByPostIdQuery = `
    //   SELECT id, url FROM images WHERE PostID = ?;
    // `;

    // this.createTable();
  }

  // executable methods

  createTable() {
    this.db.run(this.createTablePostsQuery, (err) => {
      if (err) console.error(err.message);
      else console.log('Table "posts" created');
    });

    this.db.run(this.createTableImagesQuery, (err) => {
      if (err) console.error(err.message);
      else console.log('Table "images" created');
    });
  }

  insertImageByPostID(image, postId) {
    try {
      this.db.run(this.insertImageQuery, [image, postId], function (err) {
        if (err) {
          console.error(
            `Error inserting image into images table: ${err.message}`
          );
        } else {
          console.log(`Image inserted into images table with post ID ${postId}`);
        }
      });
    } catch (error) {
      console.log(error)
    }
  }

  insertPost(title, content, date, images) {
    const boundInsertImageByPostID = this.insertImageByPostID.bind(this);
  
    this.db.run(this.insertPostQuery, [title, content, date], function (err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(
        `A row has been inserted into the posts table with id ${this.lastID}`
      );
  
      const postId = this.lastID;
  
      for (let i = 0; i < images.length; i++) {
        const image = images[i];
        boundInsertImageByPostID(image, postId);
      }
    });
  }
  

  selectAll(callback) {
    this.db.all(this.selectAllPostsQuery, (err, rows) => {
      if (err) {
        console.log(err.message);
        callback(err, null);
      } else {
        console.log("All rows selected");
        callback(null, rows);
      }
    });
  }

  selectByID(id, callback) {
    this.db.get(this.selectByIDQuery, [id], (err, row) => {
      if (err) {
        console.log(err.message);
        callback(err, null);
      } else {
        console.log("selected by id");
        callback(null, row);
      }
    });
  }

  deleteAllPosts(callback) {
    this.db.run(this.deleteAllPostsQuery, (err) => {
      if (err) {
        console.log(err.message);
        callback(err);
      } else {
        console.log("all posts are deleted");
        callback(null);
      }
    });
  }

  deleteAllImages(callback) {
    this.db.run(this.deleteAllImagesQuery, (err) => {
      if (err) {
        console.log(err.message)
        callback(err);
      }else{
        console.log('all images are deleted')
        callback(null)
      }
    });
  }

  deletePostByID(callback, id) {
    this.db.run(this.deletePostByIDQuery, [id], (err) => {
      if (err) {
        console.log(err.message);
        callback(err);
      } else {
        console.log(`deleted post with the ${id}`);
        callback(null);
      }
    });
  }
}

export default DBQueries;
