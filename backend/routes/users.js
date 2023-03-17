var express = require('express');
const userController = require("../controllers/user.controller");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', userController.loginUser);

router.post('/register', userController.registerUser);

module.exports = router;
