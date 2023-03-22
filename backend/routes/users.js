var express = require('express');
const userController = require("../controllers/user.controller");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({x: "'respond with a resource'"});
});

router.post('/login', userController.loginUser); //http://localhost:4000/users/login

router.post('/register', userController.registerUser);



module.exports = router;
