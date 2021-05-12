// Lines copied from server.js (Modularize Database Connection Code)
const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username,
    user: "root",
    // Your MySQL password
    password: "AbdR1993!SbJv2021!",
    database: "election",
  },
  console.log("Connected to the election database.")
);

// Because this file is its own module now, we'll need to export it and add to server.js (const db = require('./db/connection');)
module.exports = db;
