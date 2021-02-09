const mongoose = require("mongoose");
const env = require("dotenv");
env.config();

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    // We need a db link from the .env file to connec to MongoDB.
    console.log("Connected to mongoose");
  }
);
