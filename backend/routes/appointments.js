var express = require('express');
const patientController = require("../controllers/appointment.controller");
const appointmentController = require("../controllers/appointment.controller");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({y: "'respond with a resource'"});
});

router.post('/create', patientController.createAppointment);
router.get('/get', appointmentController.getAppointments);

module.exports = router;