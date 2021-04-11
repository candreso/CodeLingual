let admnCol;

async function injectDb(conn) {
  if (admnCol) {
    // database has already been injected
    return;
  }
  try {
    admnCol = await conn.db(process.env.APP_DB).collection("admin-data");
    console.log("Successfully established a collection handle in admin.dao!");
  } catch (e) {
    console.error(`Unable to establish a collection handle in admin.dao: ${e}`);
  }
}

/* add helper functions here, and link to module.exports for use in admin.controller.js
 * and db.js */

module.exports = {
  injectDb,
};
