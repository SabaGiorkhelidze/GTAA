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
      INSERT INTO images (url, PostID) VALUES (?, ?);
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

  insertPost(title, content, date) {
    this.db.run(this.insertPostQuery, [title, content, date], function (err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`A row has been inserted with id ${this.lastID}`);
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

  deletePostByID(callback, id){
    this.db.run(this.deletePostByIDQuery, [id], (err) => {
      if(err){
        console.log(err.message)
        callback(err)
      }else{
        console.log(`deleted post with the ${id}`)
        callback(null)
      }
    })
  }
}

export default DBQueries;
