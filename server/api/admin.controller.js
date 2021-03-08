function adminLogin(req, res) {
  res.send("Inside login() in admin.controller");
}

function processDashboardSub(req, res) {
  res.send("Inside process() in admin.controller");
}

module.exports = {
  login: adminLogin,
  process: processDashboardSub,
};
