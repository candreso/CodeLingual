async function getTranslations(req, res) {
  console.log(req.query.sl); // for testing

  res.send("Inside translate() in translate.controller");
}

async function addTranslation(req, res) {
  res.send("Inside addTranslation() in translate.controller");
}

async function reportTranslation(req, res) {
  res.send("Inside reportTranslation() in translate.controller");
}

module.exports = {
  translate: getTranslations,
  add: addTranslation,
  report: reportTranslation,
};
