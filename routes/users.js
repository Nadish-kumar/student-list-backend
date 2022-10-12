var express = require('express');
var router = express.Router();
var studenttip = require("../controller/student.controller")

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post("/", studenttip.postuser)
router.get("/get", studenttip.getuser)
router.put("/edit", studenttip.edituser)
router.delete("/delete", studenttip.deleteuser)
router.post("/main", studenttip.mainfun)

module.exports = router;
