var express = require('express');
const recordController = require("../controllers/record.controller");
const patientController = require("../controllers/appointment.controller");
const appointmentController = require("../controllers/appointment.controller");
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({y: "'respond with a resource'"});
});

router.post('/create', recordController.addRecord);
router.get('/get', recordController.getRecords);

module.exports = router;