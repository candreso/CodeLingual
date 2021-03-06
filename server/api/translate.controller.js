function getTranslations(req, res) {
  res.send("Inside translate() in translate.controller");
}

function addTranslation(req, res) {
  res.send("Inside addTranslation() in translate.controller");
}

function reportTranslation(req, res) {
  res.send("Inside reportTranslation() in translate.controller");
}

module.exports = {
  translate: getTranslations,
  add: addTranslation,
  report: reportTranslation,
};
