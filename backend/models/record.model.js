const mongoose = require('mongoose');



const recordSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,

    FirstName: { type: String, required: true},
    LastName: { type: String,  required: true },
    address: { type: String,  default: true },
    patientEmail: { type: String,  default: true },
    patientNumber: { type: String,  default: true },
    birthDate: {type: Date, required: true},
    medhistory: { type: String,  required: true },
    emergName: {type: String, required: true},
    emergNum: {type: String, required: true},
    email: {type: String, required: true}


});

module.exports = mongoose.model('record', recordSchema);