var express = require('express');
var router = express.Router();
var usertip = require("../controller/user.controller")

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post("/login", usertip.login)
router.post("/signup", usertip.signup)
router.put("/changepassword", usertip.passwordchange)


module.exports = router;
