import pkg from "sqlite3";
const { Database } = pkg;

class DBCommands {
  constructor(databaseName, callback) {
    this.db = new Database(databaseName, callback);

    // SQL Commands
    this.createTablePostsSQL = `
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY,
      title TEXT,
      content TEXT,
      date DATE
    );
    `;

    this.createTableImagesSQL = `
      CREATE TABLE IF NOT EXISTS images (
        id INTEGER PRIMARY KEY,
        url TEXT,
        post_id INTEGER,
        FOREIGN KEY (post_id) REFERENCES posts(id)
      );
    `;

    this.insertPostSQL = `
      INSERT INTO posts (title, content) VALUES (?, ?);
    `;

    this.insertImageSQL = `
      INSERT INTO images (url, post_id) VALUES (?, ?);
    `;

    this.selectPostsSQL = `
      SELECT id, title, content, Date FROM posts WHERE id=(id) values (?);
    `;

    this.selectImagesByPostIdSQL = `
      SELECT id, url FROM images WHERE post_id = ?;
    `;

    // this.deletePostSQL = `
    //   DELETE FROM posts WHERE condition;
    // `;

    // this.createTable();
  }

  createTable() {
    this.db.run(this.createTablePostsSQL, (err) => {
      if (err) console.error(err.message);
      else console.log('Table "posts" created');
    });

    this.db.run(this.createTableImagesSQL, (err) => {
      if (err) console.error(err.message);
      else console.log('Table "images" created');
    });
  }
}

export default DBCommands;
