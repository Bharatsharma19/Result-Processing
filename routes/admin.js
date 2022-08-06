let express = require("express");
let router = express.Router();

router.get("/dashboard", function (req, res) {
  let userid = req.query.userid,
    password = req.query.password;

  if (userid == "1234" && password == "1234") {
    res.render("dashboard");
  } else {
    res.render("login");
  }
});

module.exports = router;
