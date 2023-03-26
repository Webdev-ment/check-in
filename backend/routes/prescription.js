var express = require('express');
const prescriptionController = require("../controllers/prescription.controller");
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json({y: "'respond with a resource'"});
});

router.post('/add', prescriptionController.addPrescription);

module.exports = router;