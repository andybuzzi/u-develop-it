const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

// Default response for any other request (Not Found) --> This has to be the last route to not override the other ones. (catchall route)

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
