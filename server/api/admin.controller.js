function adminSignup(req, res) {
  res.send("Inside signup() in admin.controller");
}

function adminLogin(req, res) {
  res.send("Inside login() in admin.controller");
}

function processDashboardSub(req, res) {
  res.send("Inside process() in admin.controller");
}

module.exports = {
  signup: adminSignup,
  login: adminLogin,
  process: processDashboardSub,
};
