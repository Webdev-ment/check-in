const mongoose = require('mongoose');
const Prescription = require("../models/prescription.model");



exports.addPrescription = (req, res, next) => {
    const prescription = new Prescription({
        _id: new mongoose.Types.ObjectId(),
        Medicine: req.body.Medicine,
        Dosage: req.body.Dosage,
        patientEmail: req.body.patientEmail

        //projectAssociation: []
    });
    console.log(prescription)
    prescription.save()
        .then(result => {
            res.status(201).json({
                message: 'Prescription added',
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: 'fail'
            });
        });
    //return res.json({answer: "Appointment created!"})
}


exports.getPrescriptions = async (req, res, next) => {
    const filter = {"patientEmail": req.query.email};
    const all = await Prescription.find(filter);

    return res.status(200).json(all)
}
