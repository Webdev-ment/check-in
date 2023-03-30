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
            console.log(err)
            res.status(500).json({
                error: err,
                message: 'fail'
            });
        });
    //return res.json({answer: "Appointment created!"})
}


exports.getPrescriptions = async (req, res, next) => {
    const filter = req.query.email !== "" ? {"patientEmail": req.query.email}: {};
    console.log(filter)
    const all = await Prescription.find(filter);
    console.log(all)
    return res.status(200).json(all)
}
