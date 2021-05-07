const MongoClient = require("mongodb").MongoClient;
const translateDao = require("./dao/translate.dao");
const adminDao = require("./dao/admin.dao");

MongoClient.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    console.log("Connected to database!");
    await translateDao.injectDb(client);
    await adminDao.injectDb(client);
  });
