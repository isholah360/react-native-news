// userModel.js (CommonJS syntax)

const db = require('../utils//db'); // Assuming db.js initializes SQLite
const bcrypt = require('bcryptjs');

// User Model Definition (Class)
class User {
  static createTable() {
    db.serialize(() => {
      db.run(`
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          firstname TEXT NOT NULL,
          lastname TEXT NOT NULL,
          email TEXT UNIQUE NOT NULL,
          password TEXT NOT NULL
        );
      `);
    });
  }

  static register(firstname, lastname, email, password, callback) {
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return callback(err);
      }

      const sql = 'INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)';
      db.run(sql, [firstname, lastname, email, hashedPassword], function (err) {
        if (err) {
          return callback(err);
        }
        callback(null, { id: this.lastID, firstname, lastname, email, password });
      });
    });
  }

  static login(email, password, callback) {
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.get(sql, [email], (err, row) => {
      if (err) {
        return callback(err);
      }
      if (!row) {
        return callback(null, null); // User not found
      }

      bcrypt.compare(password, row.password, (err, isMatch) => {
        if (err) {
          return callback(err);
        }
        if (isMatch) {
          callback(null, row); // Password matched
        } else {
          callback(null, null); // Invalid password
        }
      });
    });
  }
}

module.exports = User;
