const TranslateDao = require("../dao/translate.dao");

async function apiGetTranslations(req, res) {
  console.log(req.query); // for testing
  const { sl: srcLang, tl: dstLang, code } = req.query;
  let translation = await TranslateDao.getTranslations(srcLang, dstLang, code);

  res.json(translation);
}

async function apiAddTranslation(req, res) {
  res.send("Inside addTranslation() in translate.controller");
}

async function apiReportTranslation(req, res) {
  res.send("Inside reportTranslation() in translate.controller");
}

module.exports = {
  translate: apiGetTranslations,
  add: apiAddTranslation,
  report: apiReportTranslation,
};
