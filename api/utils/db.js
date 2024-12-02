// db.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');


const dbFilePath = path.join(__dirname, 'mydb.db'); 


const db = new sqlite3.Database(dbFilePath, (err) => {
  if (err) {
    console.error('Could not connect to the database', err);
  } else {
    console.log(`Connected to SQLite database at ${dbFilePath}`);
  }
});


module.exports = db;
