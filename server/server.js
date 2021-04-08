const express = require("express");
var cors = require("cors");
const path = require("path");
const routes = require("./api/routes");

require("dotenv").config();
require("./db.js");

const app = express();
const port = process.env.PORT || 5000; // Checking if env port is given. If not default to 5000.

/* Enable CORS so client running in development mode (on port 3000) can access resources from
 * server. Will most likely be unnecessary during more advanced development stages. */
app.use(cors());

/* Register API routes */
app.use("/api/v1", routes);
app.use("/", express.static(path.resolve(__dirname, "../client/build")));
app.use("*", (req, res) => res.status(404).json({ error: "page not found" }));

/* app.get("/", (req, res) => {
  res.send("<h1>Hey peeps</h1>");
}); */

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}!`);
});
