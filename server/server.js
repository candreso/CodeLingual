const express = require("express");
const env = require("dotenv");
const path = require("path");
require("./db.js");

env.config();

const app = express();

const PORT = process.env.PORT || 5000; // Checking if env port is given. If not default to 5000.

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/", (req, res) => {
  res.send("<h1>Hey peeps</h1>");
});

app.listen("5000", () => {
  console.log(`Server started at port ${PORT}`);
});
