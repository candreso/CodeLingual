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

async function getTranslations(srcLang, dstLang, code) {
  // just for testing
  console.log("Source language: " + srcLang);
  console.log("Destination language: " + dstLang);
  console.log("Function: " + code);

  let doc;
  try {
    let query = {};
    query[`${srcLang}.code`] = code;

    let options = {
      /* TODO: add sort field */
      // sort: default
      projection: {},
    };
    options.projection[dstLang] = 1;

    console.log(query);
    console.log(options);

    doc = await trnsCol.findOne(query, options);
    console.log(doc);
  } catch (e) {
    console.error(`Unable to get specified translation, ${e}`);
    return {};
  }

  return doc;
}

module.exports = {
  injectDb,
  getTranslations,
};
