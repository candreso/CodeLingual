const express = require("express");
const path = require("path");
const routes = require("./api/routes");

require("dotenv").config();
require("./db.js");

const app = express();
const port = process.env.PORT || 5000; // Checking if env port is given. If not default to 5000.

/* Register API routes */
app.use("/", routes);
app.use("/", express.static(path.resolve(__dirname, "../client/build")));
// app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

/* app.get("/", (req, res) => {
  res.send("<h1>Hey peeps</h1>");
}); */

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}!`);
});
