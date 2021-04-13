const express = require("express");
var cors = require("cors");
const path = require("path");
const routes = require("./api/routes");
const cors = require("cors");
require("dotenv").config();
// require("./db.js");

const app = express();
const port = process.env.PORT || 5000; // Checking if env port is given. If not default to 5000.

app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../client/build")));
/* Register API routes */
app.use("/api/v1", routes);
app.use("*", express.static(path.resolve(__dirname, "../client/build")));

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}!`);
});
