const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

MongoClient.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(() => {
    // We need a db link from the .env file to connect to MongoDB.
    console.log("Connected to database!");
  });
