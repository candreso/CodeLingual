let trnsCol;

async function injectDb(conn) {
  if (trnsCol) {
    // database has already been injected
    return;
  }
  try {
    trnsCol = await conn.db(process.env.APP_DB).collection("translation-data");
    console.log(
      "Successfully established a collection handle in translate.dao!"
    );
  } catch (e) {
    console.error(
      `Unable to establish a collection handle in translate.dao: ${e}`
    );
  }
}

module.exports = {
  injectDb,
};
