const express = require("express");
const trnsCtrl = require("./translate.controller");
const admnCtrl = require("./admin.controller");

const router = express.Router();
const translatePath = "/translate";
const adminPath = "/admin";

/* MAIN PAGES */
router.route("/").get(trnsCtrl.translate);
// other pages with no associated requests: /about

/* TRANSLATE PAGES */
router.route(`${translatePath}/`).get(trnsCtrl.translate);
router.route(`${translatePath}/add/`).post(trnsCtrl.addTranslation);
router.route(`${translatePath}/report/`).put(trnsCtrl.reportTranslation);

/* ADMIN PAGES */
router.route(`${adminPath}/login/`).get(admnCtrl.login); // change to POST for security reasons?
router.route(`${adminPath}/dashboard/`).post(adminCtrl.processChanges);
// router.route(`${adminPath}/register/`).post(); // not set-in-stone

module.exports = router;
