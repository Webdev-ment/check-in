var express = require('express');
const prescriptionController = require("../controllers/prescription.controller");
const appointmentController = require("../controllers/appointment.controller");
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json({y: "'respond with a resource'"});
});

router.post('/add', prescriptionController.addPrescription);
router.get('/get', prescriptionController.getPrescriptions);

module.exports = router;