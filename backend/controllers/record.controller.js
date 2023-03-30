const mongoose = require('mongoose');
const Record = require("../models/record.model");
const Appointment = require("../models/appointment.model");



exports.addRecord = (req, res, next) => {
    const record = new Record({
        _id: new mongoose.Types.ObjectId(),

        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        address: req.body.address,
        patientEmail: req.body.patientEmail,
        patientNumber: req.body.patientNumber,
        birthDate: req.body.birthDate,
        medhistory: req.body.medhistory,
        emergName: req.body.emergName,
        emergNum: req.body.emergNum,
        email: req.body.emergNum

        //projectAssociation: []
    });
    console.log(record)
   record.save()
        .then(result => {
            res.status(201).json({
                message: 'Information added',
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

exports.getRecords = async (req, res, next) => {
    const filter = {};
    const all = await Record.find(filter);

    return res.status(200).json(all)

}

exports.getRecordByEmail = async (req, res, next) => {
    const filter = req.query;
    console.log(req.query)
    const all = await Record.find(filter);

    return res.status(200).json(all)

}