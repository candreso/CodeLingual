const express = require("express");
const env = require("dotenv");
require("./db.js");

env.config();

const app = express();

const PORT = process.env.PORT || 5000; // Checking if env port is given. If not default to 5000.

app.get("/", (req, res) => {
  // req.send("<h1>Hey peeps</h1>");
  console.log("nice");
});

app.listen("5000", () => {
  console.log(`Server started at port ${PORT}`);
});
