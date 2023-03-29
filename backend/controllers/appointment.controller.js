const mongoose = require('mongoose');
const Appointment = require("../models/appointment.model");
const Prescription = require("../models/prescription.model");



exports.createAppointment = (req, res, next) => {
    const appointment = new Appointment({
        _id: new mongoose.Types.ObjectId(),
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        patientEmail: req.body.patientEmail,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        procedure: req.body.procedure,
        facility: req.body.facility,
        appDate: req.body.appDate,
        appTime: req.body.appTime,

        //projectAssociation: []
    });
    console.log(appointment)
   appointment.save()
        .then(result => {
            res.status(201).json({
                message: 'Appointment successfully created',
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

exports.getAppointments = async (req, res, next) => {
    const filter = {"patientEmail": req.query.email};
    const all = await Appointment.find(filter);

    return res.status(200).json(all)

}
