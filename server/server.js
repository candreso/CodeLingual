const express = require("express");
const path = require("path");

require("dotenv").config();
require("./db.js");

const app = express();
const port = process.env.PORT || 5000; // Checking if env port is given. If not default to 5000.

app.use(express.static(path.resolve(__dirname, "../client/build")));

/* app.get("/", (req, res) => {
  res.send("<h1>Hey peeps</h1>");
}); */

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}!`);
});
