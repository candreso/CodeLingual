const express = require("express");
const trnsCtrl = require("./translate.controller");
const admnCtrl = require("./admin.controller");

const router = express.Router();
const translatePath = "/translate";
const adminPath = "/admin";

/* MAIN PAGES */
router.route("/").get(trnsCtrl.translate); // TO DO: remove?
// other pages with no associated requests: /about

/* TRANSLATE PAGES */
router.route(`${translatePath}/`).get(trnsCtrl.translate);
router.route(`${translatePath}/add/`).post(trnsCtrl.add);
router.route(`${translatePath}/report/`).put(trnsCtrl.report);

/* ADMIN PAGES */
router.route(`${adminPath}/login/`).get(admnCtrl.login); // change to POST for security reasons?
router.route(`${adminPath}/dashboard/`).post(admnCtrl.process);
// router.route(`${adminPath}/register/`).post(); // not set-in-stone

module.exports = router;
