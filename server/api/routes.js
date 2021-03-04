var express = require("express");
var router = express.Router();

const translatePath = "/translate";
const adminPath = "/admin";

/* MAIN PAGES */
router.route("/").get();
// other pages with no associated requests: /about

/* TRANSLATE PAGES */
router.route(`${translatePath}/`).get();
router.route(`${translatePath}/add/`).post();
router.route(`${translatePath}/report/`).put();

/* ADMIN PAGES */
router.route(`${adminPath}/login/`).get(); // change to POST for security reasons?
router.route(`${adminPath}/dashboard/`);
// router.route(`${adminPath}/register/`).post(); // questionable

export default router;
